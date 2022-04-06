import { Injectable } from '@angular/core';
import { mapTo, ReplaySubject, tap } from "rxjs";
import { AdminService } from "@my/services/admin.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  token: string | null = null;
  token$ = new ReplaySubject<string | null>(1);

  constructor(private adminService: AdminService, private router: Router) { }

  setToken(id: string | null): void {
    document.cookie = `token=${id}`;
    this.token = id;
    this.token$.next(id);
  }

  cookieToken(): void {
    const cookie = document.cookie;
    const arrCookie = cookie.split("; ");//分割
    //遍历匹配
    for ( let i = 0; i < arrCookie.length; i++) {
      const arr = arrCookie[i].split("=");
      if (arr[0] === "token"){
        this.setToken(arr[1]);
      } else {
        this.setToken("");
      }
    }
  }

  boot() {
    this.cookieToken();
    return this.adminService.verifyToken(this.token)
      .pipe(
        tap((item) => {
          // this.setToken(item);
          !item ? this.router.navigate([ "/login" ]).then() : "";
        }),
        mapTo(true),
      )
      .toPromise();
  }
}
