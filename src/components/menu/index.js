import { useMediaQuery } from "@mui/material";
import React from "react";
import { theme } from "./../../Styles/themes";
import {
  Container,
  MenuContainer,
} from "../../Styles/menu";
import MenuItem from "./MenuItem";
import { SectionSubTitle, SectionTitle, TitlesContainer } from "../../Styles/common";

const Menu = (props,ref) => {
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const items = [
    {
      name: "testy food 1",
      image: "./images/1.jpg",
      price: "$100.50",
      rating:2,
    },
    {
      name: "testy food 2",
      image: "./images/2.jpg",
      price: "$110.50",
      rating:3,
    },
    {
      name: "testy food 3",
      image: "./images/3.jpg",
      price: "$120.50",
      rating:2,
    },
    {
      name: "testy food 4",
      image: "./images/4.jpg",
      price: "$130.50",
      rating:1,
    },
    {
      name: "testy food 5",
      image: "./images/5.jpg",
      price: "$140.50",
      rating:3,
    },
    {
      name: "testy food 6",
      image: "./images/6.jpg",
      price: "$150.50",
      rating:2,
    },
    {
      name: "testy food 7",
      image: "./images/7.jpg",
      price: "$160.50",
      rating:5,
    },
    {
      name: "testy food 8",
      image: "./images/8.jpg",
      price: "$170.50",
      rating:4,
    },
    {
      name: "testy food 9",
      image: "./images/9.jpg",
      price: "$180.50",
      rating:2,
    },
    {
      name: "testy food 10",
      image: "./images/10.jpg",
      price: "$190.50",
      rating:3,
    },
    {
      name: "testy food 11",
      image: "./images/11.jpg",
      price: "$200.50",
      rating:2,
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
        matches={matches}
      >
        {items.map((item) => (
          <MenuItem item={item} key={item.image} matches={matches} />
        ))}
      </MenuContainer>
    </Container>
  );
}

export default React.forwardRef(Menu);