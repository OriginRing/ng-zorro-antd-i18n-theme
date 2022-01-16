import { Injectable } from '@angular/core';
import { mapTo, ReplaySubject, tap } from "rxjs";
import { AdminService } from "@my/services/admin.service";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  token: string | null = null;
  token$ = new ReplaySubject<string | null>(1);

  constructor(private adminService: AdminService) { }

  setToken(id: string | null){
    this.token = id;
    this.token$.next(id);
  }

  boot() {
    return this.adminService.adminToken("admin", "admin")
      .pipe(
        tap((item)=>{
          this.setToken(item);
        }),
        mapTo(true),
      )
      .toPromise();
  }
}
