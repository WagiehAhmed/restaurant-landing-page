import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import { colors } from "../themes";

export const Container = styled(Box)(() => ({
  backgroundColor: "#EEE",
}));
export const DeshesContainer = styled(Grid)(({ matches }) => ({
  padding: matches ? "0px" : "0px 100px",
  // backgroundColor:"red",
}));
export const DeshContainer = styled(Grid)(({ matches }) => ({
  padding: matches ? "10px" : "20px",
  // backgroundColor:"green",
}));
export const DeshCard = styled(Card)(() => ({
  position: "relative",
  // border: "5px solid red",
  maxWidth: "400px",
  margin: "0px auto",


  "&:hover": {
    ".addToCard":{
      right: "10px",
    },
    ".addToFavorite":{
      left: "10px",
    }
  },
}));
export const DeshCardMedia = styled(CardMedia)(({ image, title }) => ({
  height: "200px",
  image: image,
  title: title,
}));
export const DeshCardContent = styled(CardContent)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));
export const DeshName = styled(Typography)(() => ({
  textTransform: "capitalize",
  color: `${colors.primaryText}`,
}));

export const DeshActions = styled(CardActions)(() => ({
  justifyContent: "center",
}));

export const DeshActionsPrice = styled(Button)(() => ({
  color: `${colors.green}`,
  width: "100px",
  fontWeight: "bolder",
  "&:hover": {
    backgroundColor: `${colors.iconContainer}`,
  },
}));
export const DeshActionsAddToCard = styled(Button)(() => ({
  backgroundColor: `${colors.primaryText}`,
  textTransform: "capitalize",
  width: "fit-content",
  color: `${colors.white}`,

  "&:hover": {
    backgroundColor: `${colors.green}`,
    letterSpacing: "1px",
  },
}));

