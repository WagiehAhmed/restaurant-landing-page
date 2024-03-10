import React from "react";
import {
  OrderContentItem,
  OrderContentItems,
  OrderNow,
  OrederContainer,
  SectionSubTitle, SectionTitle, TitlesContainer 
} from "../../Styles";
import {
  Container,
  Paper,
  useMediaQuery,
} from "@mui/material";
// import { AccountCircle } from "@mui/icons-material";
import { theme } from "./../../Styles/themes";
const Order = (props,ref) => {
  const matchesMedium = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <OrederContainer ref={ref}>
      <TitlesContainer>
        <SectionTitle>order now</SectionTitle>
        <SectionSubTitle>free and fast</SectionSubTitle>
      </TitlesContainer>

      <Container>
        <Paper elevation={5}>
          <OrderContentItems variant="outlined">
            <OrderContentItem
              matches={matchesMedium}
              label="Your Name"
              type="text"
              variant="outlined"
            />
            <OrderContentItem
              matches={matchesMedium}
              label="Your Number"
              type="text"
              variant="outlined"
            />
            <OrderContentItem
              matches={matchesMedium}
              label="Your Order"
              type="text"
              variant="outlined"
            />
            <OrderContentItem
              label="Data And Time"
              focused
              variant="outlined"
              matches={matchesMedium}
              type="datetime-local"
            />
              <OrderContentItem
                matches={matchesMedium}
                label="Your Messsage"
                multiline
                rows={5}
                variant="outlined"
              />
            <OrderContentItem
              matches={matchesMedium}
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

export default React.forwardRef(Order);