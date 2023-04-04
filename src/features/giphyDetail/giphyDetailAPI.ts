import GiphyFetcher from 'utils/giphySDK';
import { GiphyDetailAPI } from './giphyDetailType';

export const fetchGiphyDetailById = async ({ id }: GiphyDetailAPI): Promise<any> => {
  console.log({ id });
  const response = await GiphyFetcher.gif(id);
  console.log(response);

  return response;
};
