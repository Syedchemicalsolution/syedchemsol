# The Century Scents - Chemical Solutions Website

A modern e-commerce website for chemical solutions and fragrances with a comprehensive admin panel.

## Features

### Frontend
- Responsive design with mobile-first approach
- Fixed header with mobile navigation
- Mobile cart button at bottom
- Product catalog with filtering and sorting
- Shopping cart functionality
- Contact forms
- Hero section with animations

### Admin Panel
- Complete website management
- Product management (add, edit, delete)
- Content management for all pages
- Image management for all pages
- Color customization
- Contact information management
- Orders history with reset functionality
- Admin password change
- Google Drive integration for data backup
- Hero image animation settings

### Mobile Features
- Three-line hamburger menu
- Search option below navigation
- Fixed cart button at bottom right
- Responsive design for all screen sizes

## Deployment

### Netlify Deployment
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify
3. Set up environment variables in Netlify dashboard

### Environment Variables
- `NEXT_PUBLIC_GOOGLE_DRIVE_API_KEY` (Optional)
- `NEXT_PUBLIC_GOOGLE_CLIENT_ID` (Optional)
- `ADMIN_EMAIL`
- `NEXT_PUBLIC_SITE_URL`

## Admin Access
- URL: `/admin`
- Default credentials:
  - Username: `admin`
  - Password: `admin123`

## Tech Stack
- Next.js 14
- React 18
- Tailwind CSS
- shadcn/ui components
- Lucide React icons
- Google Drive API (optional)

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env.local` and fill in your values
4. Run development server: `npm run dev`
5. Build for production: `npm run build`

## Admin Panel Features

### Dashboard
- Statistics overview
- Google Drive connection status
- Quick actions
- Orders reset functionality
- Password change

### Website Settings
- Site name and logo
- Hero section content
- Hero animation settings
- Contact information

### Content Management
- Page-wise content editing
- Home, About, Shop, Contact pages
- Real-time preview

### Image Management
- Page-wise image management
- Image preview
- URL-based image updates

### Product Management
- Add/edit/delete products
- Stock management
- Pricing and discounts
- Product badges

### Color Customization
- Header colors
- Footer colors
- Background colors
- Real-time preview

## Mobile Optimization
- Fixed header that doesn't scroll
- Mobile-friendly navigation
- Bottom cart button
- Touch-friendly interface
- Responsive grid layouts
