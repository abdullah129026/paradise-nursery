import React from 'react'

// TODO (Task 6): build the product listing page.
// Requirements:
// - At least 3 plant categories, each with at least 6 unique houseplants.
// - Every plant shows a thumbnail, name, and price.
// - Each plant has an "Add to Cart" button that:
//   - adds the plant to the cart,
//   - disables itself after the plant is added,
//   - increments the cart icon count.
// - A navbar on this page (and the cart page) with links to Home, Plants, Cart.
// - A cart icon showing the total number of items, updating dynamically.
//
// Hint: keep your plant data in an array grouped by category.
// Each plant needs a thumbnail image URL, a name, and a price.

function ProductList() {
  return (
    <div className="product-list">
      {/* TODO: navbar (Home | Plants | Cart + cart icon with item count) */}
      {/* TODO: plant categories with plant cards */}
    </div>
  )
}

export default ProductList
