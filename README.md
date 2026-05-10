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
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

✅ Use cases:

* Counter
* Forms
* Toggle (true/false)

---

### 2️⃣ useEffect – Side Effects

📌 Executes code after the component renders.

```js
import { useEffect, useState } from "react";

function Example() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("Component mounted!");
  }, []);

  return <div>Check console</div>;
}
```

✅ Use cases:

* API calls
* Subscriptions
* DOM manipulation

---

### 3️⃣ useContext – Global State Sharing

📌 Shares data without passing props manually.

```js
import { createContext, useContext } from "react";

const UserContext = createContext();

function Child() {
  const user = useContext(UserContext);
  return <p>{user}</p>;
}
```

✅ Use cases:

* Authentication
* Theme (dark/light)
* Language settings

---

### 4️⃣ useRef – Persistent Reference

📌 Accesses DOM elements or stores values without re-rendering.

```js
import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </>
  );
}
```

✅ Use cases:

* Input focus
* Store mutable values without triggering re-render

---

### 5️⃣ useMemo – Performance Optimization (Values)

📌 Memorizes computed values to avoid unnecessary recalculations.

```js
import { useMemo } from "react";

function ExpensiveCalc({ number }) {
  const result = useMemo(() => {
    console.log("Calculating...");
    return number * 2;
  }, [number]);

  return <p>{result}</p>;
}
```

✅ Use cases:

* Heavy computations
* Performance optimization

---

### 6️⃣ useCallback – Performance Optimization (Functions)

📌 Memorizes functions to prevent unnecessary re-creation.

```js
import { useCallback } from "react";

function Button({ onClick }) {
  return <button onClick={onClick}>Click</button>;
}

function Parent() {
  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return <Button onClick={handleClick} />;
}
```

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

## 📌 Author

👩‍💻 Project created as part of my learning journey in React and web development.

---
