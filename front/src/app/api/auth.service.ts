import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http:HttpClient ) { }



  auth(credential:any){
    return this.http.post(environment.api+'/api/auth/signin',credential);
  }

  createAccount(credential:any){
    return this.http.post(environment.api+'/api/auth/signup',credential);
  }
}
