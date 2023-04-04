import { selectDetail, selectStatus, fetchGiphyDetailAsync } from './giphyDetailSlice';

export const useGiphyDetailHooks = () => {
  return {
    selectors: {
      detail: selectDetail,
      status: selectStatus,
    },
    actions: {
      fetchGiphyDetailAsync,
    },
  };
};
