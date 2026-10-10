import React from 'react'
import { Link } from 'react-router-dom'

// TODO (Task 7): build the shopping cart page.
// Requirements:
// - Show the total cart amount.
// - Each plant in the cart shows: thumbnail, name, unit price,
//   and the total cost for that plant (unit price x quantity).
// - Buttons to increase and decrease each item's quantity,
//   updating the cart correctly.
// - A delete button per item to remove it from the cart.
// - A checkout button showing "Coming Soon" (or similar).
// - A "Continue shopping" button linking back to the product listing page.

function CartItem() {
  return (
    <div className="cart-page">
      {/* TODO: navbar (shared with ProductList) */}
      {/* TODO: list of cart items with quantity controls */}
      {/* TODO: total cart amount */}
      {/* TODO: checkout + continue shopping buttons */}
    </div>
  )
}

export default CartItem
