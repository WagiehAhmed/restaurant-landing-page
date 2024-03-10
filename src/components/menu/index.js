import { useMediaQuery } from "@mui/material";
import React from "react";
import { theme } from "./../../Styles/themes";
import {
  Container,
  MenuContainer,SectionSubTitle, SectionTitle, TitlesContainer 
} from "../../Styles";
import MenuItem from "./MenuItem";

const Menu = (props,ref) => {
  const matchesMedium = useMediaQuery(theme.breakpoints.down("md"));
  const items = [
    {
      id:10,
      name: "testy food 1",
      image: "./images/1.jpg",
      price: 10,
      rating:2,
      count:1,
    },
    {
      id:20,
      name: "testy food 2",
      image: "./images/2.jpg",
      price: 10,
      rating:3,
      count:1,
    },
    {
      id:30,
      name: "testy food 3",
      image: "./images/3.jpg",
      price:120,
      rating:2,
      count:1,
    },
    {
      id:40,
      name: "testy food 4",
      image: "./images/4.jpg",
      price: 30,
      rating:1,
      count:1,
    },
    {
      id:50,
      name: "testy food 5",
      image: "./images/5.jpg",
      price: 40,
      rating:3,
      count:1,
    },
    {
      id:60,
      name: "testy food 6",
      image: "./images/6.jpg",
      price: 50,
      rating:2,
      count:1,
    },
    {
      id:70,
      name: "testy food 7",
      image: "./images/7.jpg",
      price: 60,
      rating:5,
      count:1,
    },
    {
      id:80,
      name: "testy food 8",
      image: "./images/8.jpg",
      price: 70,
      rating:4,
      count:1,
    },
    {
      id:90,
      name: "testy food 9",
      image: "./images/9.jpg",
      price: 80,
      rating:2,
      count:1,
    },
    {
      id:100,
      name: "testy food 10",
      image: "./images/10.jpg",
      price: 40,
      rating:3,
      count:1,
    },
    {
      id:110,
      name: "testy food 11",
      image: "./images/11.jpg",
      price: 50,
      rating:2,
      count:1,
    },
  ];
  return (
    <Container ref={ref}>
      <TitlesContainer>
        <SectionTitle>our menu</SectionTitle>
        <SectionSubTitle>today's spesciality</SectionSubTitle>
      </TitlesContainer>

      <MenuContainer
        container
        columns={{ xs: 4, sm: 8, md: 12, lg: 16}}
        matches={matchesMedium}
      >
        {items.map((item) => (
          <MenuItem item={item} key={item.image} matches={matchesMedium} />
        ))}
      </MenuContainer>
    </Container>
  );
}

export default React.forwardRef(Menu);