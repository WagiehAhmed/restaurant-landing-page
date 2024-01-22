import React, { createContext, useContext, useReducer } from "react";

const storeContext = createContext({});

export const GetStore = () => {
  return useContext(storeContext);
};

const StoreProvider = ({ children }) => {

  const reducer = (state, action) => {
    switch (action.type) {
      case "addToOreders":
        state.orders.push(action.payload);
        break;
      case "addToFavorites":
        state.favorites.push(action.payload);
        break;
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
