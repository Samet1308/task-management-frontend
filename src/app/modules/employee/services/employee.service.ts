import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {StorageService} from "../../../auth/services/storage/storage.service";
import {Observable} from "rxjs";

const BASIC_URL = "http://localhost:8080"

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private httpClient:HttpClient) { }


  getEmployeeTaskById(): Observable<any> {
    return  this.httpClient.get<[]>(BASIC_URL+"/api/employee/tasks",
      {
        headers:this.createAuthorizationHeader()
      })
  }

  updateStatus(id:number , status:string): Observable<any> {
    return  this.httpClient.get<[]>(BASIC_URL+`/api/employee/task/${id}/${status}`,
      {
        headers:this.createAuthorizationHeader()
      })
  }

  getTaskById(id:number): Observable<any> {
    return  this.httpClient.get<[]>(BASIC_URL+`/api/employee/task/${id}`,
      {
        headers:this.createAuthorizationHeader()
      })
  }

  getCommentsById(id:number): Observable<any> {
    return  this.httpClient.get<[]>(BASIC_URL+`/api/employee/comments/${id}`,
      {
        headers:this.createAuthorizationHeader()
      })
  }

  createComment(id:number, content:string ): Observable<any> {
    const params = {
      content : content
    }
    return  this.httpClient.post<[]>(BASIC_URL+`/api/employee/task/comment/${id}`, null,
      {
        params:params,
        headers:this.createAuthorizationHeader()
      })
  }


  private createAuthorizationHeader():HttpHeaders{
    let authHeaders:HttpHeaders = new HttpHeaders()
    return authHeaders.set(
      "Authorization", "Bearer" + StorageService.getToken()
    )
  }
}
