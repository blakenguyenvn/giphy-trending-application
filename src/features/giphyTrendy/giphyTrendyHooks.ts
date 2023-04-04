import {
  selectTrendyData,
  selectTrendyParam,
  dataTypeUpdating,
  offsetIncrement,
  fetchGiphyTrendyAsync,
} from './giphyTrendySlice';

export const useGiphyTrendyHooks = () => {
  return {
    selectors: {
      data: selectTrendyData,
      param: selectTrendyParam,
    },
    actions: {
      dataTypeUpdating,
      offsetIncrement,
      fetchGiphyTrendyAsync,
    },
  };
};
