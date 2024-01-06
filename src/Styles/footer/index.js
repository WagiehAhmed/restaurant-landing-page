import {
  Box,
  Grid,
  Link,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { colors } from "../themes";
export const Container = styled(Box)(() => ({
  backgroundColor: "white",
}));
export const FooterContainer = styled(Grid)(({ matches }) => ({
  padding: matches ? "0px 0px" : "0px 100px",
  // border: "2px solid red",
}));
export const FooterItemContainer = styled(Grid)(({ matches }) => ({
  padding: matches ? "15px" : "30px",
  // border: "2px solid green",
}));
export const SectionItemName = styled(Typography)(() => ({
  textTransform: "capitalize",
  fontWeight: "bold",
  color: `${colors.primaryText}`,
}));
export const FooterItemPaper = styled(Paper)(({ matches }) => ({
  padding: "10px",
  width: "fit-content",
  margin:matches?"0px 0px":"0px auto",
  // border: "2px solid red",
}));
export const SectionItemDetails = styled(Link)(() => ({
  textTransform: "capitalize",
  textDecoration: "none",
  display:"block",
  color: `${colors.secondaryText}`,
  marginLeft: "5px",
  "&:hover":{
    cursor:"pointer",
    textDecoration: "underline",
}
}));

export const CopyRightContainer = styled(Stack)(() => ({
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
}));

export const CopyRight = styled(Typography)(() => ({
  textTransform: "capitalize",
  margin: "1px",
  textAlign: "center",
  display: "inline-block",
  color: `${colors.primaryText}`,
}));

export const By = styled(Typography)(() => ({
  textTransform: "capitalize",
  fontWeight: "bold",
  textAlign: "center",
  display: "inline-block",
  paddingLeft: "5px",
  color: `${colors.green}`,
}));
