🧱 Dev-Stack-Builder

Build a personalized technology stack with modern development tools. 🚀

Dev-Stack-Builder is a React application that enables users to explore technologies and create a personalized development stack.

Users can browse technologies by category, and add their preferred technologies to the Your Stack panel.

🌐 Live Demo
🔗 Live Website: [Add your live deployment link here]

🔗 GitHub Repository: [Add your GitHub repository link here]

✨ Features
Browse technologies by category

View descriptions, difficulty levels, ratings, and badges

Add and remove technologies from Your Stack

Prevent duplicate selections

Remove all selected technologies

Receive instant feedback through React-Toastify

Responsive layout with mobile navigation

🛠️ Technologies Used

⚛️ React.js
Purpose: User interface

🎨 Tailwind CSS
Purpose: Styling

🌼 DaisyUI
Purpose: UI components

📜 JavaScript (ES6+) / TypeScript

Purpose: Application logic

🔔 React-Toastify

Purpose: Notifications

📦 JSON
Purpose: Technology data

⚡ Vite
Purpose: Development and build tool

📂 Project Structure

src/
├── assets/
├── components/
│   ├── Navbar/
│   ├── Banner/
│   ├── TechnologyCard/
│   ├── TechnologyGrid/
│   ├── YourStack/
│   └── Footer/
├── data/
│   └── technologies.json
├── App.jsx / App.tsx
├── main.jsx / main.tsx
└── index.css


⚛️ React Questions & Answers

1. What is JSX, and why is it used in React?

JSX is a syntax extension for JavaScript. We can write HTML-like markup directly inside a JavaScript file. All React developers use it because it makes code for UI components more intuitive and readable.

2. What is the difference between props and state?

Props are read-only data passed from parent to child, while State is internal, changeable data managed by a component. When State changes, React re-renders the UI.

3. What does the useState hook do, and where did you use it in this project?

useState hook returns an array with two items: the current state value, and a setter function, used to update that state. We use array destructuring to assign them to variables.
I'll use it to add state to a functional component, mainly for the “Your Stack” section and the Add to Stack, ❌ Remove and Remove All interactions.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook is basically used for side effects inside React components.
I need it because the JSON data needs to be loaded after the component renders, and useEffect handles this smoothly by running after the component renders.

5. Why does every item in a .map() list need a unique key prop?

To render a dynamic list, items can be added, removed, or reordered. React needs a reliable way to identify exactly which item has changed so it can update the Real DOM efficiently instead of re-rendering the entire list. Keys are special attributes that give each list item a unique identity and help React handle these changes smoothly.

6. What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means showing different components or content based on a condition or the current state of the application. In React, it works just like If a condition is true, show something; if it’s false, show something else.

Example: 
 {stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <TechnologyList />
)}


7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

I can pass data from a parent component to a child component by using props, because props maintain One-Way Data Flow and only can be passed down the component tree (from a Parent component to a Child component).

lifting state up is exactly how a child sends data back to a parent. Lifting state up means moving state to a common parent so the parent can control it. The parent passes a callback function to the child, and the child calls it to change the parent’s state.

Flow: Parent → callback → Child → calls callback → Parent’s state changes