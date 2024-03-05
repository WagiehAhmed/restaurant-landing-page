import {
  AppBar,
  Badge,
  IconButton,
  ListItem,
  ListItemButton,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FavoriteIcon from "@mui/icons-material/Favorite";
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

import { Menu, MenuItem } from "@mui/material";

import { useStoreContext } from "../../hooks/useStoreContext";
import OrdersCard from "../Cards/OrdersCard";
import FavoritesCard from "../Cards/FavoritesCard";

export default function Appbar({ scrollTo }) {

  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const { orders, favorites } = useStoreContext();

  //   open and close drawer handlers
  const openDrawer = () => {
    setOpen(!open);
  };
  const closeDrawer = () => {
    setOpen(!open);
  };

  // open and close orders card handlers
  const [ordersAnchorEl, setOrdersAnchorEl] = useState(null);
  const openOrdersCard = (event) => {
    // console.log(orders);
    setOrdersAnchorEl(event.currentTarget);
  };
  const closeOrdersCard = () => {
    setOrdersAnchorEl(null);
  };

  // open and close favorites card handlers
  const [favoritesAnchorEl, setFavoritesAnchorEl] = useState(null);
  const openFavoritesCard = (event) => {
    // console.log(favorites);
    setFavoritesAnchorEl(event.currentTarget);
  };
  const closeFavoritesCard = () => {
    setFavoritesAnchorEl(null);
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
        {/* mobile menu icon */}
        <IconContainer
          matches={matches}
          className="menu-icon"
          onClick={() => {
            openDrawer();
          }}
        >
          <MenuIcon />
        </IconContainer>

        {/* logo */}
        <LogoActions onClick={() => scrollTo(0)}>
          <IconButton color="inherit">
            <RestaurantIcon color="success" />
          </IconButton>
          <LogoTitleContainer variant="h5">resto.</LogoTitleContainer>
        </LogoActions>

        {/* navigation bar */}
        <NavItems matches={matches}>
          {["home", "dishes", "aboutus", "menu", "reviews", "order"].map(
            (item, index) => (
              <NavItem
                key={item}
                sx={{
                  backgroundColor:
                    active === item ? `${colors.green}` : "transparent",
                  color:
                    active === item
                      ? `${colors.white}`
                      : `${colors.primaryText}`,
                }}
                onClick={() => {
                  scrollTo(index);
                  setActive(item);
                }}
              >
                {item}
              </NavItem>
            )
          )}
        </NavItems>

        {/* navigation icons orders and favorites */}
        <NavActions>
          <IconContainer matches={matches} onClick={openFavoritesCard}>
            <Badge badgeContent={favorites.length} color="primary">
              <FavoriteIcon fontSize="medium" />
            </Badge>
          </IconContainer>

          <IconContainer matches={matches} onClick={openOrdersCard}>
            <Badge badgeContent={orders.length} color="primary">
              <ShoppingCartIcon fontSize="medium" />
            </Badge>
          </IconContainer>
        </NavActions>

        {/* mobile drawer */}
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
                <ListItem key={item} sx={{ padding: "0px" }}>
                  <ListItemButton
                    sx={{
                      textTransform: "capitalize",
                      // width:'150px',
                      backgroundColor:
                        active === item ? `${colors.green}` : "transparent",
                      color:
                        active === item
                          ? `${colors.white}`
                          : `${colors.primaryText}`,
                      "&:hover": {
                        backgroundColor:
                          active === item ? `${colors.green}` : "",
                      },
                    }}
                    onClick={() => {
                      scrollTo(index);
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

        {/* card dialog */}
        <Menu
          anchorEl={ordersAnchorEl}
          open={ordersAnchorEl ? true : false}
          onClose={closeOrdersCard}
          sx={{
            maxHeight: "480px",
            "& .MuiList-root ": {
              padding: "0px",
            },
            "& .MuiPaper-root": {
              "::-webkit-scrollbar": {
                width: "5px",
                backgroundColor:`${colors.iconContainer}`
              },
              "::-webkit-scrollbar-thumb": {
                borderRadius:"50px",
                backgroundColor:`${colors.green}`
              },
            },
          }}
        >
          <OrdersCard />
        
         
        </Menu>

        {/* favorites dialog */}
        <Menu
          anchorEl={favoritesAnchorEl}
          open={favoritesAnchorEl ? true : false}
          onClose={closeFavoritesCard}
          sx={{
            maxHeight: "480px",
            "& .MuiList-root ": {
              padding: "0px",
            },
            "& .MuiPaper-root": {
              "::-webkit-scrollbar": {
                width: "0px",
              },
            },
          }}
        >
          <FavoritesCard />
          {favorites.length===0 && (
            <MenuItem>
              {/* <SubmitOrder>Submit Order</SubmitOrder> */}
              No Items...
            </MenuItem>
          )}
        </Menu>
      </AppBarContent>
    </AppBar>
  );
}
