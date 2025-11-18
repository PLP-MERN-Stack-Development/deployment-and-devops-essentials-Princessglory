# Deployment Guide

## Backend Deployment (Render)

### Prerequisites
- GitHub account with your repository pushed
- Render account (https://render.com)
- MongoDB Atlas cluster set up

### Steps

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for production deployment"
   git push origin main
   ```

2. **Create a Web Service on Render**
   - Go to https://dashboard.render.com
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Configure:
     - Name: `mern-blog-api`
     - Environment: `Node`
     - Build Command: `cd server && npm install`
     - Start Command: `cd server && npm start`
     - Instance Type: Free

3. **Set Environment Variables**
   Add these in the Render dashboard:
   ```
   NODE_ENV=production
   PORT=5000
   MONGODB_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_secure_jwt_secret
   CLIENT_URL=https://your-frontend-url.vercel.app
   ```

4. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment to complete
   - Note your backend URL: `https://your-app.onrender.com`

## Frontend Deployment (Vercel)

### Steps

1. **Create a Vercel account**
   - Go to https://vercel.com
   - Sign up with GitHub

2. **Import your repository**
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Configure:
     - Framework Preset: Vite
     - Root Directory: `client`
     - Build Command: `npm run build`
     - Output Directory: `dist`

3. **Set Environment Variables**
   ```
   VITE_API_URL=https://your-backend.onrender.com/api
   VITE_NODE_ENV=production
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment
   - Note your frontend URL: `https://your-app.vercel.app`

5. **Update Backend CORS**
   - Go back to Render
   - Update `CLIENT_URL` environment variable with your Vercel URL
   - Redeploy the backend

## MongoDB Atlas Setup

1. **Create a cluster**
   - Go to https://cloud.mongodb.com
   - Create a free cluster
   - Choose a cloud provider and region

2. **Set up database access**
   - Create a database user
   - Note the username and password

3. **Set up network access**
   - Add IP: `0.0.0.0/0` (allow from anywhere) for initial testing
   - For production, whitelist specific IPs

4. **Get connection string**
   - Click "Connect" → "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database password
   - Replace `<dbname>` with your database name (e.g., `mern-blog`)

## Post-Deployment Checklist

- [ ] Backend deployed and accessible
- [ ] Frontend deployed and accessible
- [ ] MongoDB Atlas connected
- [ ] Environment variables set correctly
- [ ] CORS configured properly
- [ ] Health check endpoint working: `/api/health`
- [ ] Can register and login users
- [ ] Can create, read, update, delete posts
- [ ] All features working in production

## Troubleshooting

### Backend Issues
- Check Render logs for errors
- Verify all environment variables are set
- Test health endpoint: `https://your-backend.onrender.com/api/health`

### Frontend Issues
- Check browser console for errors
- Verify VITE_API_URL is correct
- Check network tab for failed API calls

### Database Issues
- Verify MongoDB Atlas IP whitelist
- Check connection string format
- Verify database user credentials
