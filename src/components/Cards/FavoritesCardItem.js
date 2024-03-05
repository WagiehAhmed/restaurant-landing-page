import React, { useState } from "react";
import {
  CardItemContainer,
  CardItemContent,
  CardItemImage,
  CustomBox,
  CustomTypography,
  IconContainer,
  Image,
} from "../../Styles/appbar";
import { MenuItem, Stack } from "@mui/material";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ClearIcon from "@mui/icons-material/Clear";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useStoreContext } from "../../hooks/useStoreContext";

const FavoritesCardItem = ({ item }) => {
  //store
  const { dispatch } = useStoreContext();

  //remove function
  const removeFromCard = (item) => {
    dispatch({ type: "deleteFromFavorites", payload: item });
  };

  //remove function
  const addToCard = (item) => {
    dispatch({ type: "addToOreders", payload: {...item,count:1} });
  };
  
  return (
      <CardItemContainer className="favorite-item" elevation={5}>
        <IconContainer
          className="clear-icon"
          onClick={() => {
            removeFromCard(item);
          }}
        >
          <ClearIcon />
        </IconContainer>
        <IconContainer
          className="add-icon"
          onClick={() => {
            addToCard(item);
          }}
        >
          <AddShoppingCartIcon />
        </IconContainer>

        <CardItemImage>
          <Image src={item.image} />
        </CardItemImage>
        <CardItemContent>
          <CustomTypography className="item-name">{item.name}</CustomTypography>
          <CustomTypography className="item-price">
            {item.price}
          </CustomTypography>
        </CardItemContent>
      </CardItemContainer>
  );
};

export default FavoritesCardItem;
