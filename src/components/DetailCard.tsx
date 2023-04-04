import React from 'react';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import UserInfo from 'components/UserInfo';
import Rating from 'components/Rating';

const DetailCardWrapper = styled(Card)`
  position: relative;
  border-radius: 0;
  width: 100%;
  height: 100%;
  border: none;
  box-shadow: none;
`;

const DetailCardContent = styled(CardContent)`
  width: 100%;
  height: 60px;
  padding: 16px 8px;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    padding-bottom: 16px;
  }
`;

interface DetailCardProp {
  image: any;
  title: string;
  user: any;
  rating: string;
}
export default function DetailCard(props: DetailCardProp) {
  const { image, user, rating } = props;

  return (
    <DetailCardWrapper>
      <CardMedia component='img' width='100%' height='100%' image={image} />
      <DetailCardContent>
        <UserInfo avatar={user?.avatar_url} name={user?.display_name} />
        <Rating value={rating} />
      </DetailCardContent>
    </DetailCardWrapper>
  );
}