import React from "react";
import {
  ReviewItemContainer,
  ReviewItemHeader,
  ReviewItemHeaderData,
  ReviewItemHeaderImage,
  ReviewItemHeaderName,
  ReviewItemText,
} from "../../Styles";
import { Rating } from "@mui/material";

export default function ReviewItem({ item, matches }) {
  return (
      <ReviewItemContainer matches={matches} elevation={5}>
        <ReviewItemHeader>
          <ReviewItemHeaderImage src={item.image} size="small" />
          <ReviewItemHeaderData>
            <ReviewItemHeaderName>{item.name}</ReviewItemHeaderName>
            <Rating defaultValue={2} precision={1} />
          </ReviewItemHeaderData>
        </ReviewItemHeader>
        <ReviewItemText variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit eum ea
          laborum facilis! Laborum, animi consectetur. Corporis minus, iusto
          voluptates voluptatum libero, tempora sapiente, earum laboriosam
          soluta dolore fugit eligendi.
        </ReviewItemText>
      </ReviewItemContainer>
  );
}
