import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, ValidationErrors, Validators } from '@angular/forms';
import { UserForRegister } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';
import { AlertifyService } from 'src/app/services/alertify.service';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  user: UserForRegister;
  userSubmitted: boolean;
  registerationForm: FormGroup;
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private alertify: AlertifyService
              ) { }

  ngOnInit(): void {
    this.createRegisterationForm();
  }

  createRegisterationForm(){
    this.registerationForm = this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, Validators.required],
      mobile: [null, [Validators.required, Validators.maxLength(10)]]
    }, { Validators: this.passwordMatchingValidator });
  }

  //valida que la contraseña y la confirmacion de contraseña coincidan
  passwordMatchingValidator(fc: AbstractControl): ValidationErrors | null {
    return fc.get('password')?.value === fc.get('confirmPassword')?.value ? null :
      { notmatched: true }
  };

  onReset() {
    this.userSubmitted = false;
    this.registerationForm.reset();
  }
  onSubmit(){
    console.log(this.registerationForm.value);
    this.userSubmitted = true;

    //valida que cuando le de en agregar si los campos cualquiera basta uno este vacio no entre al if
    if(this.registerationForm.valid){
      //this.user = Object.assign(this.user, this.registerationForm.value);
      //this.userService.addUser(this.user);
      this.authService.registerUser(this.userData()).subscribe(() =>
      {
        this.onReset();
        this.alertify.success("Se ha registrado correctamente");
      });
    }
  }

  userData(): UserForRegister{
    return this.user = {
      userName : this.userName.value,
      email: this.email.value,
      password : this.password.value,
      mobile: this.mobile.value
    }
  }


  // ------------------------------------
  // Getter methods for all form controls
  // ------------------------------------
  get userName() {
      return this.registerationForm.get('userName') as FormControl;
  }
  get email() {
      return this.registerationForm.get('email') as FormControl;
  }
  get password() {
      return this.registerationForm.get('password') as FormControl;
  }
  get confirmPassword() {
      return this.registerationForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
      return this.registerationForm.get('mobile') as FormControl;
  }
  // ------------------------

}
