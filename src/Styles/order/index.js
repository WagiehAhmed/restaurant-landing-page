import {
  Box,
  Button,
  FormControl,
  TextField,
  styled,
} from "@mui/material";
import { colors } from "../themes";

export const OrederContainer = styled(Box)(() => ({
  backgroundColor: "#EEE",
  paddingBottom: "30px",
}));


export const OrderContentItems = styled(FormControl)(() => ({
  // border: "2px solid green",
  flexDirection: "row",
  alignItems: "center",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  padding: "10px 0px",
}));
export const OrderContentItem = styled(TextField)(({ matches }) => ({
  width: matches ? "95%" : "45%",
  boxSizing: "border-box",
  margin: "5px",
  color: `${colors.green}`,
  backgroundColor: `${colors.iconContainer}`,
}));

export const OrderNow = styled(Button)(() => ({
  backgroundColor: `${colors.primaryText}`,
  textTransform: "capitalize",
  margin: "10px 10px 0px 10px",
  width: "fit-content",
  color: `${colors.white}`,
  "&:hover": {
    backgroundColor: `${colors.green}`,
    letterSpacing: "1px",
  },
}));
