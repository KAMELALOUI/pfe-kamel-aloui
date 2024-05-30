import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http:HttpClient , private router: Router) { }



  auth(credential:any){
    return this.http.post(environment.api+'/api/auth/signin',credential);
  }

  createAccount(credential:any){
    return this.http.post(environment.api+'/api/auth/signup',credential);
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
