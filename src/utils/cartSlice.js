import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
    totalItems: 0,
    deliveryAddress: {},
    paymentMethod: {},
  },
  reducers: {
    addItem: (state, action) => {
      //state.items.push(action.payload);
      const item = state.items[action.payload.id];
      const quantity =
        item && item.hasOwnProperty("quantity")
          ? state.items[action.payload.id]?.quantity + 1
          : 1;
      state.items[action.payload.id] = { ...action.payload, quantity };
      state.totalItems = state.totalItems + 1;
    },

    removeItem: (state, action) => {
      //state.items.pop();
      const item = state.items[action.payload];
      if (!item) return;
      if (item.quantity > 1) {
        item.quantity -= 1;
        state.totalItems--;
      } else {
        state.totalItems--;
        delete state.items[action.payload];
      }
    },

    clearCart: (state) => {
      state.items = {};
      state.totalItems = 0;
    },

    updateDeliveryAddress: (state, action) => {
      state.deliveryAddress = action.payload;
    },

    updatePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  updateDeliveryAddress,
  updatePaymentMethod,
} = cartSlice.actions;

export default cartSlice.reducer;
