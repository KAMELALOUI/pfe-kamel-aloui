import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http:HttpClient) { }

// article services 
  publish(articleFormData:FormData){
    const headers = new HttpHeaders({ 
      'Authorization': ''+localStorage.getItem('token')
    });

    return this.http.post(environment.services+'/api/articles/add', articleFormData, { headers });
  }


  getArticlesList(){
    const headers = new HttpHeaders({ 
      'Authorization': ''+localStorage.getItem('token')
    });

    return this.http.get(environment.services+'/api/articles/list', { headers });
  }

// media services 
publishM(mediaFormData:FormData){
  const headers = new HttpHeaders({ 
    'Authorization': ''+localStorage.getItem('token')
  });

  return this.http.post(environment.services+'/api/media/add', mediaFormData, { headers });
}


getMediaList(){
  const headers = new HttpHeaders({ 
    'Authorization': ''+localStorage.getItem('token')
  });

  return this.http.get(environment.services+'/api/media/list', { headers });
}
publishsite(siteFormData: FormData) {
  const headers = new HttpHeaders({
    'Authorization': '' + localStorage.getItem('token')
  });

  return this.http.post(environment.services + '/api/sites/add', siteFormData, { headers });
}

getSiteList() {
  const headers = new HttpHeaders({
    'Authorization': '' + localStorage.getItem('token')
  });

  return this.http.get(environment.services + '/api/sites/list', { headers });
}

sitesearch() {
  const headers = new HttpHeaders({
    'Authorization': '' + localStorage.getItem('token')
  });

  return this.http.get(environment.services + '/api/sites/search', { headers });
}

// mapping services
publishMapping(mappFormData: FormData) {
  const headers = new HttpHeaders({
    'Authorization': '' + localStorage.getItem('token')
  });

  return this.http.post(environment.services + '/api/heritage/add', mappFormData, { headers });
}

getMappingList() {
  const headers = new HttpHeaders({
    'Authorization': '' + localStorage.getItem('token')
  });

  return this.http.get(environment.services + '/api/heritage/list', { headers });
}

searchMapping(name: string, location: string, keyword: string) {
  const headers = new HttpHeaders({
    'Authorization': '' + localStorage.getItem('token')
  });

  let params = new HttpParams();
  if (name) params = params.set('name', name);
  if (location) params = params.set('location', location);
  if (keyword) params = params.set('keyword', keyword);

  return this.http.get(environment.services + '/api/heritage/search', { headers, params });
}
}