import React from "react";
import {
  HomeItem,
  HomeItemContent,
  HomeItemDishDescription,
  HomeItemDishTitle,
  HomeItemImage,
  HomeItemImageContaimer,
  HomeItemOrderNow,
  HomeItemTitle,
} from "../../Styles/home";

export default function Item({ matches, item }) {
  return (
    <HomeItem matches={matches}>
      <HomeItemContent matches={matches}>
        <HomeItemTitle>our special deshes</HomeItemTitle>
        <HomeItemDishTitle matches={matches}>{item.title}</HomeItemDishTitle>
        <HomeItemDishDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          sequi placeat natus at iste minima autem, nisi magnam. Itaque
          accusamus voluptas cupiditate quod eligendi dolorem, aliquam tempore
          consectetur blanditiis quisquam!
        </HomeItemDishDescription>
        <HomeItemOrderNow>order now</HomeItemOrderNow>
      </HomeItemContent>
      <HomeItemImageContaimer matches={matches}>
        <HomeItemImage matches={matches} src={item.image} />
      </HomeItemImageContaimer>
    </HomeItem>
  );
}
