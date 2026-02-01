<img width="960" height="540" alt="image" src="https://github.com/user-attachments/assets/b5a6e8c8-f5c1-4d87-a204-a7bba22da29c" />


# 🚗 Navigator – React Navigation Project

A simple **React + React-Bootstrap** navigation project with routing using **React Router DOM**. This project demonstrates how to build a reusable Navbar component and navigate between pages like **Home**, **About**, and **Services**.

🔗 **Live Demo**: [https://statusesque-liger-db6817.netlify.app/](https://statusesque-liger-db6817.netlify.app/)

---

## 📌 Features

* Responsive Navbar using **React-Bootstrap**
* Page routing with **React Router DOM**
* Clean project structure (components, pages, layout)
* Deployed on **Netlify**
* Beginner & exam-friendly project

---

## 🛠️ Tech Stack

* **React (Vite)**
* **React Router DOM**
* **React-Bootstrap & Bootstrap**
* **JavaScript (JSX)**
* **CSS**

---

## 📂 Project Structure

```
navigator-project/
│── public/
│── src/
│   ├── assets/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── layout/
│   │   └── MainLayout.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Services.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
│── package.json
│── vite.config.js
│── README.md
```

---

## 🚀 Installation & Setup

Follow these steps to run the project locally:

```bash
# Clone the repository
git clone https://github.com/krushnal-2101/Navigate-project.git

# Go to project folder
cd Navigate-project

# Install dependencies
npm install

# Start development server
npm run dev
```

Open 👉 `http://localhost:5173` in your browser.

---

## 🧭 Navbar Component Example

```jsx
<Nav className="m-auto fw-bold fs-5">
  <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
  <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
  <Nav.Link to="/services" as={NavLink}>Services</Nav.Link>
</Nav>
```

---

## 📸 Screenshots

* Home Page with Navbar
* React Router Navigation

*(Add screenshots here if needed)*

---

## 🌐 Deployment

The project is deployed using **Netlify**.

To deploy:

```bash
npm run build
```

Upload the `dist/` folder to Netlify.

---

## 👨‍💻 Author

**Krushnal Bhatti**
GitHub: [https://github.com/krushnal-2101](https://github.com/krushnal-2101)

---

## ⭐ Support

If you like this project, don’t forget to **star ⭐ the repository** on GitHub!

Happy Coding 🚀
