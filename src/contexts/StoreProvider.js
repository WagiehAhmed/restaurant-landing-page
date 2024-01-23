import { Favorite } from "@mui/icons-material";
import React, { createContext, useContext, useReducer } from "react";

const storeContext = createContext({});

export const GetStore = () => {
  return useContext(storeContext);
};

const StoreProvider = ({ children }) => {

  const reducer = (state, action) => {
    switch (action.type) {
      case "addToOreders":{
        state = {orders:[... state.orders,action.payload],favorites:[...state.favorites]};
        return state;
        }
      case "addToFavorites":{
        state = {orders:[... state.orders],favorites:[...state.favorites,action.payload]};
        return state;
        }

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { orders: [], favorites: [] });

  return (
    <storeContext.Provider value={{ state, dispatch }}>
      {children}
    </storeContext.Provider>
  );
};

export default StoreProvider;
