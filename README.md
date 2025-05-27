# Farm2Table Redirect App

A simple Next.js application that provides a masked redirect to the Farm2Table waitlist page.

## Features

- **Masked Redirect**: Visitors to your domain will see your URL while viewing the Farm2Table waitlist
- **Iframe Implementation**: Seamless embedding of the waitlist page
- **Loading Screen**: Beautiful branded loading experience
- **SEO Friendly**: Proper metadata and descriptions for search engines

## Getting Started

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Run Development Server**

   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## 🚀 Deployment to Make farm2table.app Work

### Option 1: Deploy to Vercel (Recommended)

1. **Deploy to Vercel**

   ```bash
   npx vercel
   ```

   - Follow the prompts to create a Vercel account if needed
   - This will give you a URL like `https://farm2table-redirect-xxx.vercel.app`

2. **Add Custom Domains**

   - In Vercel dashboard, go to your project settings
   - Add both `farm2table.app` and `www.farm2table.app` as custom domains
   - Vercel will provide DNS instructions for both

3. **Update DNS**
   - Point your `farm2table.app` domain to Vercel's servers
   - Usually involves updating A records or CNAME records

### Option 2: Other Hosting Platforms

- **Netlify**: Connect your Git repo and deploy
- **Railway**: Simple deployment with custom domains
- **Your own server**: Build and deploy the static files

## DNS Configuration

Once deployed, you'll need to update your domain's DNS settings for both domains:

**For farm2table.app (apex domain):**

```
Type: A
Name: @
Value: 76.76.19.61
```

**For www.farm2table.app:**

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

(Exact values will be provided by your hosting platform)

## How It Works

The app uses an iframe to embed the Farm2Table waitlist:

- **Your domain stays in the URL bar** (`farm2table.app`)
- **Farm2Table content loads inside** the iframe
- **Seamless user experience** with branded loading screen
- **All functionality preserved** (forms, interactions, etc.)

## Farm2Table Waitlist

This app displays: https://www.fastwaitlist.com/farm2table

> "Where local food meets modern connection. Born in Gainesville, Florida. Built for farmers, makers, and neighbors everywhere."

## Troubleshooting

- **Domain not working?** Check DNS propagation (can take 24-48 hours)
- **Iframe blocked?** Some sites block iframe embedding - this is rare but possible
- **Loading issues?** Check browser console for any CORS or security errors
