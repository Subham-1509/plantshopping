import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const {name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      const { name } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
      state.items = state.items.filter(item => item.name !== name);
      }
    },

    incrementQuantity: (state, action) => {
      const { name } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) { 
        itemToUpdate.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const { name } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) { 
        itemToUpdate.quantity--;
      }
    },
  },

});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } = CartSlice.actions;

export default CartSlice.reducer;


