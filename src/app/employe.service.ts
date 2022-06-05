import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Employe } from './employe';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  private baseUrl = 'http://localhost:8080/api/employees';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.baseUrl+ '/')
    .pipe(
      catchError(this.errorHandler)
    );
  } 

  create(employe : Employe): Observable<any> {
    return this.httpClient.post(this.baseUrl+'/create', JSON.stringify(employe), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  getOne(id: string): Observable<any> {
    return this.httpClient.get(this.baseUrl+'/details/'+ id)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  update(id: string, employe: Employe): Observable<any> {
    return this.httpClient.put(this.baseUrl+'/update/'+id, JSON.stringify(employe), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  delete(id:string): Observable<any> {
    return this.httpClient.delete(this.baseUrl+'/delete/'+id)
    .pipe(
      catchError(this.errorHandler)
    );
  }
  
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
} 
