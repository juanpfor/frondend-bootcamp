import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pathUrlService } from 'GlobalConstans';
import { responseApi } from 'src/app/interfaces/responseApi';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecieService {
   Api = pathUrlService
  constructor(private httpClient:HttpClient) { }


  listarEspecies():Observable<responseApi>{
    let url = 'allespecies'
    return this.httpClient.get<responseApi>(pathUrlService + url)
  }
}
