import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/model/proveedor';
import { ActivatedRoute, Router } from '@angular/router';
import { ControlVentasService } from 'src/app/services/control-ventas.service';

@Component({
  selector: 'app-ver-proveedor',
  templateUrl: './ver-proveedor.component.html',
  styleUrls: ['./ver-proveedor.component.css']
})
export class VerProveedorComponent implements OnInit {
  public proveedorId: number;
  proveedor = new Proveedor();

  constructor(private route: ActivatedRoute
              ,private router: Router
              ,private controlVentasService: ControlVentasService) { }

  ngOnInit(): void {
    this.proveedorId = +this.route.snapshot.params['id'];
    this.route.data.subscribe(
      (data) => {
        this.proveedor = data['prov'];
      });
  }

}
