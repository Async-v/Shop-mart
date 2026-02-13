# 🛒 ShopMart – Full Stack E-Commerce Application

ShopMart is a full-stack e-commerce web application built using:

- ⚛️ React.js (Frontend - Vite)
- 🗄️ JSON Server (Temporary Backend)

This project simulates a real-world e-commerce platform with:

- 👤 User Role
- 🛠️ Admin Role
- 🛒 Cart System
- 🔐 Authentication UI
- 📦 Product Management

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

### Frontend

- React.js
- Tailwind CSS
- Axios
- React Router DOM
- React Hook Form
- Nanoid
- React Toastify
- Lucide React

### Backend

- JSON Server

---

## 🚀 How To Run This Project

### 1️⃣ Run Backend

```
npx json-server --watch db.json --port 3000
```

Backend runs at:

```
http://localhost:3000
```

### 2️⃣ Run Frontend

Open new terminal:

```
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

## 🎯 Project Purpose

This project is built for practice.