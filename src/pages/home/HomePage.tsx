import React from 'react';
import Container from '@mui/material/Container';
import PageContent from 'components/PageContent';
import GiphyTrendy from 'features/giphyTrendy/GiphyTrendy';
import { GIPHY_DATA_TYPES } from 'utils/config';
import './HomePage.scss';

function HomePage() {
  return (
    <PageContent>
      <Container>
        <GiphyTrendy type={GIPHY_DATA_TYPES.gif} />
      </Container>
    </PageContent>
  );
}

export default HomePage;
