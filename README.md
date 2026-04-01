# DigiTools - Digital Tools Buying Platform

DigiTools is a modern React-based digital marketplace interface where users can explore premium tools, add selected products to cart, remove items, and proceed to checkout with real-time toast notifications.

## Live Highlights

- Figma-inspired, section-by-section landing page design
- Product and cart toggle with dynamic cart count in navbar
- Fully working add/remove/checkout cart flow using React state and toast alerts

## Technologies Used

- React.js (Vite)
- Tailwind CSS
- DaisyUI
- React-Toastify
- JavaScript (ES6+)

## Key Features

1. Responsive Premium UI
   - Hero, stats, products, steps, pricing, CTA, and footer sections built to match the provided design style.

2. Complete Cart Management
   - Add product to cart, prevent duplicate entries, remove individual products, view total amount, and clear cart on checkout.

3. Smart User Feedback
   - Toast notifications for add, remove, duplicate, empty cart, and checkout actions.

## Product Data Structure

Each product includes:

- id
- name
- description
- price
- period
- tag
- tagType
- features (array)
- icon

## Project Setup

```bash
npm install
npm run dev
```

## Build For Production

```bash
npm run build
npm run preview
```

## Folder Note

- Design assets are used from `src/assets/`.
- Main implementation is now component-based inside `src/components/` with app orchestration in `src/App.jsx`.

## Author

Developed for Assignment A-6 Digital Tools Buying Website.
