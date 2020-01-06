import React from 'react'
import styled from 'styled-components'

const RowStyle=styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  dir:rtl;
  padding:10px;
`;

const ColStyle=styled.div`
display: flex;
flex-direction: column;
dir:rtl;
padding:10px;
`;

const HeadingStyle=styled.h4`
text-align: center;
direction: rtl;
padding:10px;
`;

const PStyle=styled.p`
text-align: justify;
direction: rtl;
`;

module.exports={
    RowStyle:RowStyle,
    ColStyle:ColStyle,
    HeadingStyle:HeadingStyle,
    PStyle:PStyle
}