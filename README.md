# 🚀 MERN Stack Blog - Deployment & DevOps (Week 7)# MERN Stack Integration Assignment



[![Deployment Status](https://img.shields.io/badge/deployment-in--progress-yellow)]()This assignment focuses on building a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application that demonstrates seamless integration between front-end and back-end components.

[![License](https://img.shields.io/badge/license-MIT-blue)]()

## Assignment Overview

> A full-stack blog application built with MongoDB, Express.js, React.js, and Node.js - now prepared for production deployment with CI/CD pipelines and monitoring.

You will build a blog application with the following features:

## 📋 Table of Contents1. RESTful API with Express.js and MongoDB

- [Project Overview](#project-overview)2. React front-end with component architecture

- [Live Deployment](#live-deployment)3. Full CRUD functionality for blog posts

- [Technology Stack](#technology-stack)4. User authentication and authorization

- [Local Development Setup](#local-development-setup)5. Advanced features like image uploads and comments

- [Deployment Guide](#deployment-guide)

- [CI/CD Pipeline](#cicd-pipeline)## Project Structure

- [Monitoring & Maintenance](#monitoring--maintenance)

```

## 🎯 Project Overviewmern-blog/

├── client/                 # React front-end

This MERN stack blog application features:│   ├── public/             # Static files

- ✅ User authentication with JWT│   ├── src/                # React source code

- ✅ Full CRUD operations for blog posts│   │   ├── components/     # Reusable components

- ✅ Category management│   │   ├── pages/          # Page components

- ✅ Comments system│   │   ├── hooks/          # Custom React hooks

- ✅ Search & filtering│   │   ├── services/       # API services

- ✅ Pagination│   │   ├── context/        # React context providers

- ✅ Responsive design│   │   └── App.jsx         # Main application component

│   └── package.json        # Client dependencies

**Week 7 Focus**: Deploying this application to production with proper DevOps practices.├── server/                 # Express.js back-end

│   ├── config/             # Configuration files

## 🌐 Live Deployment│   ├── controllers/        # Route controllers

│   ├── models/             # Mongoose models

### Production URLs│   ├── routes/             # API routes

- **Frontend**: `[URL will be added after deployment]`│   ├── middleware/         # Custom middleware

- **Backend API**: `[URL will be added after deployment]`│   ├── utils/              # Utility functions

│   ├── server.js           # Main server file

### Deployment Status│   └── package.json        # Server dependencies

- [ ] MongoDB Atlas configured└── README.md               # Project documentation

- [ ] Backend deployed to Render/Railway```

- [ ] Frontend deployed to Vercel/Netlify

- [ ] CI/CD pipeline set up## Getting Started

- [ ] Monitoring configured

1. Accept the GitHub Classroom assignment invitation

## 🛠️ Technology Stack2. Clone your personal repository that was created by GitHub Classroom

3. Follow the setup instructions in the `Week4-Assignment.md` file

### Frontend4. Complete the tasks outlined in the assignment

- React 19 with Vite

- React Router DOM v7## Files Included

- Axios for API calls

- Context API for state management- `Week4-Assignment.md`: Detailed assignment instructions

- Starter code for both client and server:

### Backend  - Basic project structure

- Node.js & Express.js 5  - Configuration files

- MongoDB with Mongoose 8  - Sample models and components

- JWT authentication

- Express Validator## Requirements



### DevOps & Deployment- Node.js (v18 or higher)

- **Database**: MongoDB Atlas- MongoDB (local installation or Atlas account)

- **Backend Hosting**: Render (or Railway/Heroku)- npm or yarn

- **Frontend Hosting**: Vercel (or Netlify/GitHub Pages)- Git

- **CI/CD**: GitHub Actions

- **Monitoring**: Sentry (error tracking)## Submission



## 💻 Local Development SetupYour work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:



### Prerequisites1. Complete both the client and server portions of the application

- Node.js v18+2. Implement all required API endpoints

- MongoDB (local or Atlas)3. Create the necessary React components and hooks

- Git4. Document your API and setup process in the README.md

5. Include screenshots of your working application

### Installation

## Resources

1. **Clone the repository**

   ```bash- [MongoDB Documentation](https://docs.mongodb.com/)

   git clone https://github.com/PLP-MERN-Stack-Development/deployment-and-devops-essentials-Princessglory.git- [Express.js Documentation](https://expressjs.com/)

   cd deployment-and-devops-essentials-Princessglory- [React Documentation](https://react.dev/)

   ```- [Node.js Documentation](https://nodejs.org/en/docs/)

- [Mongoose Documentation](https://mongoosejs.com/docs/) 
2. **Backend Setup**
   ```bash
   cd server
   npm install
   
   # Copy environment template
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Frontend Setup**
   ```bash
   cd client
   npm install
   
   # Copy environment template
   cp .env.example .env
   # Edit .env with your API URL
   ```

4. **Run the Application**
   
   Terminal 1 (Backend):
   ```bash
   cd server
   npm run dev
   ```
   
   Terminal 2 (Frontend):
   ```bash
   cd client
   npm run dev
   ```

5. **Access the App**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 🚀 Deployment Guide

### Step 1: MongoDB Atlas Setup
1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Set up database user and network access
4. Get connection string

### Step 2: Backend Deployment (Render)
1. Create account at [Render](https://render.com)
2. Create new Web Service
3. Connect GitHub repository
4. Configure environment variables
5. Deploy

### Step 3: Frontend Deployment (Vercel)
1. Create account at [Vercel](https://vercel.com)
2. Import GitHub repository
3. Configure build settings
4. Set environment variables
5. Deploy

### Step 4: CI/CD Setup
GitHub Actions workflows are configured in `.github/workflows/`

Detailed deployment instructions: [Week7-Assignment.md](Week7-Assignment.md)

## ⚙️ CI/CD Pipeline

### Continuous Integration
- Automated testing on push/pull request
- Code linting and quality checks
- Build verification

### Continuous Deployment
- Automatic deployment on main branch
- Staging and production environments
- Rollback capabilities

### Workflows
- `frontend-ci.yml` - Frontend testing and building
- `backend-ci.yml` - Backend testing
- `frontend-cd.yml` - Frontend deployment
- `backend-cd.yml` - Backend deployment

## 📊 Monitoring & Maintenance

### Health Checks
- Backend: `/api/health`
- Database connectivity monitoring

### Error Tracking
- Sentry integration for error monitoring
- Real-time error alerts

### Performance Monitoring
- API response time tracking
- Frontend performance metrics
- Database query optimization

## 📁 Project Structure

```
deployment-and-devops-essentials-Princessglory/
├── client/                    # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── services/
│   ├── .env.example
│   └── package.json
├── server/                    # Express backend
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── .env.example
│   └── package.json
├── .github/
│   └── workflows/            # CI/CD configurations
├── deployment/               # Deployment scripts
└── README.md
```

## 🔐 Environment Variables

### Backend (.env)
```env
PORT=5000
NODE_ENV=production
MONGODB_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=7d
CLIENT_URL=your_frontend_url
```

### Frontend (.env)
```env
VITE_API_URL=your_backend_api_url
VITE_NODE_ENV=production
```

## 📸 Screenshots

### Application
![Blog Home](screenshots/Post%20Home.png)
![Post Detail](screenshots/Post%20page.png)

### CI/CD Pipeline
`[Screenshots will be added after deployment]`

## 👩‍💻 Author

**Princess Glory**  
PLP MERN Stack Development Course - Week 7 Assignment

## 📚 Resources

- [Week 7 Assignment Details](Week7-Assignment.md)
- [Original Week 4 Documentation](MYREADME.md)
- [Testing Guide](TESTING-GUIDE.md)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Render Docs](https://render.com/docs)
- [Vercel Docs](https://vercel.com/docs)

## 📄 License

This project is created for educational purposes as part of the PLP MERN Stack Development Course.

---

**Assignment Status**: Week 7 - Deployment and DevOps Essentials  
**Last Updated**: November 18, 2025
