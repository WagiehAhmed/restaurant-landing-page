import { Avatar, Box, Paper, Stack, Typography, styled } from "@mui/material";
import {colors} from "../themes";

export const ReviewsContainer = styled(Box)(() => ({
  cursor:"pointer",
  backgroundColor: "white",
  paddingBottom: "30px",
}));


export const ReviewItemContainer = styled(Paper)(({ matches }) => ({
//   border: "2px solid red",
  display:"flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: matches ? "250px" : "350px",
  margin: "10px auto",
  // margin: "10px 50px ",
  // minWidth: "300px",
  padding: "5px",
}));


export const ReviewItemHeader = styled(Stack)(() => ({
//   border: "2px solid green",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
}));
export const ReviewItemHeaderImage = styled(Avatar)(({ src }) => ({
//   border: "2px solid red",
  src: `url(${src})`,
  margin: "5px",
  width: "56px",
  height: "56px",
}));
export const ReviewItemHeaderData = styled(Stack)(() => ({
//   border: "2px solid purple",
  flexDirection: "column",
  justifyContent: "center",
  // alignItems:"center",
}));
export const ReviewItemHeaderName = styled(Typography)(() => ({
  color: `${colors.primaryText}`,
  fontSize: "1.5em",
  textTransform: "capitalize",
}));
export const ReviewItemText = styled(Typography)(() => ({
  textTransform: "capitalize",
  padding: "5px",
  lineHeight: "30px",
  color: `${colors.secondaryText}`,
  "&:hover":{
  color: `${colors.primaryText}`,
  }
}));
