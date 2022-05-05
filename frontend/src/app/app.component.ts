import { Router } from '@angular/router';
import { AuthguardService } from './services/authguard.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MobilRedFox';
  isAuthenticated: boolean;
  role: string

  constructor(
    private authguardService: AuthguardService,
    private router: Router) {
    authguardService.isLogged().subscribe(data => {
      this.isAuthenticated = data
      this.role = authguardService.getRole()
    });
  }
  logout(): void {
    this.authguardService.logout()
    this.router.navigate(['/login'])
  }
}
