import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {
  isLoginSubject = new BehaviorSubject<boolean>(false);
  role: string
  constructor() { }

  setlogged() {
    this.isLoginSubject.next(true)
  }
  setRole(role: string) {
    this.role = role
  }
  getRole(): string {
    return this.role
  }
  isLogged(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }
  logout() {
    this.isLoginSubject.next(false)
  }

}
