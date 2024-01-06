import { Box, Typography, styled } from "@mui/material";
import { colors } from "../themes";

export const TitlesContainer = styled(Box)(() => ({
    padding: "15px 0px",
    // border:"5px solid red"
      
  }));
  
  export const SectionTitle = styled(Typography)(() => ({
    color: `${colors.green}`,
    fontSize: "1.5em",
    fontWeight: "bold",
    textTransform: "capitalize",
    textAlign:"center"
  }));
  
  export const SectionSubTitle = styled(Typography)(() => ({
    color: `${colors.primaryText}`,
    fontSize: "2em",
    textTransform: "capitalize",
    textAlign:"center"
  }));