import { Box, IconButton, Typography, styled } from "@mui/material";
import { colors } from "../themes";
import { CustomAnimationBoxAnimation } from "../../animations";

export const TitlesContainer = styled(Box)(() => ({
  padding: "15px 0px",
  // border:"5px solid red"
}));

export const SectionTitle = styled(Typography)(() => ({
  color: `${colors.green}`,
  fontSize: "1.5em",
  fontWeight: "bold",
  textTransform: "capitalize",
  textAlign: "center",
}));

export const SectionSubTitle = styled(Typography)(() => ({
  color: `${colors.primaryText}`,
  fontSize: "2em",
  textTransform: "capitalize",
  textAlign: "center",
}));


export const CustomAnimationBox = styled(Box)(() => ({
  width: "100%",
  height: "5px",
  position: "fixed",
  zIndex: 10,
  background: `linear-gradient(45deg, ${colors.primaryText}, ${colors.green})`,
  transformOrigin: "top left",
  transform: "scaleX(0)",

  animation: `${CustomAnimationBoxAnimation} 4s linear`,
  animationFillMode: "backwards",
  animationTimeline: "scroll(y)",
}));



export const AddToCardIconContainer = styled(IconButton)(() => ({
  position: "absolute",
  top: "15px",
  right: "-50px",
  width: "45px",
  height: "45px",
  transition:"0.5s ease",
  backgroundColor: `${colors.iconContainer}`,
  color: `${colors.primaryText}`,

  "&:hover": {
    backgroundColor: `${colors.green}`,
    color: `${colors.white}`,
  },
  "&.added": {
    backgroundColor: `${colors.green}`,
    color: `${colors.white}`,
  },
}));

export const AddToFavoriteIconContainer = styled(IconButton)(() => ({
  position: "absolute",
  top: "15px",
  left: "-50px",
  width: "45px",
  height: "45px",
  transition:"0.5s ease",
  backgroundColor: `${colors.iconContainer}`,
  color: `${colors.primaryText}`,

  "&:hover": {
    backgroundColor: `${colors.green}`,
    color: `${colors.white}`,
  },

  "&.added": {
    backgroundColor: `${colors.green}`,
    color: `${colors.white}`,
  },
}));



