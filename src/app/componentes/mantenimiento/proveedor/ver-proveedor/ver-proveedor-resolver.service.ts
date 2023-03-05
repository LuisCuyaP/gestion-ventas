import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Proveedor } from 'src/app/model/proveedor';
import { Observable, of } from 'rxjs';
import { ControlVentasService } from 'src/app/services/control-ventas.service';
import { catchError, map } from 'rxjs/operators';


@Injectable({providedIn: 'root'})

export class VerProveedorResolverService implements Resolve<Proveedor>{

  constructor(private router: Router,private controlVentasService: ControlVentasService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<Proveedor>|Promise<Proveedor>|Proveedor
  {
    const propId = route.params['id'];
    return this.controlVentasService.getProveedor(+propId).pipe(
      catchError(err =>
        of('error', err)
        //this.router.navigate(['/']);
      )
    );
}
}
