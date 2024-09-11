import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {StorageService} from "../../../auth/services/storage/storage.service";
import {Observable} from "rxjs";

const BASIC_URL = "http://localhost:8080"

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private httpClient:HttpClient
  ) { }

  getUsers(): Observable<any> {
    return  this.httpClient.get<[]>(BASIC_URL+"/api/admin/users",
      {
        headers:this.createAuthorizationHeader()
      })
  }
  postTask(taskDto:any): Observable<any> {
    return  this.httpClient.post<[]>(BASIC_URL+"/api/admin/task", taskDto,
      {
        headers:this.createAuthorizationHeader()
      })
  }

  updateTask(id:number, taskDto:any): Observable<any> {
    return  this.httpClient.put<[]>(BASIC_URL+`/api/admin/task/${id}`, taskDto,
      {
        headers:this.createAuthorizationHeader()
      })
  }
  getAllTasks(): Observable<any> {
    return  this.httpClient.get<[]>(BASIC_URL+"/api/admin/tasks",
      {
        headers:this.createAuthorizationHeader()
      })
  }


  deleteTask(id:number): Observable<any> {
    return  this.httpClient.delete<[]>(BASIC_URL+`/api/admin/task/${id}`,
      {
        headers:this.createAuthorizationHeader()
      })
  }

  searchTask(title:string,employeeName: string): Observable<any> {
    const params = { title, employeeName };
    return  this.httpClient.get<[]>(BASIC_URL+`/api/admin/tasks/search/${params}`,
      {
        headers:this.createAuthorizationHeader()
      })
  }
  getTaskById(id:number): Observable<any> {
    return  this.httpClient.get<[]>(BASIC_URL+`/api/admin/task/${id}`,
      {
        headers:this.createAuthorizationHeader()
      })
  }
  getTasksByUserId(userId: number): Observable<any> {
    return this.httpClient.get<[]>(BASIC_URL + `/api/admin/user/${userId}`);
  }

  getCommentsById(id:number): Observable<any> {
    return  this.httpClient.get<[]>(BASIC_URL+`/api/admin/comments/${id}`,
      {
        headers:this.createAuthorizationHeader()
      })
  }

  createComment(id:number, content:string ): Observable<any> {
    const params = {
      content : content
    }
    return  this.httpClient.post<[]>(BASIC_URL+`/api/admin/task/comment/${id}`, null,
      {
        params:params,
        headers:this.createAuthorizationHeader()
      })
  }



  createAuthorizationHeader():HttpHeaders{
    let authHeaders:HttpHeaders = new HttpHeaders()
    return authHeaders.set(
      "Authorization", "Bearer " + StorageService.getToken()
    )
  }
}
