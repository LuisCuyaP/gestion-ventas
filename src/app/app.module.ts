import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//servicio
import { AuthService } from './services/auth.service';
import { ControlVentasService } from './services/control-ventas.service';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ListaProveedorComponent } from './componentes/mantenimiento/proveedor/lista-proveedor/lista-proveedor.component';
import { VerProveedorComponent } from './componentes/mantenimiento/proveedor/ver-proveedor/ver-proveedor.component';
import { AgregarEditarProveedorComponent } from './componentes/mantenimiento/proveedor/agregar-editar-proveedor/agregar-editar-proveedor.component';
import { VerProveedorResolverService } from './componentes/mantenimiento/proveedor/ver-proveedor/ver-proveedor-resolver.service';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';


const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'lista-proveedor', component: ListaProveedorComponent},
  {path: 'agregar-proveedor', component: AgregarEditarProveedorComponent  },
  {path: 'editar-proveedor/:id', component: AgregarEditarProveedorComponent  },
  {path: 'ver-proveedor/:id',
    component: VerProveedorComponent,
    resolve : {prov: VerProveedorResolverService}},
  {path: 'user/login', component: UserLoginComponent},
  {path: 'user/register', component: UserRegisterComponent},
  {path: '**', component: AppComponent}
];

//test
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaProveedorComponent,
    VerProveedorComponent,
    AgregarEditarProveedorComponent,
    UserRegisterComponent,
    UserLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ControlVentasService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
