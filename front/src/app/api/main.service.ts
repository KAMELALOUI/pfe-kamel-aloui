import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private servicesUrl = 'http://localhost:8222';

  constructor(private http: HttpClient) { }

  private getHeaders() {
    return new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
  }

  publish(articleFormData: FormData): Observable<any> {
    return this.http.post(`${this.servicesUrl}/api/articles/add`, articleFormData, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }

  getArticlesList(): Observable<any> {
    return this.http.get(`${this.servicesUrl}/api/articles/list`, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }

  publishM(mediaFormData: FormData): Observable<any> {
    return this.http.post(`${this.servicesUrl}/api/media/add`, mediaFormData, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }

  getMediaList(): Observable<any> {
    return this.http.get(`${this.servicesUrl}/api/media/list`, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }

  addSite(formData: FormData): Observable<any> {
    return this.http.post(`${this.servicesUrl}/api/sites/add`, formData, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }

  getSiteList(): Observable<any> {
    return this.http.get(`${this.servicesUrl}/api/sites/list`, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }

  siteSearch(): Observable<any> {
    return this.http.get(`${this.servicesUrl}/api/sites/search`, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }

  publishMapping(mappFormData: FormData): Observable<any> {
    return this.http.post(`${this.servicesUrl}/api/heritage/add`, mappFormData, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }

  getMappingList(): Observable<any> {
    return this.http.get(`${this.servicesUrl}/api/heritage/list`, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }

  searchMapping(name: string, location: string, keyword: string): Observable<any> {
    let params = new HttpParams();
    if (name) params = params.set('name', name);
    if (location) params = params.set('location', location);
    if (keyword) params = params.set('keyword', keyword);

    return this.http.get(`${this.servicesUrl}/api/heritage/search`, { headers: this.getHeaders(), params })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError(error);
  }
}
