import giphyDetailReducer from './giphyDetailSlice';
import { GiphyDetailState } from './giphyDetailType';

describe('giphyDetail reducer', () => {
  const initialState: GiphyDetailState = {
    id: null,
    detail: {},
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(giphyDetailReducer(undefined, { type: 'unknown' })).toEqual({
      id: null,
      detail: {},
      status: 'idle',
    });
  });
});

export default {};
