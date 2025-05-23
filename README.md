# 🎓 Student Volunteer Match Portal

A lightweight web platform that connects MSU students with nonprofit organizations based on their interests and availability.

Developed by **AI for Humanity Tech**, a nonprofit initiative using AI and accessible technology to support social good. 

Current Version: 1.1.0

---

## 🌐 Live Demo

👉 [https://studentorgportal.web.app](https://studentorgportal.web.app)

---

## 🧩 Features

- Student sign-up with interests and weekly availability
- Secure login using Firebase Authentication
- Personalized dashboard showing matched nonprofit opportunities
- Firebase + GitHub Actions integration for automatic deployment

---

## 🔧 Tech Stack

- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **Backend**: Firebase Firestore
- **Authentication**: Firebase Auth (Email/Password)
- **Hosting**: Firebase Hosting
- **CI/CD**: GitHub Actions (auto-deploy on push to `main`)

---

## 📁 Project Structure

```
student-volunteer-portal/
├── index.html         # Landing page with logos and navigation
├── signup.html        # Student registration with profile fields
├── login.html         # Login form
├── dashboard.html     # Matched opportunities and student profile
├── style.css          # Shared styling
└── script.js          # Firebase setup (if separate from pages)
```

---

## 🚀 Deployment Instructions

This project uses GitHub Actions to automatically deploy on push to the `main` branch.

1. Clone the repo locally:

   ```bash
   git clone https://github.com/suvoganguli/student-volunteer-portal.git
   cd student-volunteer-portal
   ```

2. (Optional) Serve locally if Firebase CLI is installed:

   ```bash
   firebase serve
   ```

3. Push changes to deploy:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

Your live site will auto-update via GitHub Actions 🎉

---

## 🔮 Planned Features

- Admin dashboard for nonprofits to post opportunities
- Student profile editing
- Search and filtering options for opportunities
- Email notifications for new matches

---

## 🔢 Versioning Strategy

We use [Semantic Versioning](https://semver.org/):

- `MAJOR.MINOR.PATCH`
  - MAJOR: Breaking changes (e.g., redesign of dashboard layout)
  - MINOR: New features, backwards-compatible (e.g., AI matching added)
  - PATCH: Bug fixes or small UI tweaks

### Example Milestones
- `v1.0.0` – Initial Firebase + Auth Pipeline
- `v1.1.0` – Added Student–NPO Matching
- `v1.2.0` – Opportunity Recommendations
- `v2.0.0` – Admin Tools & Multi-role Support

---

## 🤝 Maintained By

**Suvo Ganguli**  
Founder, [AI for Humanity Tech](https://aiforhumanitytech.org)  
📫 subhabrata.ganguli@gmail.com

> Using AI and ethical technology to support education, equity, and community service.
