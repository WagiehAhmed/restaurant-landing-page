import React from "react";
import {
  Container,
  DeshesContainer,SectionSubTitle, SectionTitle, TitlesContainer 
} from "../../Styles";
import Desh from "./Desh";
import { useMediaQuery } from "@mui/material";
import { theme } from './../../Styles/themes';

const Deshes = (props,ref) => {
  const matchesMedium = useMediaQuery(theme.breakpoints.down("md"));
  const items = [
    {
      id:1,
      name: "testy food 1",
      image: "./images/1.jpg",
      price: 100,
      rating:2,
      count:1,
    },
    {
      id:2,
      name: "testy food 2",
      image: "./images/2.jpg",
      price: 10,
      rating:3,
      count:1,
    },
    {
      id:3,
      name: "testy food 3",
      image: "./images/3.jpg",
      price: 20,
      rating:2,
      count:1,
    },
    {
      id:4,
      name: "testy food 4",
      image: "./images/4.jpg",
      price: 30,
      rating:1,
      count:1,
    },
    {
      id:5,
      name: "testy food 5",
      image: "./images/5.jpg",
      price: 140,
      rating:4,
      count:1,
    },
    {
      id:6,
      name: "testy food 6",
      image: "./images/6.jpg",
      price: 50,
      rating:1,
      count:1,
    },
  ];
  return (
    <Container ref={ref}>
      <TitlesContainer>

        <SectionTitle>our dishes</SectionTitle>
        <SectionSubTitle>popular dishes</SectionSubTitle>
      </TitlesContainer>
      <DeshesContainer container columns={{ xs: 4, sm: 8, md: 12, lg:16 }} matches={matchesMedium}>
        {items.map((item) => (
          <Desh item={item} key={item.image} matches={matchesMedium}/>
        ))}
      </DeshesContainer>
    </Container>
  );
}


export default React.forwardRef(Deshes);