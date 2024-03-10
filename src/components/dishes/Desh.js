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
  AddToCardIconContainer,
  AddToFavoriteIconContainer,
  DeshCardContent,
} from "../../Styles";
import { Rating } from "@mui/material";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useStoreContext } from "../../hooks/useStoreContext";

export default function Desh({ item, matches }) {
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
          <DeshActionsAddToCard
            onClick={() => {
              addToFavorites(item);
            }}
          >
            add to card
          </DeshActionsAddToCard>
            <DeshActionsPrice variant="text">{item.price}$</DeshActionsPrice>
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
