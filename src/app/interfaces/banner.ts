export interface Banner {
  totalCount?: number;
  pages?: number;
  Banners?: Banners[];
}
export interface Banners {
  title: string;
  url: string;
  bannerImg: string;
}
