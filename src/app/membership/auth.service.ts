import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthService {
  status:boolean=false;
 List: String[] =[
 "Sandip","Gore"
 ]
  validate(user: string, password: string): boolean {
   if(this.List.includes(user))
      return true;

   return false;

 }

 logout(): any {   }
 getUser(): any {   }
 isLoggedIn(): boolean {   return false;  }
}
