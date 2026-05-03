# 📘 React Hooks – Practical Guide with Examples

## 🎯 Objective

This repository aims to present the **React Hooks** I use in my projects, with **clear explanations** and **practical examples** tested in VS Code.
The goal is to understand their purpose and know when to use each one.

---

## ⚙️ Prerequisites

* Node.js installed
* Basic knowledge of JavaScript
* Basic understanding of React

---

## 📂 Project Structure

```
    react-hooks-guide/
    │── src/
    │   ├── hooks/
    │   │   ├── useStateExample.js
    │   │   ├── useEffectExample.js
    │   │   ├── useContextExample.js
    │   │   ├── useRefExample.js
    │   │   ├── useMemoExample.js
    │   │   └── useCallbackExample.js
    │   ├── App.js
    │── README.md
```

---

## 🧠 Hooks Explained

### 1️⃣ useState – State Management

📌 Allows you to store and update data inside a component.

```js
```

✅ Use cases:

* Counter
* Forms
* Toggle (true/false)

---

### 2️⃣ useEffect – Side Effects

📌 Executes code after the component renders.

```js
```

✅ Use cases:

* API calls
* Subscriptions
* DOM manipulation

---

### 3️⃣ useContext – Global State Sharing

📌 Shares data without passing props manually.

```js
```

✅ Use cases:

* Authentication
* Theme (dark/light)
* Language settings

---

### 4️⃣ useRef – Persistent Reference

📌 Accesses DOM elements or stores values without re-rendering.

```js
```

✅ Use cases:

* Input focus
* Store mutable values without triggering re-render

---

### 5️⃣ useMemo – Performance Optimization (Values)

📌 Memorizes computed values to avoid unnecessary recalculations.

```js

✅ Use cases:

* Heavy computations
* Performance optimization

---

### 6️⃣ useCallback – Performance Optimization (Functions)

📌 Memorizes functions to prevent unnecessary re-creation.

```js

✅ Use cases:

* Prevent unnecessary re-renders
* Works well with React.memo

---

## 🔍 Key Differences Between Hooks

| Hook        | Main Role                | Re-render? |
| ----------- | ------------------------ | ---------- |
| useState    | Manage state             | ✅ Yes      |
| useEffect   | Handle side effects      | ✅ Yes      |
| useContext  | Share global data        | ✅ Yes      |
| useRef      | Persistent reference     | ❌ No       |
| useMemo     | Optimize computed values | ❌ No       |
| useCallback | Optimize functions       | ❌ No       |

---

## 🚀 Run the Project

```bash
npm install
npm start
```

---

## 💡 Conclusion

Hooks allow you to:

* Simplify React code
* Reuse logic easily
* Improve performance

---

## 📌 IMANELMZK

👩‍💻 Project created as part of my learning journey in React and web development.

---
