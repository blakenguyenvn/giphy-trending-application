import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import styled from '@emotion/styled';
import InfiniteScroll from 'react-infinite-scroll-component';
import Grid from '@mui/material/Grid';
import PreviewCard from 'components/PreviewCard';
import GiphyDetailDialog from 'features/giphyDetail/GiphyDetail';
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
  const [detailId, setDetailId] = useState<string | null>(null);
  const [isOpenDetail, setIsOpenDetail] = useState<boolean>(false);

  const { selectors, actions } = useGiphyTrendyHooks();
  const data = useAppSelector(selectors.data);
  const dispatch = useAppDispatch();

  const handleLoadMore = () => {
    dispatch(actions.offsetIncrement());
    dispatch(actions.fetchGiphyTrendyAsync({}));
  };

  const handleOpenDetail = (id: string) => {
    setDetailId(id);
    setIsOpenDetail(true);
  };

  useEffect(() => {
    dispatch(actions.dataTypeUpdating({ type }));
    dispatch(actions.fetchGiphyTrendyAsync({}));
  }, [type]);

  const TrendyGrid = data?.map((item) => {
    return (
      <Grid key={item.id} item xs={4}>
        <PreviewCard
          handleOpenDetail={() => {
            handleOpenDetail(item.id);
          }}
          title={item.title}
          image={item.images.downsized?.url}
        />
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
        <GiphyDetailDialog id={detailId} isOpen={isOpenDetail} toggleOpen={setIsOpenDetail} />
      </InfiniteScroll>
    </>
  );
}
