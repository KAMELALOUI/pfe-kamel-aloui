import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http:HttpClient) { }


  publish(articleFormData:FormData){
    const headers = new HttpHeaders({ 
      'Authorization': ''+localStorage.getItem('token')
    });

    return this.http.post(environment.service_article+'/api/articles/add', articleFormData, { headers });
  }


  getArticlesList(){
    const headers = new HttpHeaders({ 
      'Authorization': ''+localStorage.getItem('token')
    });

    return this.http.get(environment.service_article+'/api/articles/list', { headers });
  }
}
