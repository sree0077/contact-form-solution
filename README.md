
# 💬 Frontend Mentor - Contact Form Solution

This is a solution to the [Contact Form challenge](https://www.frontendmentor.io/challenges/contact-form-UoMq0I3q6) on Frontend Mentor. It’s a great exercise in form validation, accessibility, and responsive UI design.

---

## 📑 Table of Contents

- [Overview](#overview)
- [The Challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Live Links](#live-links)
- [My Process](#my-process)
- [Built With](#built-with)
- [What I Learned](#what-i-learned)
- [Continued Development](#continued-development)
- [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## 🔍 Overview

This project is a fully responsive, accessible contact form built with React and styled using Tailwind CSS. It features form validation, keyboard accessibility, screen reader support, and success/error feedback via toast notifications.

---

## ✅ The Challenge

Users should be able to:

- Submit the form and receive a success toast on successful submission
- See validation messages if:
  - A required field is left empty
  - The email format is incorrect
- Complete the form using only a keyboard
- Have screen reader announcements for inputs, error messages, and success messages
- Experience a responsive layout across all screen sizes
- View hover and focus states for all interactive elements

---

## 🖼️ Screenshot


![Screenshot 2025-04-18 115423](https://github.com/user-attachments/assets/0281429e-e9ec-4ffe-a5c2-7152a9a571f4)

![Screenshot 2025-04-18 115444](https://github.com/user-attachments/assets/9db3968f-976b-4cbb-ac21-af0276c224dd)

![Screenshot 2025-04-18 115502](https://github.com/user-attachments/assets/cef2b9b9-e3ba-448a-894e-aa316ab90290)


---

## 🔗 Live Links

- **💻 Solution Repository:** [GitHub](https://github.com/sree0077/contact-form-solution)
- **🚀 Live Site:** [View Live](https://sree0077.github.io/contact-form-solution)

---

## 🔨 My Process

### 1. HTML Structure
- Set up a semantic layout for accessibility and clarity.

### 2. Styling
- Used Tailwind CSS for utility-first styling and responsive design.
- Ensured mobile-first development for best UX on all devices.

### 3. Interactivity
- Built with React functional components and hooks.
- Managed state using `useState` for form fields and error handling.

### 4. Accessibility
- Ensured keyboard navigability and screen reader support.
- Used ARIA attributes where appropriate.

---

## 🧱 Built With

- Semantic **HTML5**
- **React** (with hooks)
- **Tailwind CSS**
- **Flexbox**
- **React Toastify** (for success messages)
- **Mobile-first workflow**

---

## 🧠 What I Learned

- Handling **real-time form validation** in React
- Improving **accessibility** with ARIA attributes and screen reader compatibility
- Using **toast notifications** to enhance UX
- Applying **responsive design** using Tailwind breakpoints

```js
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};












