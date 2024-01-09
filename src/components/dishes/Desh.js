import React from "react";
import { DeshActions, DeshActionsAddToCard, DeshActionsPrice, DeshCard, DeshCardMedia, DeshContainer, DeshName ,IconContainer} from "../../Styles/deshes";
import {
  Rating,
} from "@mui/material";
import { DeshCardContent } from './../../Styles/deshes/index';



import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";













export default function Desh({item,matches}) {
 
  return (
    <DeshContainer item xs={4} matches={matches}>
      <DeshCard elevation={5}>
        <DeshCardMedia image={item.image} title="desh media"/>
        <DeshCardContent>
          <DeshName gutterBottom variant="h5" component="div">
            {item.name}
          </DeshName>
          <Rating defaultValue={2} precision={1}/>
        </DeshCardContent>
        <DeshActions>
          <DeshActionsPrice variant="text">{item.price}</DeshActionsPrice>
          <DeshActionsAddToCard size="small">add to card</DeshActionsAddToCard>
        </DeshActions>

        <IconContainer matches={true} className="addToCard">
              <ShoppingCartIcon />
          </IconContainer>






      </DeshCard>
    </DeshContainer>
  );
}


