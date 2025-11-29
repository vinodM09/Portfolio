import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope } from "react-icons/fa";
import { Snackbar, Alert } from "@mui/material";

export default function ContactMe() {
  const form = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [toast, setToast] = useState({
    open: false,
    message: "",
    type: "success",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setToast({
            open: true,
            message: "Message sent successfully!",
            type: "success",
          });
          setIsSending(false);
          form.current?.reset();
        },
        () => {
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
    <div className="max-w-7xl bg-white text-gray-900 font-sans">
      <main className="w-full mx-auto md:px-6 pb-16">
        <section className="relative py-20 px-4 md:px-0 text-left">
          <h2 className="text-3xl mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-10">
            Have a question, collaboration idea, or project proposal? Fill out
            the form below, and I’ll get back to you soon.
          </p>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col space-y-4"
          >
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="border p-3 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-black flex-1"
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="border p-3 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-black flex-1"
              />
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="border p-3 rounded-lg bg-transparent h-32 focus:outline-none focus:ring-2 focus:ring-black"
            />

            <button
              type="submit"
              disabled={isSending}
              className="border border-black px-6 py-2 rounded-full text-sm hover:bg-black hover:text-white transition-all duration-300"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </section>

        <section className="max-w-7xl mx-auto border-b border-gray-200 text-white px-4 md:px-0 py-10">
          <div className="pb-6 px-4 bg-black rounded-3xl mx-auto py-10">
            <h2 className="text-3xl font-normal text-start mb-4">
              Prefer direct email?
            </h2>
            <a
              href="mailto:snvinod09@gmail.com"
              className="inline-flex items-center gap-2 text-sm border border-white !text-white px-3 py-1 rounded-full"
            >
              <FaEnvelope /> snvinod09@gmail.com
            </a>
          </div>
        </section>
      </main>

      {/* Toast Notification */}
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