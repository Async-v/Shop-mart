# 🛒 ShopMart – Full Stack E-Commerce Application

ShopMart is a full-stack e-commerce web application built using **React.js** for the frontend and **Fake Store API** as a temporary backend.

This project includes both **User** and **Admin** roles to simulate a real-world e-commerce platform.

---

## 🚀 Project Initialization Steps

### ✅ Step 1: Create Main Project Folder

Create a root folder for the project:

```bash
mkdir ShopMart
cd ShopMart
```

### ✅ Step 2: Create React Boilerplate & Clean Setup

Create a React application using Vite:

```bash
mkdir frontend
npm create vite@latest frontend
cd frontend
npm install
npm run dev
```

After setup, clean the default boilerplate:

* Remove unused files like:

  * `App.css`

  * `logo.svg`

* Clear default JSX from `App.jsx`

* Remove unused imports

* Set up a clean project structure

--- 

### ✅ Step 3: Setup Backend (JSON Server – Temporary API)

Go back to root directory:

```bash
cd ..
mkdir backend
cd backend
npm install json-server
```
Create a `db.json` file inside the backend folder.

You can refer to the JSON Server documentation for boilerplate data structure.

To run the backend server:

```bash
npx json-server --watch db.json --port 5000
```

Now your backend API will run at:

```bash
http://localhost:5000
```

---

## 📁 Folder Structure
```bash
ShopMart/
│ 
├── frontend/ 
│      ├── public/
│      │ 
│      ├── src/
│      │    ├── 📁api(services)/
│      │    │          └── AxiosConfig.jsx 
│      │    │
│      │    ├── 📁components/
│      │    │          └── Nav.jsx 
│      │    │
│      │    ├── 📁pages/
│      │    │        ├── 📁admin/
│      │    │        │       ├── CreateProduct.jsx
│      │    │        │       └── UpdateProduct.jsx
│      │    │        │       
│      │    │        ├── 📁user/
│      │    │        │       └── UserProfile.jsx
│      │    │        │       
│      │    │        ├── Home.jsx
│      │    │        ├── Products.jsx
│      │    │        ├── Cart.jsx
│      │    │        ├── About.jsx
│      │    │        ├── Login.jsx
│      │    │        ├── Register.jsx
│      │    │        └── PageNotFound.jsx
│      │    │
│      │    ├── 📁routes/
│      │    │        └── Mainroutes.jsx
│      │    ├── App.jsx
│      │    └── main.jsx
│      │
│      └── package.json
│ 
├── backend/
│      ├── db.json
│      └── package.json
│     
└── README.md
```
---

## 🛠️ Tech Stack
* React.js
* JavaScript (ES6+)
* Json Server
* React Hook Form
* React Toastify
* Axios
* React Router DOM
* Tailwind CSS

---

## 🎯 Project Purpose

This project is built for practice:

