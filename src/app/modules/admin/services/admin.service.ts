import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {StorageService} from "../../../auth/services/storage/storage.service";
import {Observable} from "rxjs";

const BASIC_URL = ["http://localhost:8080"]

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
  createAuthorizationHeader():HttpHeaders{
    let authHeaders:HttpHeaders = new HttpHeaders()
    return authHeaders.set(
      "Authorization", "Bearer" + StorageService.getToken()
    )
  }
}
