import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { ProductCategory } from '@my/interfaces/productCategory';
import { url } from '@my/uitls/url';
import { Product, ProductList } from '@my/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  ProductGetData(token: string | null, per: number, page: number): Observable<Product> {
    // console.log(token) token验证，根据需要添加
    return this.httpClient.get<Product>(`${url}/api/v1/admin/products?per=${per}&page=${page}`).pipe(
      map(item => item || {}),
      catchError(() => of({}))
    );
  }

  ProductPostAdd(name: string, descriptions: string, coverImg: string, tag: string): Observable<ProductList | boolean> {
    return this.httpClient
      .post<ProductList>(`${url}/api/v1/admin/products`, {
        name: name,
        descriptions: descriptions,
        coverImg: coverImg,
        tag: tag
      })
      .pipe(
        map(item => item || false),
        catchError(() => of(false))
      );
  }

  ProductDelete(id: string | undefined): Observable<boolean> {
    return this.httpClient.delete<ProductCategory>(`${url}/api/v1/admin/products/${id}`).pipe(
      map(() => true || false),
      catchError(() => of(false))
    );
  }
}
