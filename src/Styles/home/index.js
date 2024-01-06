import { Box, Button, Stack, Typography, styled } from "@mui/material";
import { colors } from "../themes";


export const HomeContainer = styled(Box)(()=>({
    // border:"1px solid red",
    cursor:"pointer",
    paddingBottom:"30px ",
}));
export const HomeItem = styled(Stack)(({matches})=>({
    // border:"2px solid purple",
    flexDirection:matches?"column":"row",
    justifyContent:"center",
    alignItems:"center",   
    margin:"0px auto", 
}));
export const HomeItemContent = styled(Stack)(()=>({
    // border:"2px solid yellow",
    maxWidth:'700px',                                                   //
    flexDirection:"column",
    justifyContent:"flex-start",
    padding:"30px",
    height:"100%",
}));
export const HomeItemTitle = styled(Typography)(()=>({
    color: `${colors.green}`,
    fontSize:"1.5em",
    textTransform:"capitalize",
}));
export const HomeItemDishTitle = styled(Typography)(({matches})=>({
    color: `${colors.primaryText}`,
    fontSize:matches?"3em":"4em",
    fontWeight:"bold",
    textTransform:"capitalize",
}));
export const HomeItemDishDescription = styled(Typography)(()=>({
    color: `${colors.secondaryText}`,
    textTransform:"capitalize",
    lineHeight:"30px",
    "&:hover":{
        color: `${colors.primaryText}`,
    }
}));
export const HomeItemOrderNow = styled(Button)(()=>({
    backgroundColor: `${colors.primaryText}`,           
    textTransform:"capitalize",
    marginTop:"20px",
    width:"fit-content",
    color:"white",
    "&:hover":{
        backgroundColor: `${colors.green}`,
        letterSpacing: "1px"
    }
}));
export const HomeItemImageContaimer = styled(Box)(({matches})=>({
    maxWidth:matches?"100%":"800px",
    minWidth:"300px",
    // border:"2px solid red",
    // maxHeight:matches?"100%":"500px",
    // flexGrow:1,
}));
export const HomeItemImage = styled("img")(({src})=>({
    src:`url(${src})`,
    width:"100%",
    height:"100%",
    boxSizing:'border-box',
    // maxWidth:matches?"100%":"1000px",
    // maxHeight:matches?"100%":"600px",
    // border:"2px solid green",
    // flexGrow:1,
}));