// React imports and hooks
import React, { useRef, useState } from "react";
// EmailJS for handling email sending
import emailjs from "@emailjs/browser";
// Icons and UI components
import { FaEnvelope } from "react-icons/fa";
import { Snackbar, Alert } from "@mui/material";

/**
 * ContactMe Component
 * A form for users to send messages via EmailJS, with a direct email option.
 */
export default function ContactMe() {
  // Ref for the form element
  const form = useRef(null);
  // State to track if the email is currently being sent
  const [isSending, setIsSending] = useState(false);
  // State for the toast notification
  const [toast, setToast] = useState({
    open: false,
    message: "",
    type: "success",
  });

  /**
   * Handles the form submission to send an email.
   * @param {React.FormEvent} e - The form submission event.
   */
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    if (!form.current) return;

    // Sending the form data using EmailJS
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          // On success, show a success toast and reset the form
          setToast({
            open: true,
            message: "Message sent successfully!",
            type: "success",
          });
          setIsSending(false);
          form.current?.reset();
        },
        () => {
          // On failure, show an error toast
          setToast({
            open: true,
            message: "Failed to send message. Try again.",
            type: "error",
          });
          setIsSending(false);
        }
      );
  };

  return (
    <div className="max-w-5xl font-sans">
      <main className="w-full mx-auto">
        {/* Contact form section */}
        <section className="relative py-10 px-4 md:px-0 text-left">
          <h2 className="text-3xl mb-4 dark:text-white">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-10">
            Have a question, collaboration idea, or project proposal? Fill out
            the form below, and I’ll get back to you soon.
          </p>

          {/* Contact form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col space-y-4"
          >
            {/* Name and Email input fields */}
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="border dark:border-neutral-700 p-3 rounded-lg bg-transparent dark:bg-neutral-900 dark:text-white dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white flex-1"
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="border dark:border-neutral-700 p-3 rounded-lg bg-transparent dark:bg-neutral-900 dark:text-white dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white flex-1"
              />
            </div>

            {/* Message textarea */}
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="border dark:border-neutral-700 p-3 rounded-lg bg-transparent dark:bg-neutral-900 dark:text-white dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            />

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSending}
              className="border border-black dark:border-neutral-700 px-6 py-2 rounded-full text-sm hover:bg-black hover:text-white dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800 transition-all duration-300"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </section>
      </main>

      {/* Toast notification for feedback */}
      <Snackbar
        open={toast.open}
        autoHideDuration={3000}
        onClose={() => setToast((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity={toast.type}
          variant="outlined"
          onClose={() => setToast((prev) => ({ ...prev, open: false }))}
          sx={{
            backgroundColor: "white",
            borderColor: "#ccc",
            color: "black",
          }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </div>
  );
}