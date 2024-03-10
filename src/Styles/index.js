import { Box, Button, Stack, Typography, styled ,Paper,Grid,CardMedia,CardContent,Link,Toolbar,Drawer,Avatar,IconButton,List,CardActions,TextField,Card,FormControl} from "@mui/material";
import { colors } from "./themes";
import { CustomAnimationBoxAnimation } from "../animations";



// about-----------------------------------------------------------------------------------------------------------------------------------------------------------------//

export const AboutItem = styled(Stack)(({ matches }) => ({
  flexDirection: matches ? "column" : "row",
  justifyContent: "center",
  // alignItems: "center",
  margin: "15px auto",
  // border:"2px solid purple",
}));
export const AboutItemContent = styled(Stack)(({ matches }) => ({
  flexDirection: "column",
  maxWidth: matches ? "100%" : "50%",
  justifyContent: "center",
  padding: "30px 20px",
  // border:"2px solid green",
}));
export const AboutItemTitle = styled(Typography)(({ matches }) => ({
  color: `${colors.primaryText}`,
  fontSize: matches ? "2em" : "4em",
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
  width: "fit-content",
  color: "white",
  "&:hover": {
    backgroundColor: `${colors.green}`,
    letterSpacing: "1px",
  },
}));
export const AboutItemOptions = styled(Stack)(() => ({
  color: "#293635",
  // border: "2px solid red",
  // maxWidth: "fit-content",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-evebnly",
  alignItems: "center",
  margin: "15px 0px",
  padding: "5px 0px",
}));

export const AboutItemOption = styled(Button)(() => ({
  color: `${colors.primaryText}`,
  flexGrow: 1,
  maxWidth: "200px",
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

export const AboutItemImageContaimer = styled(Box)(({ matches }) => ({
  maxWidth: matches ? "70%" : "30%",
  alignSelf: "center",
  // border:"2px solid red",
  // maxHeight:matches?"100%":"500px",
  // flexGrow:1,
}));
export const AboutItemImage = styled("img")(({ src }) => ({
  src: `url(${src})`,
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  // maxWidth:matches?"100%":"1000px",
  // maxHeight:matches?"100%":"600px",
  // border:"2px solid green",
  // flexGrow:1,
}));

// appbar----------------------------------------------------------------------------------------------------------------------------------------------------------------//

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
  width: "150px",
  padding: "0px",
}));

export const IconContainer = styled(IconButton)(({ matches }) => ({
  boxSizing: "border-box",
  marginInline: "3px",
  color: `${colors.primaryText}`,
  backgroundColor: `${colors.iconContainer}`,
  display: "inline-flex",

  "&.menu-icon": {
    display: matches ? "inline-flex" : "none",
  },

  "&.clear-icon": {
    backgroundColor: "white",
    position: "absolute",
    top: "0px",
    right: "0px",
  },

  "&.add-icon": {
    backgroundColor: "white",
    position: "absolute",
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
export const CardItemContainer = styled(Paper)(() => ({
  position: "relative",
  display: "flex",
  width: "300px",
  margin: "10px",
  flexDirection: "row",
  justifyContent: "center",
  backgroundColor: "white",
  height: "115px",
  "&.favorite-item": {
    height: "80px",
  },
  // border:"2px solid green",
}));

export const CardItemImage = styled(Box)(() => ({
  width: "30%",
  // border:"2px solid green",
}));
export const Image = styled("img")(({ src }) => ({
  src: src,
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));
export const CardItemContent = styled(Stack)(() => ({
  width: "70%",
  // border:"2px solid blue",
}));

export const CustomTypography = styled(Typography)(() => ({
  padding: "5px",
  color: "red",
  "&.item-name": {
    color: `${colors.primaryText}`,
  },
  "&.item-price": {
    color: `${colors.green}`,
  },
}));
export const CustomBox = styled(Box)(() => ({
  padding: "5px",
  color: "red",
}));

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

// dashes----------------------------------------------------------------------------------------------------------------------------------------------------------------//

export const DeshesContainer = styled(Grid)(({ matches }) => ({
  padding: matches ? "0px" : "0px 100px",
  // backgroundColor:"red",
}));
export const DeshContainer = styled(Grid)(({ matches }) => ({
  padding: matches ? "10px" : "20px",
  // backgroundColor:"green",
}));
export const DeshCard = styled(Card)(() => ({
  position: "relative",
  // border: "5px solid red",
  maxWidth: "400px",
  margin: "0px auto",

  "&:hover": {
    ".addToCard": {
      right: "10px",
    },
    ".addToFavorite": {
      left: "10px",
    },
  },
}));
export const DeshCardMedia = styled(CardMedia)(({ image, title }) => ({
  height: "200px",
  image: image,
  title: title,
}));
export const DeshCardContent = styled(CardContent)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));
export const DeshName = styled(Typography)(() => ({
  textTransform: "capitalize",
  color: `${colors.primaryText}`,
}));

export const DeshActions = styled(CardActions)(() => ({
  justifyContent: "space-between",
}));

export const DeshActionsPrice = styled(Button)(() => ({
  color: `${colors.green}`,
  width: "100px",
  fontWeight: "bolder",
  "&:hover": {
    backgroundColor: `${colors.iconContainer}`,
  },
}));
export const DeshActionsAddToCard = styled(Button)(() => ({
  backgroundColor: `${colors.primaryText}`,
  textTransform: "capitalize",
  width: "fit-content",
  color: `${colors.white}`,

  "&:hover": {
    backgroundColor: `${colors.green}`,
    letterSpacing: "1px",
  },
}));

// footer----------------------------------------------------------------------------------------------------------------------------------------------------------------//

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
  margin: matches ? "0px 0px" : "0px auto",
  // border: "2px solid red",
}));
export const SectionItemDetails = styled(Link)(() => ({
  textTransform: "capitalize",
  textDecoration: "none",
  display: "block",
  color: `${colors.secondaryText}`,
  marginLeft: "5px",
  "&:hover": {
    cursor: "pointer",
    textDecoration: "underline",
  },
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

// home----------------------------------------------------------------------------------------------------------------------------------------------------------------//

export const HomeContainer = styled(Box)(() => ({
  // border:"1px solid red",
  cursor: "pointer",
  paddingBottom: "30px ",
}));
export const HomeItem = styled(Stack)(({ matches }) => ({
  flexDirection: matches ? "column" : "row",
  justifyContent: "center",
  margin: "0px auto",
  // border:"2px solid purple",
}));
export const HomeItemContent = styled(Stack)(({ matches }) => ({
  maxWidth: matches ? "100%" : "50%", //
  flexDirection: "column",
  justifyContent: "center",
  padding: "30px 20px",
  // height:"100%",
  // border:"2px solid green",
}));
export const HomeItemTitle = styled(Typography)(({ matches }) => ({
  color: `${colors.green}`,
  fontSize: matches ? "1.em" : "1.5em",
  textTransform: "capitalize",
}));
export const HomeItemDishTitle = styled(Typography)(({ matches }) => ({
  color: `${colors.primaryText}`,
  fontSize: matches ? "2em" : "4em",
  fontWeight: "bold",
  textTransform: "capitalize",
}));
export const HomeItemDishDescription = styled(Typography)(() => ({
  color: `${colors.secondaryText}`,
  textTransform: "capitalize",
  lineHeight: "30px",
  "&:hover": {
    color: `${colors.primaryText}`,
  },
}));
export const HomeItemOrderNow = styled(Button)(() => ({
  backgroundColor: `${colors.primaryText}`,
  textTransform: "capitalize",
  marginTop: "20px",
  width: "fit-content",
  color: "white",
  "&:hover": {
    backgroundColor: `${colors.green}`,
    letterSpacing: "1px",
  },
}));
export const HomeItemImageContaimer = styled(Box)(({ matches }) => ({
  maxWidth: matches ? "70%" : "30%",
  alignSelf: "center",
  // border:"2px solid red",
  // maxHeight:matches?"100%":"500px",
  // flexGrow:1,
}));
export const HomeItemImage = styled("img")(({ src }) => ({
  src: `url(${src})`,
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  // maxWidth:matches?"100%":"1000px",
  // maxHeight:matches?"100%":"600px",
  // border:"2px solid green",
  // flexGrow:1,
}));

// reviews---------------------------------------------------------------------------------------------------------------------------------------------------------------//

export const ReviewsContainer = styled(Box)(() => ({
  cursor: "pointer",
  backgroundColor: "white",
  paddingBottom: "30px",
}));

export const ReviewItemContainer = styled(Paper)(({ matches }) => ({
  //   border: "2px solid red",
  display: "flex",
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
  "&:hover": {
    color: `${colors.primaryText}`,
  },
}));

// order-----------------------------------------------------------------------------------------------------------------------------------------------------------------//

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

// menu------------------------------------------------------------------------------------------------------------------------------------------------------------------//

export const MenuContainer = styled(Grid)(({ matches }) => ({
  padding: matches ? "0px" : "0px 100px",
  // backgroundColor: "red",
}));

export const MenuItemContainer = styled(Grid)(({ matches }) => ({
  padding: matches ? "10px" : "20px",
  // backgroundColor: "green",
}));
export const MenuItemCard = styled(Card)(() => ({
  padding: "10px",
  maxWidth: "400px",
  margin: "0px auto",
  position: "relative",
  // border: "5px solid red",

  "&:hover": {
    ".addToCard": {
      right: "15px",
    },
    ".addToFavorite": {
      left: "15px",
    },
  },
}));
export const MenuItemCardMedia = styled(CardMedia)(({ image, title }) => ({
  height: "200px",
  image: image,
  title: title,
}));
export const MenuItemCardContent = styled(CardContent)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
}));

export const MenuItemName = styled(Typography)(() => ({
  textTransform: "capitalize",
  color: `${colors.primaryText}`,
}));

export const MenuItemDescription = styled(Typography)(() => ({
  color: `${colors.secondaryText}`,
  "&:hover": {
    color: `${colors.primaryText}`,
  },
}));

export const MenuItemActions = styled(CardActions)(() => ({
  justifyContent: "space-between",
}));

export const MenuItemActionsPrice = styled(Button)(() => ({
  color: `${colors.green}`,
  width: "100px",
  fontWeight: "bolder",
  "&:hover": {
    backgroundColor: `${colors.iconContainer}`,
  },
}));
export const MenuItemActionsAddToCard = styled(Button)(() => ({
  backgroundColor: `${colors.primaryText}`,
  textTransform: "capitalize",
  width: "fit-content",
  color: `${colors.white}`,
  "&:hover": {
    backgroundColor: `${colors.green}`,
    letterSpacing: "1px",
  },
}));

// export const IconContainer = styled(IconButton)(() => ({
//   position: "absolute",
//   top: "15px",
//   right: "-50px",
//   width: "45px",
//   height: "45px",
//   transition: "0.5s ease",

//   backgroundColor: `${colors.iconContainer}`,
//   color: `${colors.primaryText}`,
//   "&:hover": {
//     backgroundColor: `${colors.green}`,
//     color: `${colors.white}`,
//   },
// }));















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



