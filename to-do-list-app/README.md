
# React Todo List App

A simple and reusable Todo List application built using React.  
This project demonstrates component architecture, props passing, state management, and CSS styling.

---

## 🚀 Features

- Add new tasks
- Delete tasks
- Toggle task completion
- Reusable components
- Clean component hierarchy
- Responsive CSS styling

---

## 🧱 Component Architecture

### 1. App Component
- Manages global state (`todos`, `input`)
- Contains logic functions:
  - `addTodo`
  - `deleteTodo`
  - `toggleTodo`
- Passes data and functions to child components

### 2. TodoList Component
- Receives `todos` array via props
- Maps through todos
- Renders multiple `TodoItem` components

### 3. TodoItem Component
- Displays individual todo
- Handles:
  - Toggle completion
  - Delete action
- Reusable and independent

---

## 📂 Project Structure

src/
│
├── components/
│ ├── TodoList.js
│ ├── TodoItem.js
│
├── App.js
├── App.css
└── index.js

---

## 🛠️ Technologies Used

- React (Hooks)
- JavaScript (ES6+)
- CSS3

---

## ▶️ Installation & Run

```bash
# Clone the repository
git clone https://github.com/yourusername/todo-list-app.git


# Navigate into the project
cd todo-list-app


# Install dependencies
npm install


# Run the development server
npm start
📸 Screenshots

Include screenshots here after running the app:

Initial UI

After Adding Task

After Completing Task

After Deleting Task

🎯 Learning Outcomes

Understand React component hierarchy

Implement props passing

Practice reusable component design

Manage state using React Hooks

📜 License

This project is open-source and free to use.