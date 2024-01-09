import {
  Button,
  Drawer,
  IconButton,
  List,
  Stack,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";

import { colors } from "../themes";

export const AppBarContent = styled(Toolbar)(() => ({
  position: "relative",
  flexDirection: "row",
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
  color: `${colors.primaryText}`,
  width: "40px",
  height: "40px",
  display: matches ? "block" : "none",
  backgroundColor: `${colors.iconContainer}`,
  margin: "1px",
  "&:hover": {
    backgroundColor: `${colors.green}`,
    color: `${colors.white}`,
  },
}));

