import React from "react";
import {
  By,
  Container,
  CopyRight,
  CopyRightContainer,
  FooterContainer,
} from "../../Styles/footer";
import FooterItem from "./FooterItem";
import { useMediaQuery } from "@mui/material";
import { theme } from "../../Styles/themes";

export default function Footer() {
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const footerData = [
    {
      title: "location",
      data: ["india", "japan", "russia", "usa", "franch"],
    },
    {
      title: "quick links",
      data: ["home", "dishes", "about", "menu", "reviews", "order"],
    },
    {
      title: "contact info",
      data: [
        "01095471204",
        "01144615741",
        "wagiehAhmed1237@gmail.com",
        "cairo,egypt",
      ],
    },
    {
      title: "follow us",
      data: ["facebook", "twitter", "instagrem", "linkedin"],
    },
   
  ];
  return (
    <Container>
      <FooterContainer
        matches={matches}
        container
        columns={{ xs: 3, sm: 6, md: 12 }}
      >
        {footerData.map((item) => (
          <FooterItem item={item} key={item.title} matches={matches} />
        ))}
      </FooterContainer>
      <CopyRightContainer>
        <CopyRight>copyright &#174; 2023 by</CopyRight>
        <By>wagieh ahmed eid</By>
      </CopyRightContainer>
    </Container>
  );
}
