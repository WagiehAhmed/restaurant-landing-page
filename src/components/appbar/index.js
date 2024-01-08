import {
  AppBar,
  Badge,
  Dialog,
  DialogActions,
  DialogContent,
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


export default function Appbar({ reffs }) {
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

  //   open and close drawer handlers
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
            reffs[0].current.scrollIntoView({
              behavior: "smooth",
              block: "center",
            })
          }
        >
          <IconButton color="inherit">
            <RestaurantIcon color="success" />
          </IconButton>
          <LogoTitleContainer variant="h5">resto.1</LogoTitleContainer>
        </LogoActions>
        <NavItems matches={matches}>
          {["home", "dishes", "aboutus", "menu", "reviews", "order"].map(
            (item, index) => (
              <NavItem
                key={item}
                sx={{backgroundColor:active===item?`${colors.green}`:"transparent",color:active===item?`${colors.white}`:`${colors.primaryText}`}}
                onClick={() => {
                  reffs[index].current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
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
            <Badge badgeContent={4} color="secondary">
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
                      reffs[index].current.scrollIntoView({
                        behavior: "smooth",
                        block: "end",
                      });
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
          onClose={closeSearchDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          sx={{
            position: "fixed",
            top: "0px",
            bgcolor: "rgba(0,0,0,0.5)",
          }}
        >
          <DialogContent
            sx={{
              width: { sm: "500px", md: "500px" },
              padding: "5px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Input
              sx={{
                padding: "10px",
                flexGrow: 1,
              }}
              onChange={searchQueryChangeHandler}
              placeholder="Search"
              variant="outlined"
              value={searchQuery}
              endAdornment={
                <InputAdornment position="end">
                  {searchQuery ? (
                    <ClearIcon
                      onClick={() => setSearchQuery("")}
                      sx={{ cursor: "pointer" }}
                    />
                  ) : (
                    <SearchIcon />
                  )}
                </InputAdornment>
              }
            />

            <DialogActions sx={{ display: "inline-block" }}>
              <IconContainer matches={true} onClick={openSearchDialog}>
                <SearchIcon />
              </IconContainer>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </AppBarContent>
    </AppBar>
  );
}
