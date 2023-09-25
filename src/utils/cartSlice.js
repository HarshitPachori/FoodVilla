import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  // here in the reduccers there is a mapping of action : reducer function
  /*
  in redux we create store for our whole application or for some part of our application . the store contains of different slices to manage data flow and state of different features of the website.
  we cannot direclty modify the data in the store so we need some action and reducer functions for this. here we create some dispatchable actions which call the reducer function to modify anything in the store.
  now this is for writing data into the store but to obtain or read data from the store we use dispatch function useSelector hook  to subscribe or use the data from the store.
  
  */
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.remove(action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
