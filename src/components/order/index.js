import React from "react";
import {
  OrderContentItem,
  OrderContentItems,
  OrderNow,
  OrederContainer,
} from "../../Styles/order";
import {
  Container,
  Paper,
  useMediaQuery,
} from "@mui/material";
// import { AccountCircle } from "@mui/icons-material";
import { theme } from "./../../Styles/themes";
import { SectionSubTitle, SectionTitle, TitlesContainer } from "../../Styles/common";

export default function Order({ reff }) {
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <OrederContainer ref={reff}>
      <TitlesContainer>
        <SectionTitle>order now</SectionTitle>
        <SectionSubTitle>free and fast</SectionSubTitle>
      </TitlesContainer>

      <Container>
        <Paper elevation={5}>
          <OrderContentItems variant="outlined">
            <OrderContentItem
              matches={matches}
              label="Your Name"
              type="text"
              variant="outlined"
            />
            <OrderContentItem
              matches={matches}
              label="Your Number"
              type="text"
              variant="outlined"
            />
            <OrderContentItem
              matches={matches}
              label="Your Order"
              type="text"
              variant="outlined"
            />
            <OrderContentItem
              label="Data And Time"
              focused
              variant="outlined"
              matches={matches}
              type="datetime-local"
            />
              <OrderContentItem
                matches={matches}
                label="Your Messsage"
                multiline
                rows={5}
                variant="outlined"
              />
            <OrderContentItem
              matches={matches}
              label="YourAddress"
              multiline
              rows={5}
              variant="outlined"
            />
           <OrderNow>
           
           order now</OrderNow>

          </OrderContentItems>
        </Paper>
      </Container>
    </OrederContainer>
  );
}
