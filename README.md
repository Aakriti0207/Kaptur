# Kaptur (Capture)

**Your job search, in one place**

Kaptur is a job application tracker that helps students and job seekers organize their applications, monitor progress, and keep track of opportunities without maintaining spreadsheets manually

Built with a modern full-stack architecture and Gmail integration for a smoother application tracking experience

<img width="1919" height="912" alt="image" src="https://github.com/user-attachments/assets/4fcc8f54-0fb4-4e0a-be4c-9f8a8c6e5887" />

---

## Why Kaptur?

Most students track applications using spreadsheets that quickly become messy and outdated.

Kaptur provides:

- Centralized application management
- Faster progress tracking
- Cleaner organization
- Gmail-powered workflow
- Better visibility into the job search process

## Features

### Authentication
- Google OAuth Login
- Secure JWT Authentication
- Persistent User Sessions
- Protected Routes

### Dashboard
- Personalized dashboard overview
- Total applications count
- Online assessments count
- Interview tracking
- Offer tracking
- Recent applications widget
- Recent inbox activity preview

  <img width="1919" height="909" alt="image" src="https://github.com/user-attachments/assets/55260148-e699-4d9c-a6fb-f17f45719bec" />


### Application Management
- Create applications manually
- Edit existing applications
- Delete applications
- View detailed application information
- Search applications instantly

<img width="1919" height="908" alt="image" src="https://github.com/user-attachments/assets/ab25cd8e-1080-4120-9d65-e08eb0e3a2ed" />


### Application Status Tracking
Track applications across multiple stages:

- Applied
- OA (Online Assessment)
- Interview
- Offer
- Rejected
- Stale

<img width="555" height="644" alt="image" src="https://github.com/user-attachments/assets/7a68e753-97b1-46c6-b198-c0d61d550bc1" />


### Gmail Integration
- Connect Gmail account securely
- Sync inbox activity
- Preview recent emails directly from dashboard
- Foundation for automated application tracking


### UI/UX
- Responsive design
- Dark & Light mode support
- Modern dashboard experience
- Clean and minimal interface

---

## Tech Stack

### Frontend
- React
- Vite
- React Router
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Authentication
- Google OAuth 2.0
- JWT
- Cookies

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

## Live Demo 

[ Link - https://kaptur-flame.vercel.app ]

Coming soon.

---

## Planned Features

- Automatic application extraction from Gmail
- AI-powered job insights
- Resume-specific analytics
- Interview preparation tracking
- Opportunity recommendations
- Reminder system
- Advanced application analytics

---

## Local Setup

### Clone Repository

```bash
git clone <repository-url>
cd kaptur
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Environment Variables

Backend:

```env
PORT=
MONGODB_URI=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REDIRECT_URI=

ACCESS_TOKEN_SECRET=
REFRESH_TOKEN_SECRET=

CORS_ORIGIN=
```

Frontend:

```env
VITE_API_URL=
```

---

## Contributing

Contributions, suggestions, and feedback are always welcome. 

Feel free to open issues or submit pull requests.

---

## 👩‍💻 Author

**Aakriti Arya**

Built while learning full-stack development, deployment, OAuth, and real-world product development.
