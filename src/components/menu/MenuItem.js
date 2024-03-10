import React from "react";
import { theme } from "../../Styles/themes";
import {
  IconContainer,
  MenuItemActions,
  MenuItemActionsAddToCard,
  MenuItemActionsPrice,
  MenuItemCard,
  MenuItemCardContent,
  MenuItemCardMedia,
  MenuItemContainer,
  MenuItemDescription,
  MenuItemName,
  AddToCardIconContainer,
  AddToFavoriteIconContainer,
} from "../../Styles";
import { Rating, useMediaQuery } from "@mui/material";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useStoreContext } from "../../hooks/useStoreContext";

export default function MenuItem({ item }) {
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  //store
  const { orders, favorites, dispatch } = useStoreContext();

 
  //adding to orders
  const addToOrders = (item) => {
    if (orders.includes(item)) {
      dispatch({ type: "deleteFromOrders", payload: item });
    } else {
      dispatch({ type: "addToOreders", payload: item });
    }
  };

  //adding to favorites
  const addToFavorites = (item) => {
    if (favorites.includes(item)) {
      dispatch({ type: "deleteFromFavorites", payload: item });
    } else {
      dispatch({ type: "addToFavorites", payload: item });
    }
  };
  return (
    <MenuItemContainer item xs={4} matches={matches}>
      <MenuItemCard elevation={5}>
        <MenuItemCardMedia image={item.image} title="desh media" />
        <MenuItemCardContent>
          <MenuItemName gutterBottom variant="h5" component="div">
            {item.name}
          </MenuItemName>
          <Rating value={item.rating} precision={1} />
          <MenuItemDescription variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </MenuItemDescription>
        </MenuItemCardContent>

        
        <MenuItemActions>
          <MenuItemActionsAddToCard onClick={()=>{addToOrders(item)}}>add to card</MenuItemActionsAddToCard>
          <MenuItemActionsPrice variant="text">
            {item.price}$
          </MenuItemActionsPrice>
        </MenuItemActions>

        <AddToCardIconContainer
          className={
            orders && orders.includes(item) ? "addToCard added" : "addToCard"
          }
          onClick={() => {
            addToOrders(item);
          }}
        >
          <AddShoppingCartIcon />
        </AddToCardIconContainer>

        <AddToFavoriteIconContainer
          className={
            favorites && favorites.includes(item)
              ? "addToFavorite added"
              : "addToFavorite"
          }
          onClick={() => {
            addToFavorites(item);
          }}
        >
          <FavoriteBorderIcon />
        </AddToFavoriteIconContainer>
      </MenuItemCard>
    </MenuItemContainer>
  );
}
