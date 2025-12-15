export const blogs = [
  {
    id: "payments-stop-being-just-a-feature",
    publication: "Personal Blog",
    author: "Vinod Mali",
    title: "Building a Production-Grade Payment System",
    tldr:
      "Implementing a real payment system taught me why verification, failure handling, and backend ownership matter more than success screens.",
    date: "Oct 14, 2025",
    readTime: "9 min read",
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
      "As developers, we often treat payments like a checklist item. Integrate a gateway, handle a redirect, show a success screen, move on. That mindset works fine until real users and real money enter the picture. Then everything you assumed was reliable suddenly is not.",
  },
  {
    type: "paragraph",
    text:
      "I learned this while implementing a payment system for a real-world project as a full-stack developer. What started as just adding PhonePe slowly turned into a lesson in distributed systems, verification, and failure handling. This blog is not about wiring a payment SDK. It is about designing a payment system that behaves correctly when things go wrong.",
  },

  {
    type: "heading",
    text: "The Moment the Problem Became Real",
  },
  {
    type: "paragraph",
    text:
      "The requirement was straightforward. Users needed to pay for events and webinars. But the moment I stepped back and thought like an engineer instead of a feature implementer, uncomfortable questions surfaced.",
  },
  {
    type: "paragraph",
    text:
      "What if the user closes the browser after paying? What if the gateway confirms the payment but the frontend never returns? What if the status remains pending longer than expected, or callbacks arrive twice or not at all? Payments are not a UI problem. They are a state management problem. Once I accepted that, the architecture began to shape itself.",
  },

  {
    type: "heading",
    text: "Designing with One Core Rule",
  },
  {
    type: "paragraph",
    text:
      "The most important decision I made was simple in wording but heavy in impact. The frontend is never the source of truth.",
  },
  {
    type: "paragraph",
    text:
      "Browsers refresh. Tabs close. Networks fail. Any system that trusts the UI to determine payment success is fragile by design. The backend had to own the entire lifecycle of a payment, from intent to final resolution, regardless of what the user interface did or did not do.",
  },

  {
    type: "heading",
    text: "Client Side: Intent, Not Authority",
  },
  {
    type: "paragraph",
    text:
      "On the client side, the responsibility is intentionally limited. The frontend captures user intent and reflects state. It does not decide outcomes. When a user chooses to pay, a confirmation modal initiates the process by calling a backend endpoint. The backend responds with a payment URL, and the frontend redirects the user to PhonePe.",
  },
  {
    type: "paragraph",
    text:
      "There is no business logic here, no assumptions about success, and no shortcuts. After payment, the user is redirected back to the application. A redirect is not a confirmation. In this system, it is treated as a signal to start verification. The frontend remains reactive, not authoritative.",
  },

  {
    type: "heading",
    text: "Server Side: Owning the Truth",
  },
  {
    type: "paragraph",
    text:
      "The backend is where the real engineering lives. Every payment begins with a transaction record in MongoDB. Before any call to PhonePe is made, the system creates a transaction with a clear initial state. This transaction is not an implementation detail. It is the backbone of the system.",
  },
  {
    type: "paragraph",
    text:
      "Once the transaction exists, the system remembers intent. Even if the server crashes, the browser closes, or the network drops, the payment attempt is not lost. This is the difference between hoping things work and designing for failure.",
  },

  {
    type: "heading",
    text: "Initiation Is Easy. Verification Is Everything.",
  },
  {
    type: "paragraph",
    text:
      "Initiating a payment is the simplest part. The backend validates the item being purchased, constructs a payload, and uses the PhonePe SDK to generate a payment URL. Gateway identifiers are stored alongside the transaction so the system can always reconcile later.",
  },
  {
    type: "paragraph",
    text:
      "Verification is where most of the complexity lies. When the frontend requests payment status, the backend does not trust redirects or query parameters. It communicates directly with PhonePe to fetch the authoritative status and updates the transaction carefully. A payment is marked successful only when the gateway confirms it.",
  },

  {
    type: "heading",
    text: "Pending Is Not a Bug",
  },
  {
    type: "paragraph",
    text:
      "One of the most important lessons I learned is that pending payments are normal. Real payment gateways operate asynchronously, and transactions can remain pending for seconds or minutes.",
  },
  {
    type: "paragraph",
    text:
      "In this system, pending is treated as a valid state. The frontend reflects uncertainty instead of hiding it, while the backend continues verification until a final state is reached. This patience avoids false negatives and builds trust.",
  },

  {
    type: "heading",
    text: "Reconciliation: The Silent Safety Net",
  },
  {
    type: "paragraph",
    text:
      "No matter how carefully you design the main flow, some transactions will fall through the cracks. Users disappear, callbacks fail, and network requests vanish.",
  },
  {
    type: "paragraph",
    text:
      "To handle this, I implemented a background reconciliation job that periodically scans unresolved transactions, re-verifies them with PhonePe, expires abandoned ones, and updates the database. This job is invisible to users, but it is what makes the system reliable.",
  },

  {
    type: "heading",
    text: "Why This Architecture Works",
  },
  {
    type: "paragraph",
    text:
      "This system works not because it integrates a gateway, but because it respects reality. The backend owns state, the database is the source of truth, the frontend reflects rather than decides, verification beats assumption, and background jobs clean up what humans and networks break.",
  },

  {
    type: "heading",
    text: "What This Taught Me as a Student",
  },
  {
    type: "paragraph",
    text:
      "Building this payment system changed how I think about software. I stopped measuring success by whether something worked once and started measuring it by whether it could survive failure.",
  },
  {
    type: "paragraph",
    text:
      "I learned that real-world engineering is less about clever code and more about defensive design, less about happy paths and more about recovery, and less about speed and more about correctness.",
  },

  {
    type: "heading",
    text: "Closing Thoughts",
  },
  {
    type: "paragraph",
    text:
      "Payments force you to grow as a developer. They expose weak assumptions and reward thoughtful design. As a student, taking on this challenge taught me more than any tutorial or course ever could.",
  },
  {
    type: "paragraph",
    text:
      "If there is one takeaway, it is this: when money is involved, correctness is not optional. Design for failure first, and the rest will follow.",
  },
]
  },
];