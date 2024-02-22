import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SeguridadRutaGuard implements CanActivate {
  constructor(private authService: AuthService,
    private router:Router
    ){ }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService.isLoged){
        return true;
      }
    else{
      console.log("Acceso Denegado!");
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
