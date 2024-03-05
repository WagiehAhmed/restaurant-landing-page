import React from "react";
import { Box } from "@mui/material";
import { useStoreContext } from "../../hooks/useStoreContext";
import FavoritesCardItem from "./FavoritesCardItem";

const FavoritesCard = () => {
 
  const { favorites } = useStoreContext();
  return (
    <Box>
      {favorites && favorites.map((item) => (
        <FavoritesCardItem item={item} key={item.image} />
      ))}
    </Box>
  );
};

export default FavoritesCard;
