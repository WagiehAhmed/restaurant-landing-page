import React, { useEffect, useState } from "react";
import CardItem from "./OrdersCardItem";
import { useStoreContext } from "../../hooks/useStoreContext";
import { Box, MenuItem, Stack } from "@mui/material";
import { SubmitOrder } from "../../Styles/appbar";
import OrdersCardItem from "./OrdersCardItem";

const OrdersCard = () => {
  const { orders } = useStoreContext();
  const [totalCount, setTotalCount] = useState(orders.length);
  // console.log("total count : " , totalCount);
  let total = 0;
  orders.forEach((element) => {
    total += element.price * element.count;
  })
  return (
    <Box>
      {orders &&
        orders.map((item) => (
          <OrdersCardItem
            item={item}
            key={item.image}
            setTotalCount={setTotalCount}
          />
        ))}
      {orders.length > 0 ? (
        <Stack direction="row" justifyContent="space-between">
          <SubmitOrder>Submit Order</SubmitOrder>
          <SubmitOrder>
           
            {total}
          </SubmitOrder>
        </Stack>
      ) : (
        <MenuItem>No Orders...</MenuItem>
      )}
    </Box>
  );
};

export default OrdersCard;
