import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }

  private linkClickSubject = new BehaviorSubject<boolean>(false);
  isLinkClick$ = this.linkClickSubject.asObservable();

  setLinkClick(value: boolean) {
    this.linkClickSubject.next(value);
  }
}
