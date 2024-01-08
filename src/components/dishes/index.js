import React from "react";
import {
  Container,
  DeshesContainer,
} from "../../Styles/deshes";
import Desh from "./Desh";
import { useMediaQuery } from "@mui/material";
import { theme } from './../../Styles/themes';
import { SectionSubTitle, SectionTitle, TitlesContainer } from "../../Styles/common";

export default function Deshes({reff}) {
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
  ];
  return (
    <Container ref={reff}>
      <TitlesContainer>

        <SectionTitle>our dishes</SectionTitle>
        <SectionSubTitle>popular dishes</SectionSubTitle>
      </TitlesContainer>
      <DeshesContainer container columns={{ xs: 4, sm: 8, md: 12 }} matches={matches}>
        {items.map((item) => (
          <Desh item={item} key={item.image} matches={matches}/>
        ))}
      </DeshesContainer>
    </Container>
  );
}