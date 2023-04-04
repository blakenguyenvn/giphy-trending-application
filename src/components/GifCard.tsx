import React from 'react';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

const GifCardWrapper = styled(Card)`
  position: relative;
  border-radius: 0;
  width: 100%;
  height: 100%;
  border: none;
  box-shadow: none;
`;

const GifCardContent = styled(CardContent)`
  width: 100%;
  height: 60px;
  padding: 8px;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: 14px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;

  &:last-child {
    padding-bottom: 8px;
  }
`;

interface GifCardProp {
  image: any;
  title: string;
}
export default function GifCard(props: GifCardProp) {
  const { image, title } = props;

  return (
    <GifCardWrapper>
      <CardMedia component='img' width='100%' height='140px' image={image} />
      <GifCardContent>{title}</GifCardContent>
    </GifCardWrapper>
  );
}
