🧱 Dev-Stack-Builder

A modern and responsive React + TypeScript application for exploring technologies and building a personalized development stack. 🚀

Dev-Stack-Builder allows developers to explore technologies, filter them by category, view useful technology information, and build a custom development stack in real time. Users can add and remove technologies, prevent duplicates, clear their entire stack, and receive instant feedback through toast notifications.

---

📑 Table of Contents

- "About the Project" (#about-the-project)
- "Live Demo" (#live-demo)
- "Preview" (#preview)
- "Project Overview" (#project-overview)
- "Key Features" (#key-features)
- "Tech Stack" (#tech-stack)
- "Project Structure" (#project-structure)
- "Application Architecture" (#application-architecture)
- "Data Structure" (#data-structure)
- "Installation & Setup" (#installation--setup)
- "Available Scripts" (#available-scripts)
- "Build for Production" (#build-for-production)
- "Dependencies" (#dependencies)
- "Developer" (#developer)
- "License" (#license)

---

📌 About the Project

Dev-Stack-Builder is a frontend web application built with React, TypeScript, Tailwind CSS, and DaisyUI.

The goal of the project is to provide developers with a simple and interactive way to explore different development technologies and create their own personalized technology stack.

Users can browse technologies, filter them by category, inspect technology details, and manage their selected technologies through the Your Stack section.

The project also demonstrates practical React concepts such as:

- Component-based architecture
- Props and state management
- TypeScript interfaces
- Event handling
- Conditional rendering
- Array manipulation
- Reusable components
- Dynamic UI updates
- Toast notifications
- Responsive layouts

---

🌐 Live Demo

🔗 Live Website:
https://dev-stack-builder-lilac.vercel.app/

🔗 GitHub Repository:
https://github.com/CodesByHasan/Dev-Stack-Builder.git

---

📸 Preview

<img width="1919" height="1030" alt="Dev-Stack-Builder Preview" src="https://github.com/user-attachments/assets/e934d85d-fd50-4fa7-b1c8-ebb5f5a9aec4" />---

🚀 Project Overview

Dev-Stack-Builder provides an interactive interface where developers can discover and organize technologies according to their development needs.

Main workflow

Technology Data
      ↓
Technologies Section
      ↓
Filter by Category
      ↓
Technology Cards
      ↓
Add Technology
      ↓
Your Stack
      ↓
Manage / Remove / Clear

The application uses structured JSON data as its technology database and dynamically updates the UI based on the user's selected stack.

---

✨ Key Features

🏷️ Browse by Category

Explore technologies across different development categories and filter the available tools based on their category.

📊 Technology Information

Each technology provides useful information such as:

- Technology name
- Category
- Description
- Difficulty level
- Rating
- Badge

➕ Dynamic Stack Management

Users can add technologies to their personalized Your Stack section and see their selections update immediately.

🛡️ Duplicate Prevention

The application prevents users from adding the same technology multiple times to their stack.

➖ Remove Technologies

Individual technologies can be removed from the personalized stack whenever needed.

🧹 Remove All

Users can clear their entire personalized stack with a single action.

🔔 Toast Notifications

React-Toastify provides instant feedback when users perform actions such as adding or attempting to add duplicate technologies.

📱 Fully Responsive

The interface adapts to different screen sizes, including:

- 📱 Mobile
- 📲 Tablet
- 💻 Desktop

🧩 Reusable Components

The application is divided into reusable React components to keep the code organized, maintainable, and easier to understand.

---

🛠️ Tech Stack

Frontend

- ⚛️ React.js — Component-based user interface development
- 📘 TypeScript — Type safety and structured application development
- 📜 JavaScript (ES6+) — Application logic and state management
- 🎨 Tailwind CSS — Utility-first responsive styling
- 🌼 DaisyUI — Pre-built UI components and styling
- 🔔 React-Toastify — Toast notifications and user feedback
- ⚡ Vite — Development server and production build tool

Data

- 📦 JSON — Structured technology data used by the application

Development Tools

- 🧰 Git — Version control
- 🐙 GitHub — Source code hosting
- ▲ Vercel — Deployment and hosting

---

📂 Project Structure

DevStack-builder/
└── devstack-builder-with-react-ts/
    ├── public/
    │   └── data.json
    │
    ├── src/
    │   ├── assets/
    │   │   ├── banner-stack.png
    │   │   ├── hero.png
    │   │   └── logo-text.png
    │   │
    │   ├── components/
    │   │   ├── technologies/
    │   │   │   ├── StackCards.tsx
    │   │   │   ├── Technologies.tsx
    │   │   │   └── YourStack.tsx
    │   │   │
    │   │   ├── Banner.tsx
    │   │   ├── Footer.tsx
    │   │   └── Navbar.tsx
    │   │
    │   ├── types/
    │   │   └── Types.ts
    │   │
    │   ├── App.tsx
    │   ├── index.css
    │   └── main.tsx
    │
    ├── package.json
    ├── tsconfig.json
    ├── vite.config.js
    └── README.md

«Note: "dist/" is generated by Vite when running the production build and is normally excluded from the source repository.»

---

🗂️ Folder & File Responsibilities

Folder / File| Purpose
"public/data.json"| Contains the technology stack data
"assets/"| Stores project images and visual assets
"components/"| Contains reusable React components
"components/technologies/"| Technology-related UI components
"StackCards.tsx"| Displays individual technology cards
"Technologies.tsx"| Handles the technology browsing/filtering section
"YourStack.tsx"| Displays and manages the user's selected stack
"Navbar.tsx"| Application navigation
"Banner.tsx"| Hero/banner section
"Footer.tsx"| Application footer
"types/Types.ts"| TypeScript interfaces and type definitions
"App.tsx"| Main application component
"main.tsx"| React application entry point
"index.css"| Global styles
"package.json"| Dependencies and project scripts
"tsconfig.json"| TypeScript configuration
"vite.config.js"| Vite configuration
"README.md"| Project documentation

---

🏗️ Application Architecture

The project follows a component-based React architecture.

Main Component Flow

App
│
├── Navbar
│
├── Banner
│
├── Technologies
│   └── StackCards
│
├── YourStack
│
└── Footer

State Flow

The selected technologies are maintained in the application state and passed to the relevant components through props.

User selects technology
        ↓
Add technology
        ↓
Update stack state
        ↓
Your Stack receives updated data
        ↓
UI re-renders

This allows the application to keep the technology selection synchronized across the interface.

---

📦 Data Structure

Technology information is stored in:

public/data.json

The data contains information used to display and manage technologies, including properties such as:

id
name
category
description
icon
rating
difficulty
badge
badgeColor

This approach keeps the technology data separate from the UI components and makes the application easier to maintain and extend.

---

🔄 Stack Management

The Your Stack section allows users to manage their selected technologies.

Add

Users can select a technology and add it to their personalized stack.

Duplicate Prevention

Before adding a technology, the application checks whether it already exists in the selected stack.

Technology selected
       ↓
Already exists?
    ↙       ↘
  Yes        No
   ↓          ↓
Toast      Add to stack

Remove

Users can remove individual technologies from their stack.

Remove All

The entire selected stack can be cleared using the Remove All action.

---

🚀 Installation & Setup

Follow these steps to run Dev-Stack-Builder locally.

1. Clone the Repository

git clone https://github.com/CodesByHasan/Dev-Stack-Builder.git

2. Navigate to the Project Directory

cd Dev-Stack-Builder/devstack-builder-with-react-ts

3. Install Dependencies

npm install

4. Start the Development Server

npm run dev

5. Open in Browser

Vite will provide a local development URL.

Usually:

http://localhost:5173/

Open the URL in your browser to run the application.

---

📜 Available Scripts

Start Development Server

npm run dev

Starts the Vite development server.

Build the Application

npm run build

Creates an optimized production build.

Preview Production Build

npm run preview

Runs the production build locally for preview.

---

🏗️ Build for Production

To create an optimized production build:

npm run build

The generated production files will be placed in:

dist/

To preview the production build locally:

npm run preview

---

📚 Dependencies

The project uses the following major libraries and tools:

- React
- React DOM
- TypeScript
- Tailwind CSS
- DaisyUI
- React-Toastify
- Vite

All required dependencies can be installed using:

npm install

---

👨‍💻 Developer

Md Hasan

🔗 GitHub:
https://github.com/CodesByHasan

🔗 Live Project:
https://dev-stack-builder-lilac.vercel.app/

---

📄 License

This project is open-source and was created for educational and portfolio purposes.

---

⭐ Dev-Stack-Builder

Explore technologies. Build your stack. Develop your future. 🚀
