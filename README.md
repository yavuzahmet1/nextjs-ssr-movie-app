Next.js Movie Site

This project is a movie site built using Next.js. It features trending movies, Firebase authentication for user login, and styling with Tailwind CSS.
Features

    Trending Movies: Lists current movies fetched from an API.

    Firebase Authentication: Allows users to sign up and log in.

    Tailwind CSS: Modern and responsive design using Tailwind CSS.

    PNPM: Package management handled by PNPM.

Installation

Follow these steps to run the project locally:

    Clone the Repository:
    bash
    Copy

    git clone https://github.com/your-username/repo-name.git
    cd repo-name

    Install Dependencies:
    bash
    Copy

    pnpm install

    Firebase Configuration:

        Create a Firebase project and add your firebaseConfig details to the .env.local file:
        env
        Copy

        NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
        NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
        NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
        NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
        NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
        NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id

    Run the Project:
    bash
    Copy

    pnpm run dev

    View in Browser:
    The project will run at http://localhost:3000.

Technologies Used

    Next.js: React-based SSR and static site generation.

    Firebase: User authentication and session management.

    Tailwind CSS: Fast and modern styling.

    PNPM: Efficient package management.

Contributing

If you'd like to contribute to the project, please submit a Pull Request. Your suggestions and feedback are always welcome!
License

This project is licensed under the MIT License.