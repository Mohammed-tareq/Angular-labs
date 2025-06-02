import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { AuthService } from "../service/auth.service";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private authSer: AuthService) { }

  canActivate(): boolean {

    if (this.authSer.isLoggedIn()) {
      return true;
    } else {
      alert("You are not logged in");
      return false;

    }
  }
}
