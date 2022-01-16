import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, map, Observable, of } from "rxjs";
import { url } from "@my/uitls/url";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  adminToken(userName: string, password: string): Observable<string | null>{
    return this.httpClient.post<{token: string}>(
      `${url}/api/v1/auth/manager_login`,
      { userName: userName, password: password}
    )
      .pipe(
        map(item=> item.token || null),
        catchError(()=> of(null))
      )
  }
}
