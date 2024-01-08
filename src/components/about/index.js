import React from "react";
import {
  AboutItem,
  AboutItemContent,
  AboutItemDescription,
  AboutItemImage,
  AboutItemImageContaimer,
  AboutItemLearmMore,
  AboutItemOption,
  AboutItemOptions,
  AboutItemTitle,
  Container,
} from "../../Styles/about";
import { useMediaQuery } from "@mui/material";
import { theme } from "./../../Styles/themes";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import { SectionSubTitle, SectionTitle, TitlesContainer } from "../../Styles/common";

export default  React.forwardRef(({reff})=>{
  
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container ref={reff}>
      <TitlesContainer>
        <SectionTitle>about us</SectionTitle>
        <SectionSubTitle>why choose us?</SectionSubTitle>
      </TitlesContainer>

      <AboutItem matches={matches}>
        <AboutItemImageContaimer>
          <AboutItemImage matches={matches} src={"./images/2.png"} />
        </AboutItemImageContaimer>
        <AboutItemContent>
          {/* <AboutItemTitle>our special deshes</AboutItemTitle> */}
          <AboutItemTitle matches={matches}>
            best food in the countery
          </AboutItemTitle>
          <AboutItemDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            sequi placeat natus at iste minima autem, nisi magnam. Itaque
            accusamus voluptas cupiditate quod eligendi dolorem, aliquam tempore
            consectetur blanditiis quisquam!
          </AboutItemDescription>
          <AboutItemOptions>
            <AboutItemOption
              startIcon={<LocalShippingIcon color="inherit" fontSize="large" />}
            >
              free delivery
            </AboutItemOption>
            <AboutItemOption
              startIcon={<AttachMoneyIcon color="inherit" fontSize="large" />}
            >
              easy payments
            </AboutItemOption>
            <AboutItemOption
              startIcon={<HeadsetMicIcon color="inherit" fontSize="large" />}
            >
              24/7 service
            </AboutItemOption>
          </AboutItemOptions>
          <AboutItemLearmMore>learn more</AboutItemLearmMore>
        </AboutItemContent>
      </AboutItem>
    </Container>
  )


})


