# Vercel Deployment Guide

## ✅ Pre-Deployment Checklist

### Frontend Configuration (All Done!)
- ✅ `vite.config.js` - Optimized for production build
- ✅ `vercel.json` - Configured with rewrites for SPA routing
- ✅ `.env.production` - Backend API URL set to Render
- ✅ `package.json` - Cleaned up (removed gh-pages)
- ✅ `src/services/api.js` - Uses environment variables
- ✅ React Router configured with BrowserRouter

### Backend Configuration
- ✅ Backend deployed on Render: `https://mern-blog-api-uwm7.onrender.com`
- ✅ MongoDB Atlas connected
- ✅ Health check endpoint working
- ⚠️ CORS needs to be updated with Vercel URL (after deployment)

---

## 🚀 Deployment Steps

### Step 1: Fork Repository (If Not Done)
1. Go to: https://github.com/PLP-MERN-Stack-Development/deployment-and-devops-essentials-Princessglory
2. Click "Fork" → Select your account
3. Wait for fork to complete

### Step 2: Deploy to Vercel
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New" → "Project"
4. Select your forked repository
5. Configure project settings:

   **Framework Preset:** Vite
   
   **Root Directory:** `client` ⚠️ IMPORTANT!
   
   **Build Command:** `npm run build`
   
   **Output Directory:** `dist`
   
   **Install Command:** `npm install`

6. **Environment Variables** - Add these:
   ```
   VITE_API_URL=https://mern-blog-api-uwm7.onrender.com/api
   VITE_NODE_ENV=production
   ```

7. Click "Deploy"

### Step 3: Update Backend CORS
After deployment, you'll get a Vercel URL like: `https://your-project.vercel.app`

Update Render environment variables:
1. Go to Render dashboard → Your backend service
2. Environment → Add:
   ```
   CLIENT_URL=https://your-project.vercel.app
   ```
3. Save changes (service will redeploy automatically)

### Step 4: Test Deployment
1. Visit your Vercel URL
2. Test user registration
3. Test login
4. Test creating a post
5. Test viewing posts
6. Test comments

### Step 5: Update README
Add your live URLs to README.md:
```markdown
## 🌐 Live Deployment

- **Frontend:** https://your-project.vercel.app
- **Backend:** https://mern-blog-api-uwm7.onrender.com
- **Health Check:** https://mern-blog-api-uwm7.onrender.com/api/health
```

---

## 🔧 Troubleshooting

### Issue: CORS Error
**Solution:** Make sure you updated `CLIENT_URL` in Render with your Vercel URL

### Issue: API requests failing
**Solution:** Check that `VITE_API_URL` environment variable is set in Vercel

### Issue: 404 on page refresh
**Solution:** Vercel.json rewrites should handle this. If not, check the rewrites configuration.

### Issue: Build failing
**Solution:** 
- Check build logs in Vercel
- Ensure Root Directory is set to `client`
- Verify all dependencies are in package.json

---

## 📋 Assignment Submission Checklist

- [ ] Frontend deployed to Vercel
- [ ] Backend deployed to Render (already done)
- [ ] Both URLs added to README
- [ ] Full app tested in production
- [ ] Screenshots of:
  - [ ] Vercel deployment
  - [ ] Render deployment
  - [ ] App running (register, login, create post)
  - [ ] GitHub Actions workflows
- [ ] All code pushed to forked repository
- [ ] Submit forked repository URL

---

## 🎉 You're Ready!

Your code is now fully configured for Vercel deployment. Just follow the steps above and you'll have your MERN app live in minutes!
