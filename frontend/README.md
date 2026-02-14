# ✅ frontend/README.md (Only Frontend Steps)

📄 `frontend/README.md`

## ⚛️ ShopMart Frontend Setup

This is the frontend of the ShopMart application built using React + Vite.

---

### 🚀 Step 1: Install React Boilplate Code (Vite)

```bash
npm create vite@latest
```

### 🚀 Step 2: Install Dependencies

```bash
npm install
```

### 🚀 Step 3: Run Development Server

```bash
npm run dev
```

App runs at:

```bash
http://localhost:5173
```

---

## ⚙️ Frontend Configuration Steps

✅ 1. Clean Boilerplate

✅ 2. Folder Structure Setup

- Created api folder
- Created components folder
- Created pages folder (admin & user)
- Created routes folder
- Created store folder

✅ 3. Axios Setup
- Created centralized Axios instance
- Configured baseURL

✅ 4. Implemented Pages
- Navbar
- Home Page
- Products Page
- Login (React Hook Form)
- Register (React Hook Form + Nanoid)
- Cart Page
- Admin Pages

### 🗂️ Redux Setup

📁 Redux Folder Structure
```
📁src/
│        
├── 📁store/
│       ├── 📁actions/
│       │        ├── CartActions.jsx
│       │        ├── ProductActions.jsx
│       │        └── UserActions.jsx
│       │
│       ├── 📁reducers(Features)
│       │        ├── CartSlice.jsx
│       │        ├── ProductSlice.jsx
│       │        └── UserSlice.jsx
│       │
│       └── Store.jsx
```
✅ Configured:

- Created store using `configureStore`
- Created slices using `createSlice`
- Wrapped app with `<Provider>`
- Used `useDispatch`
- Used `useSelector`

### 🔐 Authentication State Management

Authentication is managed globally using Redux Toolkit.

✅ Implemented Actions

- `asyncRegisterUser` → store data in backend
- `asyncLoginUser` → store in localStorage
- `asyncLogoutUser` → logout from localStorage
- `asyncCurrentUser` → get from localStorage

✅ 7. Implemented Product CURD operations
- Create a component: `ProductDetails`
- Baki step `Product CURD` operation kiye hai

## 📦 Libraries Used

- React Hook Form
- React Toastify
- Redux Toolkit
- React Redux
- Nanoid
- Lucide React
- Axios
- React Router DOM
- Tailwind CSS
