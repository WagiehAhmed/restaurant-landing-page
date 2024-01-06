import { useMediaQuery } from "@mui/material";
import React from "react";
import { theme } from "../../Styles/themes";
import Slider from "react-slick";
import {
  ReviewsContainer,
} from "../../Styles/reviews";
import ReviewItem from "./ReviewItem";
import { SectionSubTitle, SectionTitle, TitlesContainer } from "../../Styles/common";

export default function Reviews({reff}) {
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const items = [
    { name: "john deo", image: "./images/p1.jpg" },
    { name: "john deo", image: "./images/p2.jpg" },
    { name: "john deo", image: "./images/p1.jpg" },
    { name: "john deo", image: "./images/p2.jpg" },
    { name: "john deo", image: "./images/p1.jpg" },
  ];
  var settings = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };

  return (
    <ReviewsContainer ref={reff}>
      <TitlesContainer>
        <SectionTitle>customer's review</SectionTitle>
        <SectionSubTitle>what thery say</SectionSubTitle>
      </TitlesContainer>

      <Slider {...settings}>

        {items.map((item) => (
          <ReviewItem matches={matches} item={item} key={item.name} />
          ))}

      </Slider>
    </ReviewsContainer>
  );
}
