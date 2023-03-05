import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ListaProveedorComponent } from './componentes/mantenimiento/proveedor/lista-proveedor/lista-proveedor.component';
import { VerProveedorComponent } from './componentes/mantenimiento/proveedor/ver-proveedor/ver-proveedor.component';
import { AgregarEditarProveedorComponent } from './componentes/mantenimiento/proveedor/agregar-editar-proveedor/agregar-editar-proveedor.component';
import { VerProveedorResolverService } from './componentes/mantenimiento/proveedor/ver-proveedor/ver-proveedor-resolver.service';



const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'lista-proveedor', component: ListaProveedorComponent},
  {path: 'agregar-proveedor', component: AgregarEditarProveedorComponent  },
  {path: 'editar-proveedor/:id', component: AgregarEditarProveedorComponent  },
  {path: 'ver-proveedor/:id',
    component: VerProveedorComponent,
    resolve : {prov: VerProveedorResolverService}}
];

//test
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaProveedorComponent,
    VerProveedorComponent,
    AgregarEditarProveedorComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
