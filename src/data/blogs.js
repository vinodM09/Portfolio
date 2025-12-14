export const blogs = [
  {
    id: "payments-stop-being-just-a-feature",
    publication: "Personal Blog",
    author: "Vinod Mali",
    title: "Building a Production-Grade Payment System",
    tldr:
      "Building a production-grade payment system taught me why verification, failure handling, and backend authority matter more than UI success screens.",
    date: "Oct 14, 2025",
    readTime: "8 min read",
    claps: 0,
    comments: 0,
    coverImage: "/images/payment_flowchart.png",
    imageDescription: "End-to-end payment flow with verification.",
    content: [
      {
        type: "paragraph",
        text:
          "At first glance, a payment button looks harmless. Click, redirect, pay, come back. But the moment real users and real money enter the picture, that illusion breaks quickly. Browsers crash, networks drop, gateways delay confirmations, and users disappear halfway through the flow. When I started implementing payments in a real-world project, I realized that the hardest part was not making the gateway work, but making the system behave correctly when things went wrong.",
      },
      {
        type: "paragraph",
        text:
          "That shift in thinking changed everything about how I approached this feature.",
      },
      {
        type: "heading",
        text: "Thinking in Systems, Not Screens",
      },
      {
        type: "paragraph",
        text:
          "One of the earliest decisions I made was to stop treating the frontend as a reliable narrator of truth. A user returning from a payment page does not mean the payment succeeded. A green success screen does not mean the money actually arrived. In distributed systems, appearances lie.",
      },
      {
        type: "paragraph",
        text:
          "So instead of designing around screens and routes, I designed around state. Every payment attempt became an entity of its own, tracked from birth to resolution. The database was no longer just storage. It became the memory of the system, the place where truth lives even when everything else fails.",
      },
      {
        type: "paragraph",
        text:
          "This single decision made the rest of the architecture fall into place naturally.",
      },
      {
        type: "heading",
        text: "Why the Backend Had to Take Control",
      },
      {
        type: "paragraph",
        text:
          "Once money is involved, the backend cannot be passive. It has to be authoritative.",
      },
      {
        type: "paragraph",
        text:
          "Every payment starts its life on the server, not in the UI. Before the user ever sees a gateway page, the backend creates a transaction record and commits to remembering that this attempt exists. Even if the server crashes seconds later, that intent is preserved.",
      },
      {
        type: "paragraph",
        text:
          "This approach changes the mental model. Instead of asking whether the user paid, the system asks what the current state of the transaction is. That question can always be answered by looking at the database, not by guessing based on redirects or callbacks.",
      },
      {
        type: "heading",
        text: "Trusting Verification Over Assumption",
      },
      {
        type: "paragraph",
        text:
          "One of the most tempting mistakes in payment flows is trusting the redirect. If the user comes back from the gateway, it feels natural to assume success. I deliberately avoided that shortcut.",
      },
      {
        type: "paragraph",
        text:
          "In my implementation, the return from the payment gateway is treated as nothing more than a signal to start verification. The frontend asks the backend what it knows about the transaction. The backend then verifies the status directly with the gateway and updates its records accordingly.",
      },
      {
        type: "paragraph",
        text:
          "This extra step adds complexity, but it buys certainty. Payments are not confirmed by navigation. They are confirmed by verification.",
      },
      {
        type: "heading",
        text: "Living With Uncertainty and Pending States",
      },
      {
        type: "paragraph",
        text:
          "Not every payment resolves instantly. Some stay in a pending state longer than expected. Instead of fighting that reality, the system embraces it.",
  //       image: "/images/payment_arc_new.png",
  // caption: "Payment states can remain pending due to network or bank delays"
      },
      {
        type: "paragraph",
        text:
          "When a transaction is pending, the UI reflects uncertainty rather than hiding it. Behind the scenes, the backend continues to check the gateway until a final state is reached. This prevents false failures and reduces user anxiety without compromising correctness.",
      },
      {
        type: "paragraph",
        text:
          "Handling pending states well turned out to be one of the most important aspects of the entire system.",
      },
      {
        type: "heading",
        text: "The Quiet Importance of Reconciliation",
      },
      {
        type: "paragraph",
        text:
          "The most invisible part of this system is also the most powerful. A background reconciliation job runs periodically, scanning for transactions that never reached a clean conclusion. Some users never return after paying. Some gateways respond late. Some network requests simply vanish.",
      },
      {
        type: "paragraph",
        text:
          "Instead of letting these become permanent inconsistencies, the system revisits them calmly in the background, verifies their status, and corrects the database accordingly. This is where the system stops being reactive and starts being resilient.",
      },
      {
        type: "paragraph",
        text:
          "Most users will never know this job exists. That is exactly the point.",
      },
      {
        type: "heading",
        text: "What This Project Taught Me",
      },
      {
        type: "paragraph",
        text:
          "Building this payment system taught me that production engineering is less about happy paths and more about humility. You assume things will break. You accept that control is limited. And you design systems that can recover without panic.",
      },
      {
        type: "paragraph",
        text:
          "As a student, this project reshaped how I think about software. I stopped chasing features and started chasing guarantees. Correctness became more important than speed. Clarity became more valuable than cleverness.",
      },
      {
        type: "heading",
        text: "Why I’m Proud of This Work",
      },
      {
        type: "paragraph",
        text:
          "This payment system is not impressive because it integrates a gateway. It is meaningful because it behaves correctly under stress. It does not panic when users disappear. It does not trust what it cannot verify. And it always knows the truth, even when the UI does not.",
      },
      {
        type: "paragraph",
        text:
          "For me, this was the moment when I stopped feeling like someone who just builds projects and started feeling like someone who builds systems.",
      },
    ],
  },
];