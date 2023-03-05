import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/model/proveedor';
import { ControlVentasService } from 'src/app/services/control-ventas.service';

@Component({
  selector: 'app-agregar-editar-proveedor',
  templateUrl: './agregar-editar-proveedor.component.html',
  styleUrls: ['./agregar-editar-proveedor.component.css']
})
export class AgregarEditarProveedorComponent implements OnInit {

  addProveedorForm: FormGroup;
  proveedor = new Proveedor();

  constructor(private router: Router,
              private fb: FormBuilder,
              private controlVentasService : ControlVentasService
            ) { }

  ngOnInit(): void {

    //validaciones reactivos con el formulario
    this.CreateAddProveedorForm();


  }

  CreateAddProveedorForm() {
    this.addProveedorForm = this.fb.group({
      BasicInfo: this.fb.group({
          Ruc: [null , Validators.required],
          RazonSocial: [null, Validators.required],
          NombreComercial: [null, Validators.required],
          Direccion: [null, Validators.required],
          Telefono: [null, Validators.required],
          Email: [null, Validators.required],
          ContactoUno: [null, Validators.required],
          ContactoDos: [null, Validators.required],
          Observacion: [null, Validators.required]
      })
    });
  }

  // #region <Getter Methods>
  // #region <FormGroups>
  get BasicInfo() {
    return this.addProveedorForm.controls['BasicInfo'] as FormGroup;
  }
  // #endregion

  //#region <Form Controls>
  get Ruc() {
    return this.BasicInfo.controls['Ruc'] as FormControl;
  }
  get RazonSocial() {
    return this.BasicInfo.controls['RazonSocial'] as FormControl;
  }
  get NombreComercial() {
    return this.BasicInfo.controls['NombreComercial'] as FormControl;
  }
  get Direccion() {
    return this.BasicInfo.controls['Direccion'] as FormControl;
  }
  get Telefono() {
    return this.BasicInfo.controls['Telefono'] as FormControl;
  }
  get Email() {
    return this.BasicInfo.controls['Email'] as FormControl;
  }
  get ContactoUno() {
    return this.BasicInfo.controls['ContactoUno'] as FormControl;
  }
  get ContactoDos() {
    return this.BasicInfo.controls['ContactoDos'] as FormControl;
  }
  get Observacion() {
    return this.BasicInfo.controls['Observacion'] as FormControl;
  }
  //#endregion
  //#endregion

  onBack(){
    this.router.navigate(['/lista-proveedor']);
  }

  onSubmit(){
      this.mapProveedor();
      this.controlVentasService.addProveedor(this.proveedor).subscribe(
        ()=>{
          console.log(this.addProveedorForm);
          this.router.navigate(['/lista-proveedor']);
      });

  }

  //este metodo mapProveedor me trae todos los datos del formulario para poder ingresarlo a la bd
  mapProveedor(): void{
    this.proveedor.id = this.controlVentasService.newProveedorId();
    this.proveedor.ruc = this.Ruc.value;
    this.proveedor.razonSocial = this.RazonSocial.value;
    this.proveedor.nombreComercial = this.NombreComercial.value;
    this.proveedor.direccion = this.Direccion.value;
    this.proveedor.telefono = this.Telefono.value;
    this.proveedor.email = this.Email.value;
    this.proveedor.contactoUno = this.ContactoUno.value;
    this.proveedor.contactoDos = this.ContactoDos.value;
    this.proveedor.observacion = this.Observacion.value;
  }
}
