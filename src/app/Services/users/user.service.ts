import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { User } from 'src/app/interfaces/user';
import { Observable } from 'rxjs';
import { pathUrlService } from 'GlobalConstans';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private Api = pathUrlService.concat("allusers")
  constructor(private httpClient:HttpClient) { }
  getAll():Observable<User[]>{
    return this.httpClient.get<User[]>(this.Api)
  }
}
