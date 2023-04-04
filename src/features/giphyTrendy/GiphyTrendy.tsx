import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import styled from '@emotion/styled';
import InfiniteScroll from 'react-infinite-scroll-component';
import Grid from '@mui/material/Grid';
import GifCard from 'components/GifCard';
import Loader from 'components/Loader';
import { useGiphyTrendyHooks } from './giphyTrendyHooks';

const GiphyTrendyWrapper = styled(Grid)`
  padding: 48px 0 24px;
`;
interface GiphyTrendyProp {
  type: string;
}

export default function GiphyTrendy(props: GiphyTrendyProp) {
  const { type } = props;
  const { selectors, actions } = useGiphyTrendyHooks();
  const data = useAppSelector(selectors.data);
  const dispatch = useAppDispatch();

  const handleLoadMore = () => {
    dispatch(actions.offsetIncrement());
    dispatch(actions.fetchGiphyTrendyAsync({}));
  };

  useEffect(() => {
    dispatch(actions.dataTypeUpdating({ type }));
    dispatch(actions.fetchGiphyTrendyAsync({}));
  }, [type]);

  const TrendyGrid = data?.map((gifItem) => {
    return (
      <Grid key={gifItem.id} item xs={4}>
        <GifCard title={gifItem.title} image={gifItem.images.downsized?.url} />
      </Grid>
    );
  });

  return (
    <>
      <InfiniteScroll
        next={() => handleLoadMore()}
        hasMore={true}
        loader={<Loader />}
        dataLength={data?.length || 0}
      >
        <GiphyTrendyWrapper container spacing={2} columns={24}>
          {TrendyGrid}
        </GiphyTrendyWrapper>
      </InfiniteScroll>
    </>
  );
}
