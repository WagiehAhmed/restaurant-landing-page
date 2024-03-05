import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Drawer,
  IconButton,
  List,
  Paper,
  Stack,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";

import { colors } from "../themes";

export const AppBarContent = styled(Toolbar)(() => ({
  position: "relative",
  flexDirection: "row",
  paddingTop: "5px",
  justifyContent: "space-between",
}));
export const LogoActions = styled(Stack)(() => ({
  // border: "2px solid red",
  cursor: "pointer",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  flexGrow: 1,
}));
export const LogoTitleContainer = styled(Typography)(() => ({
  color: `${colors.primaryText}`,
  textTransform: "capitalize",
  fontWeight: "bold",
}));

export const NavItems = styled(Stack)(({ matches }) => ({
  // border: "2px solid red",
  width: "100%",
  flexDirection: "row",
  justifyContent: "center",
  display: matches ? "none" : "flex",
}));
export const NavItem = styled(Button)(() => ({
  textTransform: "capitalize",
  color: `${colors.secondaryText}`,
  margin: 1,
  "&:hover": {
    color: `${colors.white}`,
    backgroundColor: `${colors.green}`,
  },
}));
export const NavActions = styled(Stack)(() => ({
  // border: "2px solid red",
  flexDirection: "row",
  justifyContent: "center",
}));

export const MyDrawer = styled(Drawer)(() => ({
  zIndex: 1,
}));

export const DrawerList = styled(List)(() => ({
  width:"150px",
  padding: "0px",
}));



export const IconContainer = styled(IconButton)(({ matches }) => ({
  boxSizing:"border-box",
  marginInline: "3px",
  color: `${colors.primaryText}`,
  backgroundColor: `${colors.iconContainer}`,
  display: "inline-flex",
  
  
  "&.menu-icon": {
    display: matches ? "inline-flex":"none",
  },
  
  "&.clear-icon": {
    backgroundColor: "white",
    position:"absolute",
    top: "0px",
    right: "0px",
  },
  
  "&.add-icon": {
    backgroundColor: "white",
    position:"absolute",
    bottom: "0px",
    right: "0px",
  },
  "&.increment,&.decrement": {
    backgroundColor: "white",
  },
  "&:hover": {
    backgroundColor: `${colors.green}`,
    color: `${colors.white}`,
  },
}));

// card item section
export const CardItemContainer = styled(Paper)(()=>({
  position:"relative",
  display: "flex",
  width:"300px",
  margin:"10px",
  flexDirection:"row",
  justifyContent:"center",
  backgroundColor:"white",
  height:"115px",
  "&.favorite-item":{
    height:"80px",
  }
  // border:"2px solid green",
}))

export const CardItemImage = styled(Box)(()=>({
  width:"30%",
  // border:"2px solid green",
}))
export const Image = styled("img")(({src})=>({
  src:src,
  width:"100%",
  height:"100%",
  objectFit:"cover",
}))
export const CardItemContent = styled(Stack)(()=>({
  width:"70%",
  // border:"2px solid blue",
}))

export const CustomTypography = styled(Typography)(()=>({
  padding:"5px",
  color:"red",
  "&.item-name":{
     color: `${colors.primaryText}`,
  },
  "&.item-price":{
     color: `${colors.green}`,
  },
}))
export const CustomBox = styled(Box)(()=>({
  padding:"5px",
  color:"red"
}))


// 
export const SubmitOrder = styled(Button)(() => ({
  backgroundColor: `${colors.primaryText}`,
  textTransform: "capitalize",
  margin: "10px auto",
  width: "fit-content",
  color: `${colors.white}`,
  "&:hover": {
    backgroundColor: `${colors.green}`,
  },
}));
