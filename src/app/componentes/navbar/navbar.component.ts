import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedinUser: string;

  constructor() { }

  ngOnInit(): void {
  }

  loggedin(){
    this.loggedinUser = localStorage.getItem('userName')!;
    return this.loggedinUser;
  }

  onLogout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
  }
}
