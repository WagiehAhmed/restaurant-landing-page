import { Box, Button, Stack, Typography, styled } from "@mui/material";

import { colors } from "../themes";

export const Container = styled(Box)(() => ({
  backgroundColor: "white",
}));

export const AboutItem = styled(Stack)(({ matches }) => ({
  // border:"2px solid purple",
  flexDirection: matches ? "column" : "row",
  justifyContent: "center",
  alignItems: "center",
  margin: "15px auto",
}));
export const AboutItemContent = styled(Stack)(() => ({
  // border:"2px solid yellow",
  flexDirection: "column",
  maxWidth: "700px",                                            //
  justifyContent: "center",
  padding: "30px",
}));
export const AboutItemTitle = styled(Typography)(({ matches }) => ({
  color: `${colors.primaryText}`,
  fontSize: matches ? "3em" : "4em",
  fontWeight: "bold",
  textTransform: "capitalize",
}));
export const AboutItemDescription = styled(Typography)(() => ({
  color: `${colors.secondaryText}`,
  textTransform: "capitalize",
  lineHeight: "35px",
  "&:hover": {
    color: `${colors.primaryText}`,
  },
}));
export const AboutItemLearmMore = styled(Button)(() => ({
  backgroundColor: `${colors.primaryText}`,
  textTransform: "capitalize",
  width:"fit-content",
  color: "white",
  "&:hover": {
    backgroundColor: `${colors.green}`,
    letterSpacing: "1px"
  },
}));
export const AboutItemOptions = styled(Stack)(() => ({
  color: "#293635",
  // border: "2px solid red",
  // maxWidth: "fit-content",
  flexDirection: "row",
  flexWrap:'wrap',
  justifyContent: "space-evebnly",
  alignItems: "center",
  margin: "15px 0px",
  padding: "5px 0px",
}));

export const AboutItemOption = styled(Button)(() => ({
  color: `${colors.primaryText}`,
  flexGrow:1,

  "&:hover": {
    color: `${colors.white}`,
    backgroundColor: `${colors.green}`,
  },
  backgroundColor: `${colors.iconContainer}`,
  border: `1px solid ${colors.green}`,
  textTransform: "capitalize",
  fontSize: "1em",
  margin: "5px",
}));


export const AboutItemImageContaimer = styled(Box)(({matches})=>({
  maxWidth:matches?"95%":"800px",
  minWidth:"250px",
  // border:"2px solid red",
  // maxHeight:matches?"100%":"500px",
  // flexGrow:1,
}));
export const AboutItemImage = styled("img")(({ src }) => ({
  src:`url(${src})`,
  width:"100%",
  height:"100%",
  boxSizing:'border-box',
  // maxWidth:matches?"100%":"1000px",
  // maxHeight:matches?"100%":"600px",
  // border:"2px solid green",
  // flexGrow:1,
}));