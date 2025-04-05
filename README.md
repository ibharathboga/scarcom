# About Scarcom
Scarcom is a real-time chat application built using Next.js, Pusher, and PostgreSQL. It implements core features for instant messaging between registered users.

## Key Features

*   **Real-Time Messaging:** Leveraging WebSocket technology via Pusher, messages are delivered instantly between users without needing manual refreshes.
*   **Responsive User Interface:** Built with Next.js, Tailwind CSS, and the elegant Shadcn UI component library, the interface adapts beautifully to various screen sizes, offering a consistent experience across devices.
*   **Secure User Authentication:** User accounts are protected with secure password hashing using bcrypt. Session management and authorization are handled reliably through JSON Web Tokens (JWT).
*   **Persistent Data:** Conversations and user information are securely stored in a robust PostgreSQL database (via Neon), ensuring data integrity and availability.

## Tech Stack

### Frontend:

*   **Next.js:** A React framework for server-side rendering, static site generation, and building fast user interfaces.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
*   **Shadcn UI:** A collection of beautifully designed, accessible, and reusable UI components.

### Backend & Database:

*   **PostgreSQL (via Neon):** A powerful, popular, serverless relational database providing reliable data storage.
*   **Drizzle ORM:** A modern TypeScript ORM used for database interactions.
*   **Next.js API Routes:** Handling backend logic and API endpoints within the Next.js framework.

### Real-Time Communication:

*   **Pusher:** A service simplifying the implementation of WebSockets for real-time features.

### Authentication:

*   **bcrypt:** Industry-standard library for password hashing.
*   **JWT (JSON Web Tokens):** Used for secure user authorization and session management.

### Deployment:

*   **Vercel:** A platform optimized for deploying Next.js applications with ease and scalability.

## Acknowledgements

This project would not have been possible without the help and inspiration from various resources. I would like to express my gratitude to all who have been helpful to me in my journey, especially to the people who teach and explain on YouTube, StackOverflow, GitHub discussions and Reddit, as well as those responsible for documentation works and libraries.

## References

*   [fix: shadcn sidebar mobile issue (github)](https://github.com/shadcn-ui/ui/issues/5746#issuecomment-2461248985)
*   [way to change tab icon (stack overflow)](https://stackoverflow.com/questions/75674866/adding-favicon-to-nextjs-app-router-application/76412379#76412379)
*   [radix tooltip (radix ui documentation)](https://www.radix-ui.com/primitives/docs/components/tooltip)
*   [bcryptjs instead of bcrypt (reddit)](https://www.reddit.com/r/nextjs/comments/1ajp6nm/comment/kp2le9c/?rdt=64292)
*   [postgres sequence (youtube)](https://www.youtube.com/watch?v=hpL9C5FWIRk)
*   [to be able to scroll to bottom with a click (stack overflow)](https://stackoverflow.com/questions/37620694/how-to-scroll-to-bottom-in-react)
*   [get form data in react (stack overflow)](https://stackoverflow.com/questions/23427384/get-form-data-in-react)
*   [to get user info via nextauth js token (stack overflow)](https://stackoverflow.com/questions/75638720/nextauth-js-credentials-provider-unable-to-return-user-or-error-message/75639662#75639662)
*   [dynamic routes (nextjs documentation)](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#dynamic-route-segments)
*   [being able to print readable stream (stack overflow)](https://stackoverflow.com/questions/40385133/retrieve-data-from-a-readablestream-object)
