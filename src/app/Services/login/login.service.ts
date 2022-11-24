import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pathUrlService } from '../../../../GlobalConstans';
import { responseApi } from '../../interfaces/responseApi';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor (private  htttp : HttpClient) { }


  logueoService (form : any) {

    const direction = pathUrlService.concat("alluser")

    return this.htttp.get(direction , form)
  }

}
