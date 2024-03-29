import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Insert} from './insert';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  url: string = "http://localhost:33953/api/Home";
  constructor(private _http:HttpClient) { }

  Create(insert:Insert):Observable<Insert>{
    let httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json');
    let options = {
      headers: httpHeaders
    };
    return this._http.post<Insert>(this.url,insert, options);
  }

  GetStudents():Observable<any>{
    return this._http.get<any>("http://localhost:33953/api/Home");
  }

  GetStudentById(id:number):Observable<any>{
    return this._http.get<any>("http://localhost:33953/api/Home/"+id);
  }


  UpdateStudent(insert:Insert):Observable<Insert>{
    let httpHeaders = new HttpHeaders()
    .set('Content-Type','application/json');
    let options ={
      headers:httpHeaders
    };
    return this._http.put<Insert>(this.url,insert,options);
  }
  Delete(e:number):Observable<any>{
 let httpHeaders = new HttpHeaders()
    
    let options ={
      headers:httpHeaders
    };
    return this._http.delete<any>("http://localhost:33953/api/Home/"+e,options);
  }
}
