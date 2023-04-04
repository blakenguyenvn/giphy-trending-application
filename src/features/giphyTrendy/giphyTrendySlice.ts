import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { DEFAULT_API_PARAMS } from 'utils/config';
import { GiphyTrendyState } from './giphyTrendyType';
import { fetchGiphyTrendyByType } from './giphyTrendyAPI';

const initialState: GiphyTrendyState = {
  data: [],
  params: { ...DEFAULT_API_PARAMS },
  status: 'idle',
  currentOffset: 0,
};

export const fetchGiphyTrendyAsync = createAsyncThunk(
  'giphy/fetchGiphyTrendy',
  async (args: any, { getState }) => {
    const state: any = getState();
    const { giphyTrendy } = state;
    const response = await fetchGiphyTrendyByType({ ...giphyTrendy.params });

    return {
      data: response.data,
      pagination: response.pagination,
    };
  },
);

const increaseOffsetByLimit = (currentOffset: number, limit: number) => {
  return currentOffset + limit;
};

export const giphyTrendySlice = createSlice({
  name: 'giphyTrendy',
  initialState,
  reducers: {
    offsetIncrement: (state) => {
      state.params = {
        ...state.params,
        offset: increaseOffsetByLimit(state.params?.offset || 0, state.params?.limit || 0),
      };
    },
    dataTypeUpdating: (state, action) => {
      state.params = {
        ...state.params,
        type: action.payload.type,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGiphyTrendyAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGiphyTrendyAsync.fulfilled, (state, action) => {
        const { data, pagination } = action.payload;
        const { data: currentData = [], params: currentParams, currentOffset } = state;

        state.data = currentParams?.offset != currentOffset ? [...currentData, ...data] : [...data];
        state.currentOffset = currentParams?.offset || 0;
        state.pagination = pagination;
        state.status = 'idle';
      })
      .addCase(fetchGiphyTrendyAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { dataTypeUpdating, offsetIncrement } = giphyTrendySlice.actions;

export const selectTrendyData = (state: RootState) => state.giphyTrendy.data;
export const selectTrendyParam = (state: RootState) => state.giphyTrendy.params;
export const selectTrendyPagination = (state: RootState) => state.giphyTrendy.pagination;

export default giphyTrendySlice.reducer;
