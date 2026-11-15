# Charitha Sree Marrimekala — Modern Portfolio Website

[![Portfolio UI](https://img.shields.io/badge/UI%2FUX-Bright%20%26%20Minimal-blue.svg)](https://github.com/Charitha081/portfolio)
[![Specialization](https://img.shields.io/badge/Specialization-AI%20%26%20ML-indigo.svg)](https://github.com/Charitha081/portfolio)
[![University](https://img.shields.io/badge/University-Jain%20University-green.svg)](https://github.com/Charitha081/portfolio)

A clean, modern, and minimal personal portfolio website for **Charitha Sree Marrimekala** (Charithasree M), an Artificial Intelligence & Machine Learning (AI & ML) student at Jain (Deemed-to-be University).

---

## 🌟 Features

- **Bright & Minimalist UI/UX:** Clean typography, soft shadows, airy spacing, and accessible design.
- **Verified LinkedIn Certifications:** Interactive card grid with image preview and full-screen lightbox modal for:
  - *Learning Graph Neural Networks* (LinkedIn Learning)
  - *Programming Foundations: Discrete Mathematics* (LinkedIn Learning)
- **AI & ML Focus:** Curated skills and project highlights covering Graph Neural Networks, deep learning, logic, and mathematics.
- **Contact Form with API Integration:** Functional contact form powered by the FormSubmit AJAX API with automated email delivery, validation, and real-time status feedback.
- **Responsive Layout:** Optimized for mobile phones, tablets, and desktop displays.

---

## 🚀 Running Locally

### Option 1: Double-click Batch Launcher
Simply double-click `start_server.bat` in the root folder. It starts a local web server and hosts the website at:
```
http://localhost:8080/
```

### Option 2: Python
```bash
python -m SimpleHTTPServer 8080
# or in Python 3
python -m http.server 8080
```

---

## 📬 Contact Form API Configuration

The contact form uses FormSubmit API. To change the recipient email address, update the `action` attribute in `index.html`:
```html
<form id="contact-form" class="contact-form" action="https://formsubmit.co/ajax/your-email@example.com" method="POST">
```
*(On the very first submission to a new email address, FormSubmit will send a one-time activation email to confirm receipt).*

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
