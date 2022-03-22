import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, map, Observable, of } from "rxjs";
import { url } from "@my/uitls/url";
import { Upload } from "@my/interfaces/admin";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  adminToken(userName: string, password: string): Observable<string | null>{
    return this.httpClient.post<{token: string}>(
      `${url}/api/v1/auth/manager_login`,
      { userName: userName, password: password }
    )
      .pipe(
        map(item => item.token || null),
        catchError(() => of(null))
      );
  }

  uploadFile(file: FormData): Observable<string> {
    return this.httpClient.post<Upload>(`${url}/api/v1/common/file_upload`, file)
      .pipe(
        map(item => item.info || ''),
        catchError(() => of(''))
      );
  }
}
