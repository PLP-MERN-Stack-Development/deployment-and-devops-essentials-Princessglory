# MERN Blog Deployment - Quick Start

## Local Development

### Start Both Servers

**Terminal 1 - Backend:**
```powershell
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```powershell
cd client
npm run dev
```

Access the app at: http://localhost:5173

## Production Deployment Checklist

### 1. Prepare MongoDB Atlas
- [ ] Create MongoDB Atlas account
- [ ] Create a cluster
- [ ] Create database user
- [ ] Whitelist IP (0.0.0.0/0 for testing)
- [ ] Get connection string

### 2. Deploy Backend (Render)
- [ ] Push code to GitHub
- [ ] Create Render account
- [ ] Create new Web Service
- [ ] Connect GitHub repo
- [ ] Set build command: `cd server && npm install`
- [ ] Set start command: `cd server && npm start`
- [ ] Add environment variables:
  - NODE_ENV=production
  - MONGODB_URI=(your Atlas connection string)
  - JWT_SECRET=(generate a secure secret)
  - CLIENT_URL=(will add after frontend deployment)
  - PORT=5000
- [ ] Deploy and note the URL

### 3. Deploy Frontend (Vercel)
- [ ] Create Vercel account
- [ ] Import GitHub repository
- [ ] Set root directory: `client`
- [ ] Set build command: `npm run build`
- [ ] Set output directory: `dist`
- [ ] Add environment variables:
  - VITE_API_URL=(your Render backend URL)/api
  - VITE_NODE_ENV=production
- [ ] Deploy and note the URL

### 4. Update CORS
- [ ] Go back to Render
- [ ] Update CLIENT_URL with Vercel frontend URL
- [ ] Redeploy backend

### 5. Test Production
- [ ] Visit frontend URL
- [ ] Test user registration
- [ ] Test login
- [ ] Test creating posts
- [ ] Test all CRUD operations
- [ ] Check health endpoint: (backend-url)/api/health

## Environment Variables Reference

### Backend (.env)
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mern-blog?retryWrites=true&w=majority
JWT_SECRET=your-very-secure-secret-key-here
JWT_EXPIRE=7d
CLIENT_URL=https://your-app.vercel.app
```

### Frontend (.env)
```env
VITE_API_URL=https://your-backend.onrender.com/api
VITE_NODE_ENV=production
```

## Deployment Platforms

- **Backend**: Render (https://render.com)
- **Frontend**: Vercel (https://vercel.com)
- **Database**: MongoDB Atlas (https://cloud.mongodb.com)

## CI/CD

GitHub Actions workflows are configured in `.github/workflows/`:
- `backend-ci.yml` - Tests backend on push
- `frontend-ci.yml` - Builds frontend on push

## Monitoring

### Health Check Endpoint
```
GET /api/health
```

Returns:
```json
{
  "status": "OK",
  "timestamp": "2025-11-18T...",
  "uptime": 123.45,
  "environment": "production",
  "database": {
    "status": "connected",
    "connected": true,
    "name": "mern-blog"
  },
  "memory": {
    "used": "45MB",
    "total": "120MB"
  }
}
```

## Security Features Added

✅ Helmet.js - Security headers
✅ Rate limiting - 100 requests per 15 minutes
✅ CORS - Configured for specific origins
✅ Compression - Gzip compression
✅ Morgan - HTTP request logging
✅ Environment-based configurations

## Troubleshooting

### Backend won't start
- Check MongoDB connection string
- Verify all environment variables are set
- Check Render logs

### Frontend can't connect to backend
- Verify VITE_API_URL is correct
- Check CORS settings in backend
- Ensure CLIENT_URL matches frontend URL

### Database connection issues
- Check MongoDB Atlas IP whitelist
- Verify connection string format
- Check database user credentials

## Next Steps

1. Complete all deployment checklist items
2. Test thoroughly in production
3. Set up error tracking (optional: Sentry)
4. Set up uptime monitoring (optional: UptimeRobot)
5. Document your deployment URLs in README.md
6. Take screenshots of CI/CD pipeline for submission
