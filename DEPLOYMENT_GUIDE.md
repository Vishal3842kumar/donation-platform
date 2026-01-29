# Deployment Guide - Donation Platform

## Prerequisites
- GitHub account
- MongoDB Atlas account (free)
- Railway account (or Vercel/Render)
- Stripe account (optional - for payments)

---

## Step 1: Set Up MongoDB Atlas (Free)

1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create account → Create free cluster
3. Create database user with password
4. Get connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/donation-platform`)
5. Copy this - you'll need it later

---

## Step 2: Create GitHub Repository

```powershell
cd c:\Users\lenovo\Desktop\Project\donation-platform
git init
git add .
git commit -m "Initial commit"
```

Then:
1. Go to [github.com](https://github.com) → New repository
2. Name it `donation-platform`
3. Push your code to GitHub (follow GitHub instructions)

---

## Step 3: Deploy Backend to Railway

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Create new project → "Deploy from GitHub repo"
4. Select your `donation-platform` repository
5. In Railway dashboard:
   - Click "Variables"
   - Add these environment variables:
     ```
     MONGODB_URI = mongodb+srv://username:password@cluster.mongodb.net/donation-platform
     JWT_SECRET = your_random_secret_key_here
     STRIPE_SECRET_KEY = sk_live_your_key
     FRONTEND_URL = https://your-frontend-url.com (add later)
     NODE_ENV = production
     PORT = 5000
     ```
6. Click "Deploy" - Wait 2-3 minutes
7. Go to "Settings" → Copy your backend URL (e.g., `https://donation-backend-production.up.railway.app`)

---

## Step 4: Deploy Frontend to Railway (or Vercel)

### Option A: Railway
1. In Railway, click "New" → "GitHub Repo"
2. Select your repo again
3. Select the `frontend` directory as root
4. In Variables, add:
   ```
   REACT_APP_API_URL = https://your-backend-url.com/api
   REACT_APP_STRIPE_PUBLISHABLE_KEY = pk_live_your_key
   ```
5. Deploy → Get frontend URL

### Option B: Vercel (Easier for Frontend)
1. Go to [vercel.com](https://vercel.com)
2. Import GitHub repo
3. Select `frontend` as root directory
4. Add environment variables
5. Deploy → Get URL instantly

---

## Step 5: Update Backend FRONTEND_URL

Once you have frontend URL:
1. Go back to Railway backend settings
2. Update `FRONTEND_URL` variable with your frontend URL
3. Redeploy

---

## Your Live URLs
- **Frontend**: `https://your-frontend-url.com`
- **Backend API**: `https://your-backend-url.com`
- **API Calls**: Work automatically via proxy

---

## Troubleshooting

### Backend not connecting to MongoDB?
- Check MongoDB URI in Railway variables
- Make sure IP address is whitelisted in MongoDB Atlas (set to 0.0.0.0 for public)

### Frontend getting 404?
- Check `REACT_APP_API_URL` in frontend environment variables
- Make sure backend URL is correct

### CORS errors?
- Check `FRONTEND_URL` in backend environment variables
- Make sure it matches your frontend URL exactly

---

## Quick Summary
1. ✅ Create MongoDB Atlas database
2. ✅ Push code to GitHub
3. ✅ Deploy backend to Railway
4. ✅ Deploy frontend to Railway/Vercel
5. ✅ Add environment variables to both
6. ✅ Your project is live!

Total time: ~10-15 minutes
