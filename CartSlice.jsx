import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],          // [{ id, name, price, image, quantity }]
    addedIds: [],       // tracks which plant IDs have been added (to disable button)
  },
  reducers: {
    addItem(state, action) {
      const plant = action.payload;
      const existing = state.items.find(i => i.id === plant.id);
      if (!existing) {
        state.items.push({ ...plant, quantity: 1 });
        state.addedIds.push(plant.id);
      }
    },

    removeItem(state, action) {
      const id = action.payload;
      state.items = state.items.filter(i => i.id !== id);
      state.addedIds = state.addedIds.filter(i => i !== id);
    },

    increaseQuantity(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.quantity += 1;
    },

    decreaseQuantity(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          // Remove entirely if quantity would reach 0
          state.items = state.items.filter(i => i.id !== action.payload);
          state.addedIds = state.addedIds.filter(i => i !== action.payload);
        }
      }
    },

    clearCart(state) {
      state.items = [];
      state.addedIds = [];
    },
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity, clearCart } =
  cartSlice.actions;

// Selectors
export const selectCartItems    = state => state.cart.items;
export const selectAddedIds     = state => state.cart.addedIds;
export const selectCartCount    = state => state.cart.items.reduce((sum, i) => sum + i.quantity, 0);
export const selectCartTotal    = state =>
  state.cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0);

export default cartSlice.reducer;
