import React, { useEffect, useState } from "react";
import {
  CardItemContainer,
  CardItemContent,
  CardItemImage,
  CustomBox,
  CustomTypography,
  IconContainer,
  Image,
} from "../../Styles";
import { MenuItem, Stack } from "@mui/material";

import ClearIcon from "@mui/icons-material/Clear";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useStoreContext } from "../../hooks/useStoreContext";

const OrdersCardItem = ({ item, setTotalCount }) => {
  //store
  const { dispatch } = useStoreContext();

  //increment function
  const increment = () => {
    item.count += 1;
    setTotalCount((pre) => pre + 1);
  };

  //decrement function
  const decrement = () => {
    if (item.count > 1) {
      item.count -= 1;
      setTotalCount((pre) => pre > 0 && pre - 1);
    }
  };

  //remove function
  const removeFromCard = (item) => {
    item.count = 1;
    dispatch({ type: "deleteFromOrders", payload: item });
  };

  return (
    <CardItemContainer elevation={5}>
      <IconContainer
        className="clear-icon"
        onClick={() => {
          removeFromCard(item);
        }}
      >
        <ClearIcon />
      </IconContainer>

      <CardItemImage>
        <Image src={item.image} />
      </CardItemImage>
      <CardItemContent>
        <CustomTypography className="item-name">{item.name}</CustomTypography>
        <CustomTypography className="item-price">{item.price}$</CustomTypography>
        <Stack direction="row" justifyContent="flex-start" alignItems="center">
          <IconContainer
            className="decrement"
            onClick={() => {
              decrement();
            }}
          >
            <RemoveIcon />
          </IconContainer>

          {item.count}

          <IconContainer
            className="increment"
            onClick={() => {
              increment();
            }}
          >
            <AddIcon />
          </IconContainer>
        </Stack>
      </CardItemContent>
    </CardItemContainer>
  );
};

export default OrdersCardItem;
