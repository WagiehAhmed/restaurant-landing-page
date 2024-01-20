import {
  AppBar,
  Badge,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Input,
  InputAdornment,
  ListItem,
  ListItemButton,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { colors, theme } from "../../Styles/themes";
import {
  AppBarContent,
  DrawerList,
  IconContainer,
  LogoActions,
  LogoTitleContainer,
  MyDrawer,
  NavActions,
  NavItem,
  NavItems,
} from "../../Styles/appbar";
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});




export default function Appbar({ scrollTo }) {
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");



  // useEffect(()=>(console.log(active)),[active])
  //   open and close drawer handlers
  const openDrawer = () => {
    setOpen(!open);
  };
  const closeDrawer = () => {
    setOpen(!open);
  };

    // open and close dialog handlers
  const [openDialog, setOpenDialog] = useState(false);
  const openSearchDialog = () => {
    setOpenDialog(!openDialog);
  };
  const closeSearchDialog = () => {
    setOpenDialog(!openDialog);
  };







  // search query
  const [searchQuery, setSearchQuery] = useState("");
  const searchQueryChangeHandler = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <AppBar
      sx={{
        background: "white",
        color: "#293635",
        position: "fixed",
        right: 0,
        top: 0,
        zIndex: 2,
      }}
    >
      <AppBarContent>
        <IconContainer
          matches={matches}
          onClick={() => {
            openDrawer();
          }}
        >
          <MenuIcon />
        </IconContainer>
        <LogoActions
          onClick={() =>
            scrollTo(0)
          }
        >
          <IconButton color="inherit">
            <RestaurantIcon color="success" />
          </IconButton>
          <LogoTitleContainer variant="h5">resto.</LogoTitleContainer>
        </LogoActions>
        <NavItems matches={matches}>
          {["home", "dishes", "aboutus", "menu", "reviews", "order"].map(
            (item, index) => (
              <NavItem
                key={item}
                sx={{backgroundColor:active===item?`${colors.green}`:"transparent",color:active===item?`${colors.white}`:`${colors.primaryText}`}}
                onClick={() => {
                  scrollTo(index)
                  setActive(item);
                }}>
                {item}
              </NavItem>
            )
          )}
          
        </NavItems>
        <NavActions>
          <IconContainer matches={true} onClick={openSearchDialog}>
            <SearchIcon />
          </IconContainer>
          <IconContainer matches={true}>
            <FavoriteIcon />
          </IconContainer>
          <IconContainer matches={true}>
            <Badge badgeContent={0} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconContainer>
        </NavActions>
        <MyDrawer
          variant="temporary"
          open={open}
          onClose={() => {
            closeDrawer();
          }}
        >
          <Toolbar />

          <DrawerList>
            {["home", "dishes", "aboutus", "menu", "reviews", "order"].map(
              (item, index) => (
                <ListItem key={item} sx={{padding:"0px"}}>
                  <ListItemButton 
                   sx={{
                    textTransform: "capitalize", 
                    // width:'150px',
                    backgroundColor:active===item?`${colors.green}`:"transparent",
                    color:active===item?`${colors.white}`:`${colors.primaryText}`,
                    "&:hover":{
                      backgroundColor:active===item?`${colors.green}`:"",
                    }
                  }}
                 onClick={() => {
                  scrollTo(index)
                    setActive(item);
                      closeDrawer();
                    }}
                  >
                    {item}
                  </ListItemButton>
                </ListItem>
              )
            )}
          </DrawerList>
        </MyDrawer>

        {/* search dialog */}
      

        <Dialog
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={closeSearchDialog}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeSearchDialog}>Disagree</Button>
          <Button onClick={closeSearchDialog}>Agree</Button>
        </DialogActions>
      </Dialog>




      
      </AppBarContent>
    </AppBar>
  );
}
