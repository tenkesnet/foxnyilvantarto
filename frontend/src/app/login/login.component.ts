import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';
import { User } from '../model/user.model';
import { AuthGuard } from '../services/auth.guard';
import { AuthguardService } from '../services/authguard.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  user: User
  form: FormGroup;
  role: string
  @ViewChild('userinput') userInputElement!: ElementRef<HTMLInputElement>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private authguardService: AuthguardService,
    private authGuard: AuthGuard) {
    this.role = authguardService.getRole()
  }


  ngAfterViewInit(): void {
    // this.userInputElement.nativeElement.focus();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: '',
      password: ''
    });
    //localStorage.setItem('SeesionUser', this.user)
  }

  submitForm() {
    const md5 = new Md5();
    this.user = this.form.value
    this.user.password = md5.appendStr(this.user.password).end().toString()
    this.userService.login(this.user).subscribe(data => {
      if (data.id > 0) {
        this.authguardService.setRole(data.role);
        this.authguardService.setlogged()
        this.authGuard.setLogged()
        console.log("Submit subscribe: ", data)
        this.router.navigate(['/home'])
      }


    })
  }
}
