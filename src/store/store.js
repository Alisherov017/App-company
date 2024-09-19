import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import favoritesSlice from "./favoritesSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    favorites: favoritesSlice,
  },
});
export default store;
