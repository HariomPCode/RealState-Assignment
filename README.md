# 🏙️ Infinity — Real Estate Website + Admin Panel

A full-stack, production-ready real estate website with a CMS admin panel.

---

## 🗂️ Folder Structure

```
realestate/
├── backend/
│   ├── config/
│   │   └── db.js                  # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js      # Login / logout / session
│   │   └── contentController.js   # GET & PUT content sections
│   ├── middleware/
│   │   └── auth.js                # Session-based auth guard
│   ├── models/
│   │   └── Content.js             # Mongoose schema {section, content}
│   ├── routes/
│   │   ├── auth.js                # /api/auth/*
│   │   └── content.js             # /api/content/*
│   ├── .env                       # Environment variables
│   ├── package.json
│   └── server.js                  # Express entry point
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── admin/
    │   │   │   ├── AdminSidebar.jsx
    │   │   │   ├── DashboardOverview.jsx
    │   │   │   ├── EditHero.jsx
    │   │   │   ├── EditAbout.jsx
    │   │   │   ├── EditAmenities.jsx
    │   │   │   ├── EditNearby.jsx
    │   │   │   ├── EditConstruction.jsx
    │   │   │   ├── EditFAQ.jsx
    │   │   │   ├── EditBuildings.jsx
    │   │   │   └── FormElements.jsx
    │   │   ├── About.jsx
    │   │   ├── Amenities.jsx
    │   │   ├── Buildings.jsx
    │   │   ├── Construction.jsx
    │   │   ├── FAQ.jsx
    │   │   ├── Footer.jsx
    │   │   ├── Hero.jsx
    │   │   ├── Navbar.jsx
    │   │   ├── Nearby.jsx
    │   │   ├── ProtectedRoute.jsx
    │   │   └── Spinner.jsx
    │   ├── context/
    │   │   ├── AuthContext.jsx     # Login state + session check
    │   │   └── ContentContext.jsx  # CMS content state
    │   ├── pages/
    │   │   ├── Dashboard.jsx       # Admin dashboard layout + subroutes
    │   │   ├── Home.jsx            # Public website
    │   │   └── Login.jsx           # Admin login
    │   ├── services/
    │   │   └── api.js              # Axios API calls
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── index.html
    ├── tailwind.config.js
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v18+
- **MongoDB** running locally on port 27017
  - Install: https://www.mongodb.com/try/download/community
  - Or use MongoDB Atlas (update `MONGODB_URI` in `.env`)

---

### 1. Start the Backend

```bash
cd realestate/backend
npm install
npm run dev
```

> Server runs at **http://localhost:5000**
> On first request, the database is auto-seeded with all default content.

---

### 2. Start the Frontend

```bash
cd realestate/frontend
npm install
npm run dev
```

> App runs at **http://localhost:5173**

---

## 🌐 URLs

| URL | Description |
|-----|-------------|
| `http://localhost:5173` | Public real estate website |
| `http://localhost:5173/admin` | Admin login page |
| `http://localhost:5173/admin/dashboard` | Admin dashboard (protected) |

---

## 🔐 Admin Credentials

| Field | Value |
|-------|-------|
| Email | `admin@gmail.com` |
| Password | `1234` |

---

## 🔌 API Reference

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `POST` | `/api/auth/login` | — | Login with email + password |
| `POST` | `/api/auth/logout` | — | Destroy session |
| `GET` | `/api/auth/session` | — | Check if logged in |
| `GET` | `/api/content` | — | Fetch all CMS content |
| `PUT` | `/api/content/:section` | ✅ Admin | Update a section |

**Sections:** `hero`, `about`, `amenities`, `nearby`, `construction`, `faq`, `buildings`

---

## ✨ Features

### Public Website
- 🏠 Hero with full-screen background, project title, pricing cards, CTA
- 📖 About section with image collage and project stats
- ✨ Amenities grid (8 items) with hover effects
- 📍 Nearby connectivity by category (Education, Healthcare, Transport, Shopping)
- 🏢 Portfolio buildings with hover zoom
- 🏗️ Construction timeline (alternating left/right)
- ❓ FAQ accordion with smooth expand/collapse
- 📱 Fully responsive navbar with mobile menu

### Admin Panel
- 🔐 Session-based login (no JWT)
- 🛡️ Protected routes — redirects to login if not authenticated
- 📝 Edit all 7 sections with live form editors
- ⚡ Changes reflect **instantly** on the frontend (React context state)
- ➕ Add/remove dynamic items (amenities, FAQ, buildings, etc.)
- 🔔 Toast notifications for success/error
- 👁️ "View Website" link from sidebar

### Technical
- Loading spinner on initial content fetch
- Error boundary with retry on failure
- Form validation with user feedback
- Modular, reusable components
- Auto-seeding of default content on first run
- Session persists for 24 hours

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary font | Cormorant Garamond (display) |
| Body font | DM Sans |
| Gold accent | `#d4aa5a` |
| Background dark | `#0a0a0a` |
| Card dark | `#111111` |
| Border | `rgba(255,255,255,0.08)` |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + Vite |
| Styling | Tailwind CSS v3 |
| Routing | React Router v6 |
| HTTP client | Axios |
| Notifications | react-hot-toast |
| Backend | Node.js + Express |
| Database | MongoDB + Mongoose |
| Auth | express-session |
