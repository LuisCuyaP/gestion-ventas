import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProveedorBase } from 'src/app/model/iproveedorbase';
import { ControlVentasService } from 'src/app/services/control-ventas.service';

@Component({
  selector: 'app-lista-proveedor',
  templateUrl: './lista-proveedor.component.html',
  styleUrls: ['./lista-proveedor.component.css']
})
export class ListaProveedorComponent implements OnInit {
  proveedores: Array<IProveedorBase> = [];

  constructor(private route: ActivatedRoute,private controlVentasService: ControlVentasService) { }

  ngOnInit(): void {
    this.obtenerProveedor();
  }

  obtenerProveedor(){
    this.controlVentasService.getAllProveedores().subscribe(
      data => {
        this.proveedores = data;
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
  }

  eliminarProveedor(id: number){
    this.controlVentasService.deleteProveedor(id).subscribe(
      data => {
        this.obtenerProveedor();
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
  }


}
