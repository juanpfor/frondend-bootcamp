import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pathUrlService } from '../../../../GlobalConstans';
import { Observable } from 'rxjs';
import { responseApi } from '../../interfaces/responseApi';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor (private  http : HttpClient) { }


  logueoService (form : any) : Observable<responseApi> {

    const direction = pathUrlService.concat("login")

    return this.http.post<responseApi>(direction , form)
  }

}
