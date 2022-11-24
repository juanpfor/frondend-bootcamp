import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pathUrlService } from 'GlobalConstans';
import { catchError, Observable } from 'rxjs';
import { responseApi } from 'src/app/interfaces/responseApi';

@Injectable({
  providedIn: 'root'
})
export class AlimentoService {
  private Api = pathUrlService.concat("allaliments")
  private post=pathUrlService.concat("createaliment")
  constructor(private httpClient:HttpClient) { }
  getAll():Observable<responseApi>{
    return this.httpClient.get<responseApi>(this.Api)
  }
  httpOptions={
    headers:new HttpHeaders({
      'Content-type':'aplication/json'
    })
  }
  
  create(municipio:responseApi):Observable<responseApi>{
    return this.httpClient.post<responseApi>(this.post,JSON.stringify(municipio),this.httpOptions)
  }
  updated(alimento:responseApi) {
    
  }

}
