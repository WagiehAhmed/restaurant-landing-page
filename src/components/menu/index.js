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
      image: "./images/1.jpg",
      name: "testy food",
      price: "$150.50",
    },
    {
      image: "./images/2.jpg",
      name: "testy food",
      price: "$150.50",
    },
    {
      image: "./images/3.jpg",
      name: "testy food",
      price: "$150.50",
    },
    {
      image: "./images/4.jpg",
      name: "testy food",
      price: "$150.50",
    },
    {
      image: "./images/5.jpg",
      name: "testy food",
      price: "$150.50",
    },
    {
      image: "./images/6.jpg",
      name: "testy food",
      price: "$150.50",
    },
    {
      image: "./images/7.jpg",
      name: "testy food",
      price: "$150.50",
    },
    {
      image: "./images/8.jpg",
      name: "testy food",
      price: "$150.50",
    },
    {
      image: "./images/9.jpg",
      name: "testy food",
      price: "$150.50",
    },
    {
      image: "./images/10.jpg",
      name: "testy food",
      price: "$150.50",
    },
    {
      image: "./images/11.jpg",
      name: "testy food",
      price: "$150.50",
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
        columns={{ xs: 4, lg: 16}}
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