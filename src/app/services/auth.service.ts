import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserForRegister, UserForLogin } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

baseUrl = environment.baseUrl;
constructor(private http: HttpClient) { }

authUser(user: UserForLogin){
  return this.http.post<UserForLogin>(this.baseUrl + '/account/login', user);
}

registerUser(user: UserForRegister){
  return this.http.post<UserForRegister>(this.baseUrl + '/account/register', user);
}

}
