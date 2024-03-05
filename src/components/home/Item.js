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
import { Link } from "@mui/material";

export default function Item({ matches, item }) {
  return (
    <HomeItem matches={matches}>
      <HomeItemContent matches={matches}>
        <HomeItemTitle  matches={matches}>our special deshes</HomeItemTitle>
        <HomeItemDishTitle matches={matches}>{item.title}</HomeItemDishTitle>
        <HomeItemDishDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          sequi placeat natus at iste minima autem, nisi magnam.
        </HomeItemDishDescription>
        <HomeItemOrderNow>order now</HomeItemOrderNow>
        {/* <Link href="https://wa.me/+201010576801" target="_blank">Send Message </Link> */}
        <Link href="https://api.whatsapp.com/send?phone=+201093799249&text=hi" target="_blank">Send Message</Link>
      </HomeItemContent>
      <HomeItemImageContaimer matches={matches}>
        <HomeItemImage matches={matches} src={item.image} />
      </HomeItemImageContaimer>
    </HomeItem>
  );
}
