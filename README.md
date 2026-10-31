# 🛒 E-Commerce Web Application

A full-stack E-Commerce web application built using the **MERN Stack** — MongoDB, Express.js, React, and Node.js.

The application provides a modern shopping experience where users can browse products, manage their cart, and place orders through a responsive and interactive interface.

---

# 🚀 Features

* 🛍️ Product Listing & Product Details Page
* 🛒 Add to Cart / Remove from Cart
* 📦 Order Placement & Order Summary
* 🔎 Search & Filter Products
* ⚡ Fast API-based Data Fetching
* 📱 Fully Responsive User Interface
* 🔄 Dynamic Frontend-Backend Integration
* 🧾 Real-time Cart Management

---

# 🏗️ Tech Stack

## Frontend

* React
* HTML5
* CSS3
* JavaScript

## Backend

* Node.js
* Express.js

## Database

* MongoDB

---

# 📂 Project Structure

```bash id="jlwmcs"
E-Commerce-Web-App/
│
├── client/                 # Frontend source code
├── server/                 # Backend source code
├── models/                 # Database models
├── routes/                 # API routes
├── controllers/            # Business logic
├── public/                 # Static assets
├── .env                    # Environment variables
├── package.json
└── README.md
```

---

# ⚙️ Installation & SetupS

## 1️⃣ Clone the Repository

```bash id="jlwm1"
git clone <your-repository-url>
cd E-Commerce-Web-App
```

---

## 2️⃣ Install Dependencies

### Install Backend Dependencies

```bash id="jlwm2"
npm install
```

### Install Frontend Dependencies

```bash id="jlwm3"
cd client
npm install
```

---

## 3️⃣ Setup Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env id="jlwm4"
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

## 4️⃣ Run the Application

### Start Backend Server

```bash id="jlwm5"
cd Backend
npm start
```

### Start Frontend

```bash id="jlwm6"
cd frontend
npm run dev
```

## 🚀 Deploying to Vercel

The frontend and Express backend must both be deployed. Vercel's frontend URL cannot
reach a backend running on your computer.

1. Deploy the `Backend` folder to a Node.js host that supports long-running Express
   servers. Use `npm start` as the start command and configure any required backend
   environment variables, such as `MONGO_URI`.
2. In Vercel, set the project root to `frontend` and configure the build command as
   `npm run build` and the output directory as `dist`. The `frontend/vercel.json`
   rewrite serves the React app for direct visits to routes such as `/login` and
   `/admin`.
3. In the Vercel project's **Settings → Environment Variables**, set
   `VITE_API_URL` to the public backend origin, for example
   `https://your-backend.example.com` (without a trailing slash or `/api`).
4. Redeploy the frontend after setting the variable. Vite embeds `VITE_*`
   variables at build time.

For local development, `frontend/.env.example` shows the local API URL. Do not use
`localhost` as the Vercel value; it refers to the visitor's own computer.

---

# 🌐 Usage

* Browse available products
* View product details
* Add or remove products from cart
* Place orders
* View order summary

---

# 🔥 Key Highlights

* Full-stack MERN architecture
* REST API integration
* Scalable backend structure
* Responsive and clean UI design
* Real-time state management for cart operations

---

# 📦 Requirements

* Node.js
* MongoDB
* npm or yarn

---

# 🙌 Future Improvements

* 🔐 User Authentication & Authorization
* 💳 Payment Gateway Integration
* ❤️ Wishlist Functionality
* 📊 Admin Dashboard
* 📦 Order Tracking System

---

# 🤝 Contributing

Contributions and feature suggestions are welcome.

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Open a Pull Request

---


# 👨‍💻 Author

Developed by **Dishant Singh** 🚀
