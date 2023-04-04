import {
  selectTrendyData,
  selectTrendyParam,
  dataTypeUpdating,
  offsetIncrement,
  stateReseting,
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
      stateReseting,
      fetchGiphyTrendyAsync,
    },
  };
};
