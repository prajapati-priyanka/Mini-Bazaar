# Mini Bazaar

A simple ecommerce application built with React, TypeScript, and SCSS Modules using the Fake Store API.

[Live Demo](https://mini-bazaar.netlify.app/)

## Features

* Product Listing Page
* Product Details Page
* Product Image Gallery with Thumbnails
* Color and Size Selection
* Stock Status Indicators
* Add to Cart Functionality
* Cart Drawer
* Update Item Quantity
* Remove Items from Cart
* Cart Persistence using localStorage
* Skeleton Loading States
* Error Handling
* 404 Not Found Page

## Tech Stack

* React
* TypeScript
* React Router
* Context API
* SCSS Modules
* Fake Store API

## Getting Started

Clone the repository:

```bash
git clone <https://github.com/prajapati-priyanka/Mini-Bazaar>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Project Structure

```text
## Project Structure

```text
src
├── components
│   ├── CartDrawer
│   │   ├── CartDrawer.tsx
│   │   └── CartDrawer.module.scss
│   │
│   ├── Error
│   │   ├── Error.tsx
│   │   └── Error.module.scss
│   │
│   ├── Navbar
│   │   ├── Navbar.tsx
│   │   └── Navbar.module.scss
│   │
│   └── ProductCard
│       ├── ProductCard.tsx
│       └── ProductCard.module.scss
│
├── context
│   ├── CartContext.ts
│   ├── CartProvider.ts
│   └── useCart.tsx
│
├── data
│   └── ProductMeta.ts
│
├── hooks
│   └── useProducts.ts
│
├── pages
│   ├── NotFound
│   │   ├── NotFound.tsx
│   │   └── NotFound.module.scss
│   │
│   ├── ProductDetails
│   │   ├── ProductDetails.tsx
│   │   ├── ProductDetails.module.scss
│   │   ├── ProductDetailsSkeleton.tsx
│   │   └── ProductDetailsSkeleton.module.scss
│   │
│   └── ProductListing
│       ├── ProductListing.tsx
│       ├── ProductListing.module.scss
│       ├── ProductCardSkeleton.tsx
│       └── ProductCardSkeleton.module.scss
│
├── services
│   └── productsAPI.ts
│
├── styles
│    ├── _mixins.scss
│    ├── _variables.scss
│    └── global.scss
│
│
├── types
│   ├── cart.ts
│   └── product.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

```

## Notes

The Fake Store API does not provide product variants such as colors, sizes, stock information, or multiple product images. To support these features, additional metadata was introduced while keeping the original API response unchanged.

Please refer to `DECISIONS.md` for details about architectural decisions and trade-offs made during development.
