# 🌿 Paradise Nursery

**Paradise Nursery** is a React-based e-commerce shopping cart application for an online plant shop. Browse beautiful houseplants organized by category, add them to your cart, and manage your order — all in a lush, nature-inspired interface.

## Features

- 🌱 Browse 18+ unique houseplants across 3 categories
- 🛒 Add to cart with live item count on the navbar
- ➕➖ Increase / decrease item quantities in the cart
- 🗑️ Remove individual items from the cart
- 💰 Live per-item and total cost calculation
- 🔒 "Add to Cart" button disables after a plant is added
- 📱 Fully responsive layout

## Tech Stack

- **React** (Vite)
- **Redux Toolkit** — global cart state via `CartSlice`
- **React Router DOM** — client-side routing
- **CSS3** — custom properties, Grid, Flexbox

## Project Structure

```
src/
├── App.jsx              # Landing page + routing
├── App.css              # Global styles + background
├── main.jsx             # Redux Provider + Router setup
├── store.js             # Redux store
├── components/
│   ├── AboutUs.jsx      # About the company
│   ├── ProductList.jsx  # Plant catalogue + navbar
│   ├── CartItem.jsx     # Shopping cart page
│   └── CartSlice.jsx    # Redux slice for cart state
```

## Getting Started

```bash
npm install
npm run dev
```

## Pages

| Route | Page |
|---|---|
| `/` | Landing Page |
| `/about` | About Us |
| `/products` | Plant Catalogue |
| `/cart` | Shopping Cart |
