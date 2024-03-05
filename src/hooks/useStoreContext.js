import { useContext } from "react";
import { storeContext } from "../contexts/StoreProvider";

export const useStoreContext = () => {
    return useContext(storeContext);
  };
  