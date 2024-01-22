import React from "react";
import {
  Container,
  DeshesContainer,
} from "../../Styles/deshes";
import Desh from "./Desh";
import { useMediaQuery } from "@mui/material";
import { theme } from './../../Styles/themes';
import { SectionSubTitle, SectionTitle, TitlesContainer } from "../../Styles/common";

const Deshes = (props,ref) => {
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
      rating:4,
    },
    {
      name: "testy food 6",
      image: "./images/6.jpg",
      price: "$150.50",
      rating:1,
    },
 
  ];
  return (
    <Container ref={ref}>
      <TitlesContainer>

        <SectionTitle>our dishes</SectionTitle>
        <SectionSubTitle>popular dishes</SectionSubTitle>
      </TitlesContainer>
      <DeshesContainer container columns={{ xs: 4, sm: 8, md: 12, lg:16 }} matches={matches}>
        {items.map((item) => (
          <Desh item={item} key={item.image} matches={matches}/>
        ))}
      </DeshesContainer>
    </Container>
  );
}


export default React.forwardRef(Deshes);