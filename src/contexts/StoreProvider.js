import { Favorite } from "@mui/icons-material";
import React, { createContext, useContext, useReducer } from "react";

export const storeContext = createContext({});

const StoreProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "addToOreders": {
          return {
            orders: [...state.orders, action.payload],
            favorites: [...state.favorites],
          };
      }
      case "deleteFromOrders": {
          return {
            orders: [...state.orders.filter(item => item.id != action.payload.id)],
            favorites: [...state.favorites],
          };
      }
      case "addToFavorites": {
          return {
            orders: [...state.orders],
            favorites: [...state.favorites,action.payload],
          };
      }
      case "deleteFromFavorites": {
        return {
          orders: [...state.orders],
          favorites: [...state.favorites.filter(item => item.id != action.payload.id)],
        };
    }
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { orders: [], favorites: [] });

  return (
    <storeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </storeContext.Provider>
  );
};

export default StoreProvider;
