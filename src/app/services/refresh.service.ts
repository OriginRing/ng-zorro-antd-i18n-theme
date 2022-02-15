import { Injectable } from '@angular/core';
import {
  debounceTime,
  EMPTY,
  filter,
  fromEvent,
  interval,
  map,
  mapTo,
  merge,
  share,
  startWith,
  Subject,
  switchMap
} from "rxjs";
import { NavigationEnd, Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RefreshService {
  readonly intervalTime = 10000;
  readonly visibility$ = fromEvent(window, 'visibilitychange').pipe(map(e => !(e.target as Document).hidden));
  private manualRefresh$ = new Subject();
  private navigationEnd$ = this.router.events.pipe(
    filter(item => item instanceof NavigationEnd),
    mapTo(true)
  )
  private interval$ = interval(this.intervalTime).pipe(mapTo(true), startWith(true))

  // 热更新
  refresh$ = merge(this.visibility$, this.manualRefresh$.pipe(mapTo(true)), this.navigationEnd$.pipe(
    startWith(true),
    debounceTime(300),
    switchMap(active => (active ? this.interval$ : EMPTY)),
    share()
  ))
  refresh(): void{
    this.manualRefresh$.next(true);
  }
  constructor(private router: Router) { }
}
