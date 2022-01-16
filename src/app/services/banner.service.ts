import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";
import {url} from "@my/uitls/url";
import {Banner} from "@my/interfaces/banner";

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private httpClient: HttpClient) { }

  bannerGetData(): Observable<Banner>{
    return this.httpClient.get<Banner>(
      `${url}/api/v1/admin/banner`)
      .pipe(
        map(item => item || {}),
        catchError(() => of({}))
        )
  }
}
