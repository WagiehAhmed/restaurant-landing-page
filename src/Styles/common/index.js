import { Box, Typography, styled } from "@mui/material";
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
  transform: "scale(0.5,1)",

  animation: `${CustomAnimationBoxAnimation} 4s linear`,
  animationTimeline: "scroll()",
}));
