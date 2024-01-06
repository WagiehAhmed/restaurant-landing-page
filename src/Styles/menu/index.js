import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
    styled,
  } from "@mui/material";
  import { colors } from "../themes";

  export const Container = styled(Box)(() => ({
    backgroundColor: "#EEE",
  }));
  
  export const MenuContainer = styled(Grid)(({ matches }) => ({
    padding: matches ? "0px" : "0px 100px",
  }));

  export const MenuItemContainer = styled(Grid)(({ matches }) => ({
    padding: matches ? "15px" : "30px",


  }));
  export const MenuItemCard = styled(Card)(() => ({
    padding:"10px",
    maxWidth: "400px",
    margin: "0px auto",
  
  }));
  export const MenuItemCardMedia = styled(CardMedia)(({ image, title }) => ({
    height: "200px",
    image: image,
    title: title,
  }));
  export const MenuItemCardContent = styled(CardContent)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  }));
  
  export const MenuItemName = styled(Typography)(() => ({
    textTransform: "capitalize",
    color: `${colors.primaryText}`,
  }));


  export const MenuItemDescription = styled(Typography)(() => ({
    color: `${colors.secondaryText}`,
    "&:hover":{
    color: `${colors.primaryText}`,
    }
  }));

  export const MenuItemActions = styled(CardActions)(() => ({
    justifyContent:"space-evenly",
  }));
  
  export const MenuItemActionsPrice = styled(Button)(() => ({
    color: `${colors.green}`,
    width: "100px",
    fontWeight: "bolder",
    "&:hover": {
      backgroundColor: `${colors.iconContainer}`,
    },
  }));
  export const MenuItemActionsAddToCard = styled(Button)(() => ({
    backgroundColor:  `${colors.primaryText}`,
    textTransform: "capitalize",
    width:"fit-content",
    color:  `${colors.white}`,
    "&:hover": {
      backgroundColor:  `${colors.green}`,
      letterSpacing: "1px"
    },
  }));
  