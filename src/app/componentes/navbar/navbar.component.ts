import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/services/alertify.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedinUser: string;

  constructor(private alertify: AlertifyService) { }

  ngOnInit(): void {
  }

  loggedin(){
    this.loggedinUser = localStorage.getItem('userName')!;
    return this.loggedinUser;
  }

  onLogout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    this.alertify.success('Sesion cerrado!');
  }
}
