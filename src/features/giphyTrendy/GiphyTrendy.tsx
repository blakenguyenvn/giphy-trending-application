import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import styled from '@emotion/styled';
import InfiniteScroll from 'react-infinite-scroll-component';
import Grid from '@mui/material/Grid';
import PreviewCard from 'components/PreviewCard';
import GiphyDetailDialog from 'features/giphyDetail/GiphyDetail';
import Loader from 'components/Loader';
import SearchBar from 'components/SearchBar';
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

  const loadData = (params: any) => {
    dispatch(actions.fetchGiphyTrendyAsync({ ...params }));
  };

  const handleSearch = (text: string) => {
    dispatch(actions.stateReseting());
    loadData({ text });
  };

  const handleLoadMore = () => {
    dispatch(actions.offsetIncrement());
    loadData({});
  };

  const handleOpenDetail = (id: string) => {
    setDetailId(id);
    setIsOpenDetail(true);
  };

  useEffect(() => {
    dispatch(actions.dataTypeUpdating({ type }));
    loadData({});
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
        <SearchBar searchCallback={handleSearch} />
        <GiphyTrendyWrapper container spacing={2} columns={24}>
          {TrendyGrid}
        </GiphyTrendyWrapper>
        <GiphyDetailDialog id={detailId} isOpen={isOpenDetail} toggleOpen={setIsOpenDetail} />
      </InfiniteScroll>
    </>
  );
}
