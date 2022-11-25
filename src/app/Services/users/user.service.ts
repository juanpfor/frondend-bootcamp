import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { responseApi } from 'src/app/interfaces/responseApi';
import { Observable } from 'rxjs';
import { pathUrlService } from 'GlobalConstans';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private Api = pathUrlService.concat("allusers")
  constructor(private httpClient:HttpClient) { }
  getAll():Observable<responseApi>{
    return this.httpClient.get<responseApi>(this.Api)
  }

  PostUser(form: any): Observable<responseApi> {
    let url = 'createUser'
    return this.httpClient.post<responseApi>(pathUrlService + url, form)
  }
}
