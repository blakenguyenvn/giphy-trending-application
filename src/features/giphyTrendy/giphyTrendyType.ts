export interface GiphyAPIParams {
  limit?: number;
  offset?: number;
  rating?: any;
  type?: any;
  text?: any;
}

export interface DataItemType {
  id: any;
  title: string;
  images: any;
  user: any;
  username: string;
}

export interface GiphyPaginationType {
  count?: number;
  offset?: number;
  totalCount?: number;
}

export interface GiphyDataType {
  data: DataItemType[];
  pagination?: GiphyPaginationType;
}

export interface GiphyTrendyState {
  currentOffset: number;
  data?: DataItemType[];
  params?: GiphyAPIParams;
  status?: 'idle' | 'loading' | 'failed';
  pagination?: GiphyPaginationType;
}
