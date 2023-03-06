import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserForLogin } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService: AuthService
              ,private router: Router
              ,private alertyfy: AlertifyService) { }

  ngOnInit(): void {
  }

  onLogin(loginForm: NgForm){
    console.log(loginForm.value);
    this.authService.authUser(loginForm.value).subscribe(
        (response: UserForLogin) => {
          console.log(response);
          const user = response;
          if(user){
            localStorage.setItem('token', user.token);
            localStorage.setItem('userName', user.userName);
            this.alertyfy.success("Inicio de sesion exitoso");
            this.router.navigate(['/']);
          }
        }
    );
  }

}
