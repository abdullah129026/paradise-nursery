# Paradise Nursery

An online plant shop shopping cart application built with React, Redux Toolkit, and React Router.

## Project

Paradise Nursery lets users browse houseplants by category, view plant details (image, name, description, price), add plants to a shopping cart, and manage cart items (update quantities, remove items, see totals).

## Getting started

```bash
npm install
npm run dev
```

## Project structure

- `src/App.jsx` — landing page + routing
- `src/App.css` — landing page styles (background image)
- `src/AboutUs.jsx` — company details page
- `src/CartSlice.jsx` — Redux slice for the shopping cart
- `src/ProductList.jsx` — plant catalog (categories, add to cart)
- `src/CartItem.jsx` — shopping cart page
- `src/store.js` — Redux store wiring
