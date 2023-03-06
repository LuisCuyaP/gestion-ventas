import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Proveedor } from 'src/app/model/proveedor';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ControlVentasService } from 'src/app/services/control-ventas.service';

@Component({
  selector: 'app-agregar-editar-proveedor',
  templateUrl: './agregar-editar-proveedor.component.html',
  styleUrls: ['./agregar-editar-proveedor.component.css']
})
export class AgregarEditarProveedorComponent implements OnInit {
  id: number = 0;
  operacion: string = "";
  addProveedorForm: FormGroup;
  proveedor = new Proveedor();

  constructor(private router: Router,
              private fb: FormBuilder,
              private aRoute: ActivatedRoute,
              private controlVentasService : ControlVentasService,
              private alertity: AlertifyService,
              ) {

    this.CreateAddProveedorForm();
    //this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
    this.id = +localStorage.getItem('PID')!;
  }

  ngOnInit(): void {
    if(!localStorage.getItem('userName')){
      this.alertity.error('Debe iniciar sesion para agregar un proveedor');
      this.router.navigate(['/user/login']);
    }

    this.CreateAddProveedorForm();
    if(this.id != 0){
      this.operacion = "Editar";
      this.obtenerProveedor(this.id);
    }else{
      //validaciones reactivos con el formulario
      this.operacion = "Agregar";

    }
  }

  obtenerProveedor(id: number){
     this.controlVentasService.getProveedor(id).subscribe(data => {
          this.BasicInfo.patchValue({
                Ruc : data.ruc,
                RazonSocial : data.razonSocial,
                NombreComercial : data.nombreComercial,
                Direccion : data.direccion,
                Telefono : data.telefono,
                Email : data.email,
                ContactoUno : data.contactoUno,
                ContactoDos : data.contactoDos,
                Observacion : data.observacion
          });
    })
     //console.log(id);
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
      if(this.id != 0){
        this.proveedor.id = this.id;
        this.editarMascota(this.id);
      }else{
        this.agregarProveedor();
      }


  }


  agregarProveedor(){
    this.controlVentasService.addProveedor(this.proveedor).subscribe(
      ()=>{
        this.alertity.success("El proveedor aparece exitosamente en el sitio web");
        console.log(this.addProveedorForm);
        this.router.navigate(['/lista-proveedor']);
    });
  }

  editarMascota(id: number){
    this.controlVentasService.updateProveedor(id, this.proveedor).subscribe(
      () =>{
        this.alertity.success("El proveedor se edito exitosamente en el sitio web");
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
