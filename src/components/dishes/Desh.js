import React, { useEffect } from "react";
import {
  DeshActions,
  DeshActionsAddToCard,
  DeshActionsPrice,
  DeshCard,
  DeshCardMedia,
  DeshContainer,
  DeshName,
  IconContainer,
} from "../../Styles/deshes";
import { Rating } from "@mui/material";
import { DeshCardContent } from "./../../Styles/deshes/index";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  AddToCardIconContainer,
  AddToFavoriteIconContainer,
} from "../../Styles/common";
import { useStoreContext } from "../../hooks/useStoreContext";

export default function Desh({ item, matches }) {

  //store
  const { orders, favorites, dispatch } = useStoreContext();

  //adding to orders
  const addToOrders = (item) => {
    if (orders.includes(item)) {
      dispatch({ type: "deleteFromOrders", payload: item });
    } else {
      dispatch({ type: "addToOreders", payload: {...item,count:1} });
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
    <DeshContainer item xs={4} matches={matches}>
      <DeshCard elevation={5}>
        <DeshCardMedia image={item.image} title="desh media" />
        <DeshCardContent>
          <DeshName gutterBottom variant="h5" component="div">
            {item.name}
          </DeshName>
          <Rating value={item.rating} precision={1} />
        </DeshCardContent>
        <DeshActions>
          <DeshActionsPrice variant="text">{item.price}</DeshActionsPrice>
          {/* <DeshActionsAddToCard size="small">add to card</DeshActionsAddToCard> */}
        </DeshActions>

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
      </DeshCard>
    </DeshContainer>
  );
}
