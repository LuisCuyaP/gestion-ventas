import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proveedor } from '../model/proveedor';

@Injectable({providedIn: 'root'})

export class ControlVentasService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  newProveedorId(){
    if(localStorage.getItem('PID')){
      localStorage.setItem('PID',String(+localStorage.getItem('PID')!+1));
      return +localStorage.getItem('PID')!;
    }else{
      localStorage.setItem('PID','1');
      return 101;
    }
  }

  getProveedor(id: number){
    return this.http.get<Proveedor>(this.baseUrl + '/proveedor/detail/' + id.toString());
  }

  getAllProveedores(): Observable<Proveedor[]>{
    return this.http.get<Proveedor[]>(this.baseUrl + '/proveedor/list');
  }

  addProveedor(proveedor: Proveedor){
    return this.http.post(this.baseUrl + '/proveedor/add', proveedor);
  }

  deleteProveedor(proveedorId: number) {
    return this.http.delete(this.baseUrl + '/proveedor/delete/' +String(proveedorId));
  }

  updateProveedor(id: number, proveedor : Proveedor) {
    return this.http.put(this.baseUrl + '/proveedor/update/' + id.toString(), proveedor);
  }
}
