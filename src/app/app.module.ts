import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ListaProveedorComponent } from './componentes/mantenimiento/proveedor/lista-proveedor/lista-proveedor.component';

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'lista-proveedor', component: ListaProveedorComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaProveedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
