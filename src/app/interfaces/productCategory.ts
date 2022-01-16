export interface ProductCategory{
  totalCount?: number,
  pages?: number,
  categories?: Categories[]
}

export interface Categories{
  name: string,
  descriptions: string,
  coverImg: string,
  tag: string,
  _id?: string
}
