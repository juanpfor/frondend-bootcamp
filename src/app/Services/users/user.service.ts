import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { User } from 'src/app/interfaces/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private Api="http://152.200.173.74:8057/api/listEspecie"
  constructor(private httpClient:HttpClient) { }
  getAll():Observable<User[]>{
    return this.httpClient.get<User[]>(this.Api)
  }
}
