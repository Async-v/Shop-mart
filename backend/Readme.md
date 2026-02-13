# ✅ backend/README.md (Only Backend Steps)

📄 `backend/README.md`


## 🗄️ ShopMart Backend Setup

This backend is built using JSON Server for development purposes.

---

### 🚀 Step 1: Install JSON Server

```bash 
npm install json-server
```

### 🚀 Step 2: Create db.json File

Inside backend folder create: 
```bash
db.json
```

Add collections:
- users
- products
- cart

### 🚀 Step 3: Run Server
```bash
npx json-server --watch db.json --port 3000
```

Server runs at:
```bash
http://localhost:3000
```

### 🎯 Purpose

This backend is temporary and used only for testing.