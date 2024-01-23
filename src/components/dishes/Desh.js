import React, { useEffect } from "react";
import { DeshActions, DeshActionsAddToCard, DeshActionsPrice, DeshCard, DeshCardMedia, DeshContainer, DeshName ,IconContainer} from "../../Styles/deshes";
import {
  Rating,
} from "@mui/material";
import { DeshCardContent } from './../../Styles/deshes/index';


import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { AddToCardIconContainer, AddToFavoriteIconContainer } from "../../Styles/common";
import { GetStore } from "../../contexts/StoreProvider";








export default function Desh({item,matches}) {
 
  const {state,dispatch} = GetStore();

  // useEffect(()=>{
  //   console.log(state)
  // },[state])

  const addToOrders = (item) => {
      dispatch({type:"addToOreders",payload:item})
  }
  const addToFavorites = (item) => {
      dispatch({type:"addToFavorites",payload:item})
  }

  return (
    <DeshContainer item xs={4} matches={matches}>
      <DeshCard elevation={5}>
        <DeshCardMedia image={item.image} title="desh media"/>
        <DeshCardContent>
          <DeshName gutterBottom variant="h5" component="div">
            {item.name}
          </DeshName>
          <Rating value={item.rating} precision={1}/>
        </DeshCardContent>
        <DeshActions >
          <DeshActionsPrice variant="text">{item.price}</DeshActionsPrice>
          {/* <DeshActionsAddToCard size="small">add to card</DeshActionsAddToCard> */}
        </DeshActions>

        <AddToCardIconContainer className="addToCard" onClick={()=>{addToOrders(item)}}>
              <AddShoppingCartIcon />
          </AddToCardIconContainer>

        <AddToFavoriteIconContainer className="addToFavorite" onClick={()=>{addToFavorites(item)}}>
              <FavoriteBorderIcon/>
          </AddToFavoriteIconContainer>
      </DeshCard>
    </DeshContainer>
  );
}


