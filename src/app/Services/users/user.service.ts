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
  private post=pathUrlService.concat("createUser")
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<responseApi>{
    return this.httpClient.get<responseApi>(this.Api)
  }

  PostUser(form: any): Observable<responseApi> {

    const direction = pathUrlService.concat(`createUser`)

    return this.httpClient.post<responseApi>(direction, form)
  }

  create(user:responseApi):Observable<responseApi>{
      return this.httpClient.post<responseApi>(this.post,JSON.stringify(user))
  }

  getUserByID (id : string | number) : Observable<responseApi> {

    const direction = pathUrlService.concat(`viewUser/${id}`)

    return this.httpClient.get<responseApi>(direction)

  }

  updateUser (form : any , id : number | string ): Observable<responseApi> {

    const direction = pathUrlService.concat(`updateUser/${id}`)

    return this.httpClient.put<responseApi>(direction , form)

  }
}
