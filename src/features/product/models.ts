export type Product = {
  id: string;
  title: string;
  price: number;
};

export interface ProductCollectionState {
  collection: Product[];
  isLoading: boolean;
  isFetched: boolean;
}
export interface ProductAction {
  type: string;
  payload?: Product[];
}
