import { DEFAULT_API_PARAMS } from 'utils/config';
import giphyTrendyReducer, {
  GiphyTrendyState,
  dataTypeUpdating,
  offsetIncrement,
  stateReseting,
} from './giphyTrendySlice';

describe('giphyTrendy reducer', () => {
  const initialState: GiphyTrendyState = {
    data: [],
    params: { ...DEFAULT_API_PARAMS },
    status: 'idle',
    currentOffset: 0,
  };
  it('should handle initial state', () => {
    expect(giphyTrendyReducer(undefined, { type: 'unknown' })).toEqual({
      data: [],
      params: { ...DEFAULT_API_PARAMS },
      status: 'idle',
      currentOffset: 0,
    });
  });

  it('should handle reseting', () => {
    const actual = giphyTrendyReducer(initialState, stateReseting());
    expect(actual.data).toEqual([]);
  });

  it('should handle dataTypeUpdating', () => {
    const actual = giphyTrendyReducer(initialState, dataTypeUpdating({ type: 'gifs' }));
    expect(actual.params.type).toEqual('gifs');
  });

  it('should handle offsetIncrement', () => {
    const actual = giphyTrendyReducer(initialState, offsetIncrement());
    expect(actual.currentOffset).toEqual(0);
  });
});

export default {};
