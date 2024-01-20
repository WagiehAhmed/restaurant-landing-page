import { useMediaQuery } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import { theme } from "../../Styles/themes";
import Item from "./Item";
import { HomeContainer } from "../../Styles/home";

const Home = (props,ref) => {
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const items = [
    { title: "hot pizza", image: "./images/pizza.png" },
    { title: "fried chicken", image: "./images/chicken.png" },
    { title: "special noodles", image: "./images/pasta.png" }
  ];
  const settings = {
    arrows:false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <HomeContainer ref={ref}>
      <Slider {...settings}>
        {
          items.map((item)=>(
            <Item matches={matches} item={item} key={item.title}/>
            ))
          }
      </Slider>
    </HomeContainer>
  );
}


export default React.forwardRef(Home);