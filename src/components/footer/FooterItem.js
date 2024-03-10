import React from 'react'
import { FooterItemPaper, FooterItemContainer, SectionItemDetails, SectionItemName } from '../../Styles'
import { useMediaQuery } from '@mui/material';
import { theme } from '../../Styles/themes';

export default function FooterItem({item}) {
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <FooterItemContainer item xs={3}  >
      <FooterItemPaper elevation={0}  matches={matches}>
      <SectionItemName>
        {item.title}
      </SectionItemName>

      {
        item.data.map((dataItem)=>(
          <SectionItemDetails key={dataItem}>
          {dataItem}
        </SectionItemDetails>
        ))
      }
  
      </FooterItemPaper>
    </FooterItemContainer>
  )
}
