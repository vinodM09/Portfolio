export const blogs = [
  {
    id: "payments-stop-being-just-a-feature",
    publication: "Personal Blog",
    author: "Vinod Mali",
    title: "Building a Payment System",
    tldr:
      "Payment feature implementation using React, Node.js, Express.js, MongoDB, and PhonePe..",
    date: "Oct 14, 2025",
    readTime: "5 min read",
    claps: 0,
    comments: 0,
    relatedProject: {
    id: "isa",
    title: "ISA Website",
    description: "Interstellar SpaceTech Astronomy Community"
  },
    coverImage: "/images/payment_flowchart.png",
    content: [
  {
    type: "paragraph",
    text:
      "Most payment integrations look deceptively simple from the outside. A button, a redirect, a success screen. But the moment a system handles real users, real networks, and real money, that simplicity collapses. Payments stop being a UI concern and start behaving like a [[distributed system]] problem, where delays, retries, and partial failures are normal.",
  },
  {
    type: "paragraph",
    text:
      "This case study documents the payment system I built for a production platform using [[React]], [[Node.js]], [[Express.js]], [[MongoDB]], and the [[PhonePe]] payment gateway. The goal was not to integrate an SDK, but to design a payment flow that remains correct under browser crashes, delayed gateway confirmations, and users abandoning the flow halfway.",
  },

  {
    type: "heading",
    text: "Treating Payments as Stateful Systems",
  },
  {
    type: "paragraph",
    text:
      "The foundational design decision was to treat every payment as a [[stateful entity]], not as an action. A payment does not simply happen. It transitions through states such as created, pending, successful, failed, or expired.",
  },
  {
    type: "paragraph",
    text:
      "From the very first backend request, a payment transaction is created and persisted in [[MongoDB]]. This record exists before any redirect to the gateway occurs. By persisting intent early, the system guarantees that payment attempts are never lost, even if the frontend crashes or the user closes the browser mid-flow.",
  },

  {
    type: "heading",
    text: "Backend Ownership and Transaction Lifecycle",
  },
  {
    type: "paragraph",
    text:
      "The backend owns the payment lifecycle end to end. When the frontend initiates a payment, it does not talk to [[PhonePe]] directly. Instead, it requests the backend to create a new payment attempt.",
  },
  {
    type: "paragraph",
    text:
      "The backend validates the purchasable item, generates a unique transaction identifier, stores an initial transaction document with a clear starting state, and only then communicates with the gateway using the official SDK. Gateway-generated identifiers are stored alongside the transaction to allow reliable verification and reconciliation later.",
  },

  {
    type: "heading",
    text: "Redirects Are Signals, Not Confirmation",
  },
  {
    type: "paragraph",
    text:
      "One of the most common mistakes in payment systems is treating a successful redirect as a successful payment. This system explicitly avoids that assumption. A redirect only signals that the user attempted a payment, not that money actually moved.",
  },
  {
    type: "paragraph",
    text:
      "After returning from the gateway, the frontend navigates the user to a verification page whose sole responsibility is to ask the backend for the authoritative transaction state. The backend then verifies the payment directly with [[PhonePe]] and updates the transaction only after receiving a confirmed response.",
  },

  {
    type: "heading",
    text: "Handling Asynchronous and Pending Payments",
  },
  {
    type: "paragraph",
    text:
      "Real payment gateways are inherently asynchronous. Payments do not always resolve instantly. Some remain in a pending state due to bank latency, network delays, or user-side issues.",
  },
  {
    type: "paragraph",
    text:
      "Instead of treating pending as failure, the system models pending as a valid state. The frontend reflects uncertainty clearly, while the backend continues to verify the transaction until a final state is reached. This approach avoids false failures and prevents duplicate payment attempts.",
  },

  {
    type: "heading",
    text: "Idempotent Verification and Safe Retries",
  },
  {
    type: "paragraph",
    text:
      "Verification endpoints are designed to be [[idempotent]]. Multiple status checks, duplicate callbacks, or retries do not corrupt transaction state. Each verification request compares the gateway response with the current persisted state before applying a valid transition.",
  },
  {
    type: "paragraph",
    text:
      "This prevents race conditions where concurrent requests attempt to update the same transaction and ensures that late gateway responses cannot overwrite already finalized states.",
  },

  {
    type: "heading",
    text: "Background Reconciliation as a Reliability Layer",
  },
  {
    type: "paragraph",
    text:
      "Even with careful frontend and backend handling, some transactions inevitably fall through the cracks. Users abandon flows, callbacks arrive late, or network requests disappear.",
  },
  {
    type: "paragraph",
    text:
      "To handle this, the system includes a background reconciliation job that periodically scans unresolved transactions, re-verifies them with the gateway, expires abandoned attempts, and updates the database accordingly. This job ensures [[eventual consistency]] without user involvement.",
  },

  {
    type: "heading",
    text: "Data Model as a Contract",
  },
  {
    type: "paragraph",
    text:
      "The transaction schema in [[MongoDB]] is intentionally expressive. It captures payment state, gateway identifiers, timestamps, item metadata, and refund information where applicable.",
  },
  {
    type: "paragraph",
    text:
      "This schema acts as a contract between system components. Frontend verification, backend controllers, and reconciliation jobs all operate against the same canonical representation of a payment.",
  },

  {
    type: "heading",
    text: "Why This System Works in Production",
  },
  {
    type: "paragraph",
    text:
      "This system works not because it integrates a gateway, but because it aligns with how distributed systems actually behave. Failure, delay, retries, and partial completion are treated as normal conditions, not edge cases.",
  },
  {
    type: "paragraph",
    text:
      "The frontend never decides truth. The backend never trusts redirects. The database never forgets intent. Each layer has a clearly defined responsibility, and no component is trusted beyond what it can actually guarantee.",
  },
]
  },
  {
    id: "when-registration-becomes-ticketing",
    publication: "Personal Blog",
    author: "Vinod Mali",
    title: "Implementing Event Registration (Ticketing System)",
    tldr:
      "Full-stack event registration flow with free and paid events, QR-based tickets, and backend-driven validation.",
    date: "Oct 18, 2025",
    readTime: "6 min read",
    claps: 0,
    comments: 0,
    relatedProject: {
      id: "isa",
      title: "ISA Website",
      description: "Interstellar SpaceTech Astronomy Community",
    },
    coverImage: "/images/qr_flowchart_.svg",
    content: [
      {
        type: "paragraph",
        text:
          "Event registration looks simple at first. Click register, see a confirmation message, done. That illusion breaks the moment you introduce real constraints such as limited seats, paid access, identity checks, and entry validation. At that point, registration is no longer a boolean flag. It becomes a [[ticketing system]].",
      },
      {
        type: "paragraph",
        text:
          "This blog documents how I implemented a full event registration flow for a production platform using [[React]], [[Node.js]], and [[MongoDB]]. The system supports both free and paid events, integrates with the payment layer, generates QR-based tickets, and validates attendees at entry using backend verification.",
      },

      {
        type: "heading",
        text: "Registration as a State-Driven Process",
      },
      {
        type: "paragraph",
        text:
          "The first design decision was to treat registration as a process, not a button click. A user is not simply registered or not registered. Eligibility depends on event type, seat availability, payment status, and whether the user has already registered.",
      },
      {
        type: "paragraph",
        text:
          "On the frontend, this logic is centralized inside a dedicated [[RegisterButton]] component. Instead of blindly calling an API, the component derives its behavior from event metadata and user state. Free events, paid events, full events, and already-registered users all result in different actions, preventing invalid requests from reaching the backend.",
      },

      {
        type: "heading",
        text: "Free vs Paid Event Registration",
      },
      {
        type: "paragraph",
        text:
          "The backend registration logic explicitly separates free and paid event flows. For free events, the backend validates the user, checks seat capacity, ensures the user is not already registered, and appends the user ID to the event’s registeredUsers list stored in [[MongoDB]].",
      },
      {
        type: "paragraph",
        text:
          "For paid events, registration is never triggered directly. The backend refuses to register a user unless a successful payment transaction already exists for that user and event. This is enforced by querying the [[transactions]] collection and verifying payment status before completing registration.",
      },

      {
        type: "heading",
        text: "Payment as a Gate",
      },
      {
        type: "paragraph",
        text:
          "Paid registration does not happen as a side effect of payment. Payment acts as a gate that unlocks registration eligibility. When a user clicks register for a paid event, the frontend opens a payment modal instead of calling the registration endpoint.",
      },
      {
        type: "paragraph",
        text:
          "The payment system creates a transaction, redirects the user to the gateway, and updates the transaction status asynchronously. Only after the transaction is confirmed as successful does the registration controller accept the request. This ensures registrations are never created optimistically.",
      },

      {
        type: "heading",
        text: "Ticket Generation Using QR Codes",
      },
      {
        type: "paragraph",
        text:
          "Once registration succeeds, the system generates a ticket in the form of a [[QR code]]. The QR code encodes a unique identifier tied to both the user and the event, ensuring one-to-one mapping between attendee and ticket.",
      },
      {
        type: "paragraph",
        text:
          "QR generation happens server-side to prevent tampering. The generated ticket is attached to a confirmation email, allowing users to present their ticket at entry without needing to log into the platform again.",
      },

      {
        type: "heading",
        text: "QR Code Validation at Entry",
      },
      {
        type: "paragraph",
        text:
          "At event entry, QR codes are scanned and validated against backend records. Validation checks whether the ticket exists, whether it belongs to the correct event, and whether it has already been used.",
      },
      {
        type: "paragraph",
        text:
          "Because validation relies on backend state rather than client data, forged or reused QR codes are automatically rejected. This transforms registration from a simple form submission into a controlled access mechanism.",
      },

      {
        type: "heading",
        text: "Why Registration Logic Lives on the Backend",
      },
      {
        type: "paragraph",
        text:
          "All critical registration decisions are enforced on the backend. The frontend reflects state and initiates allowed actions, but it never decides truth. Seat limits, payment verification, duplicate registrations, and ticket validation rely entirely on persistent backend data.",
      },

      {
        type: "heading",
        text: "End-to-End Registration Flow",
      },
      {
        type: "code",
        code: `User
  |
  v
Events Page (Frontend)
  |
  v
Click Register
  |
  v
RegisterButton Logic
  |
  v
Free or Paid Event
  |
  v
Payment (if required)
  |
  v
Backend Registration
  |
  v
QR Ticket Generated
  |
  v
Confirmation Email
  |
  v
Event Entry
  |
  v
QR Validation`,
      },

      {
        type: "heading",
        text: "Why This Matters",
      },
      {
        type: "paragraph",
        text:
          "This registration system works because it assumes real-world behavior. Users retry actions, payments lag, events reach capacity, and entry requires validation. Instead of treating these as edge cases, the system treats them as expected conditions and enforces correctness at every step.",
      },
    ],
  },
];