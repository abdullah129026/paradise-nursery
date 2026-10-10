import { createSlice } from '@reduxjs/toolkit'

// TODO (Task 5): implement the Redux slice for the shopping cart.
// The slice needs reducers that:
// - add a plant to the cart (with quantity handling if it is already there)
// - remove a plant from the cart
// - increase / decrease the quantity of a cart item
// Think about what the initial state should hold (e.g. the list of items).

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    // TODO: addItem
    // TODO: removeItem
    // TODO: updateQuantity (increase / decrease)
  },
})

export const { /* TODO: export the actions */ } = cartSlice.actions
export default cartSlice.reducer
