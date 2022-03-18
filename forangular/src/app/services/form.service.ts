import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable ,throwError } from 'rxjs';
import { FormCls } from '../form/forms';
import { tap,catchError } from 'rxjs/operators';

@Injectable()
export class FormService {
    
  path= "http://localhost:3000/forms"

  constructor(private http:HttpClient) { }
  getForms(categoryID:number):Observable<FormCls[]>{
    console.log(categoryID)


   
  

    return this.http.get<FormCls[]>(this.path).pipe
    (
      
      catchError(this.handleError)
    );
  }

    addForm(form:FormCls): Observable<FormCls>{
        const httpOptions ={
          headers:new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization':'Token'
          })
        }
        return this.http.post<FormCls>(this.path,form).pipe(
          tap(data=> console.log(JSON.stringify(data))),
          catchError(this.handleError)
        );
      }
      
  handleError(err:HttpErrorResponse)
  {
    let errormessage =""
    if(err.error instanceof ErrorEvent)
    {
      errormessage = "Bir hata oluştu " + err.error.message

    }
    else{
      errormessage = "Sistemsel bir hata oluştu "
    }
    return throwError(errormessage)
  }

}