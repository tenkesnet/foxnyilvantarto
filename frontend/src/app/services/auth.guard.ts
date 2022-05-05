import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardService } from './authguard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isLoggedIn: boolean;
  constructor(private authguardService: AuthguardService, private router: Router) {
    this.authguardService.isLogged().subscribe(data => {
      this.isLoggedIn = data
    });
  }
  canActivate(): boolean {
    if (!this.authguardService.isLogged()) {
      this.router.navigate(['/login']);
    }
    return this.isLoggedIn

  }
  setLogged() {
    this.isLoggedIn = true
  }

}
