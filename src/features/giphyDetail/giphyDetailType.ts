export interface GiphyDetailAPI {
  id: string;
}

export interface GiphyDetailState {
  id: string | null;
  detail: any;
  status?: 'idle' | 'loading' | 'failed';
}
