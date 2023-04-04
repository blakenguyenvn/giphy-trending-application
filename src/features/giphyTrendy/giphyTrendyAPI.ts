import GiphyFetcher from 'utils/giphySDK';
import { GiphyAPIParams, GiphyDataType } from './giphyTrendyType';

export const fetchGiphyTrendyByType = async ({
  limit,
  offset,
  rating,
  type,
}: GiphyAPIParams): Promise<GiphyDataType> => {
  const response = await GiphyFetcher.trending({ limit, offset, rating, type });

  return response;
};
