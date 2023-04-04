import GiphyFetcher from 'utils/giphySDK';
import { GiphyDetailAPI } from './giphyDetailType';

export const fetchGiphyDetailById = async ({ id }: GiphyDetailAPI): Promise<any> => {
  const response = await GiphyFetcher.gif(id);

  return response;
};
