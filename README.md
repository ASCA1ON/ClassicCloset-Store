
# Classic Closet Storefront

This is the customer-facing storefront for the Classic Closet e-commerce project. It displays the products, categories, featured items, and more that are managed through the admin dashboard.

## Features

- Displays products by category
- Showcases featured products on homepage  
- Browse and filter products
- Add items to cart
- Mobile responsive design
- Powered by admin dashboard API

## Tech Stack

- Next.js
- React
- @headlessui/react
- Axios 
- clsx
- lucide-react
- query-string
- react-hot-toast
- tailwind-merge
- zustand

## Getting Started

- Clone the repo
- Install dependencies with `npm install`
- Set `NEXT_PUBLIC_API_URL` & ` ADMIN_Billboard_ID` environment variable to point to admin API
- Start dev server with `npm run dev`

## Usage

Customers can:

- Browse products by category
- View detailed product information
- Filter products by attributes like color and size
- Add items to a cart
- Checkout with Stripe integration


The storefront consumes the API and data models from the admin dashboard.

## Customization

The storefront can be modified and styled to fit your brand. Some ideas:

- Custom layouts
- Alternate theme/styling
- Related products
- Search  
- Customer accounts/login
- And more...

The frontend can be customized without having to change the backend admin API.
