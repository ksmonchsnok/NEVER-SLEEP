import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse,HttpHeaders,} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public apiPrefix = '';

  constructor(public http: HttpClient) {}

  HttpGet(route: string) {
    return this.http
      .get<any>(this.url + route, this.httpOptions)
      .pipe(map(this.handleStatus()), catchError(this.handleError));
  }

  HttpPost(route: string, data?: any) {
    return this.http
      .post<any>(this.url + route, data, this.httpOptions)
      .pipe(map(this.handleStatus()), catchError(this.handleError));
  }

  HttpDelete(route: string) {
    return this.http
      .delete<any>(this.url + route, this.httpOptions)
      .pipe(map(this.handleStatus()), catchError(this.handleError));
  }

  private handleStatus() {
    return (response: any) => {
      if (response.status === 200) {
        return response.body;
      }
    };
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

  private get url() {
    return environment.endpoint + this.apiPrefix;
  }

  private get httpOptions(): any {
    return {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      observe: 'response',
      responseType: 'json',
    };
  }
}