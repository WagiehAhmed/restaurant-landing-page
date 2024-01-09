import React from "react";
import { theme } from "../../Styles/themes";
import { IconContainer, MenuItemActions, MenuItemActionsAddToCard, MenuItemActionsPrice, MenuItemCard, MenuItemCardContent, MenuItemCardMedia, MenuItemContainer, MenuItemDescription, MenuItemName } from "../../Styles/menu";
import { Rating, useMediaQuery } from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";




export default function MenuItem({item}) {
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <MenuItemContainer item xs={4} matches={matches}>
      <MenuItemCard elevation={5}>
        <MenuItemCardMedia image={item.image} title="desh media" />
        <MenuItemCardContent>
          <Rating defaultValue={2} precision={1} />
          <MenuItemName gutterBottom variant="h5" component="div">
            {item.name}
          </MenuItemName>
          <MenuItemDescription variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </MenuItemDescription>
        </MenuItemCardContent>
        <MenuItemActions>
          {/* <MenuItemActionsAddToCard size="small">add to card</MenuItemActionsAddToCard> */}
          <MenuItemActionsPrice variant="text">{item.price}</MenuItemActionsPrice>
        </MenuItemActions>


        <IconContainer className="addToCard">
              <ShoppingCartIcon />
          </IconContainer>
      </MenuItemCard>
    </MenuItemContainer>
  );
}
