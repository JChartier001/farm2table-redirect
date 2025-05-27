# Farm2Table Redirect App

A simple Next.js application that provides a masked redirect to the Farm2Table waitlist page.

## Features

- **Masked Redirect**: Visitors to your domain will be seamlessly redirected to the Farm2Table waitlist
- **Multiple Routes**: Supports redirects from `/`, `/join`, and `/waitlist` paths
- **Fallback Page**: Includes a beautiful fallback page with manual redirect option
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

## How It Works

The app uses Next.js configuration to handle redirects:

- **Server-side redirects** via `next.config.js` for immediate redirection
- **Client-side fallback** via React component for additional reliability
- **Multiple entry points** to catch different URL patterns

## Deployment

This app can be deployed to any platform that supports Next.js:

- Vercel (recommended)
- Netlify
- Railway
- Your own server

## Farm2Table Waitlist

This app redirects to: https://www.fastwaitlist.com/farm2table

> "Where local food meets modern connection. Born in Gainesville, Florida. Built for farmers, makers, and neighbors everywhere."
