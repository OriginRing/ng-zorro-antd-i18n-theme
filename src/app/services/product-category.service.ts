import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";
import {ProductCategory} from "@my/interfaces/productCategory";
import {url} from "@my/uitls/url";

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  constructor(private httpClient: HttpClient) { }

  ProductCategoryGetData(token: string | null, per: number, page: number): Observable<ProductCategory>{
    // console.log(token) token验证，根据需要添加
    return this.httpClient.get<ProductCategory>(`${url}/api/v1/admin/product_categories?per=${per}&page=${page}`)
      .pipe(
        map(item=> item || {}),
        catchError(()=> of({}))
      )
  }

  ProductCategoryPostAdd(name: string, descriptions: string, coverImg: string, tag: string): Observable<ProductCategory | boolean>{
    return this.httpClient.post<ProductCategory>(
      `${url}/api/v1/admin/product_categories`,
      {
        name: name,
        descriptions: descriptions,
        coverImg: coverImg,
        tag: tag
      }
    )
      .pipe(
        map(item=> item || false),
        catchError(()=> of(false))
      )
  }

  ProductCategoryDelete(id: string | undefined): Observable<boolean>{
    return this.httpClient.delete<ProductCategory>(`${url}/api/v1/admin/product_categories/${id}`)
      .pipe(
        map(()=> true || false),
        catchError(()=> of(false))
      )
  }
}
