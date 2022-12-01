import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pathUrlService } from 'GlobalConstans';
import { catchError, Observable } from 'rxjs';
import { responseApi } from 'src/app/interfaces/responseApi';

@Injectable({
  providedIn: 'root'
})
export class AlimentoService {
  Api = pathUrlService.concat("allaliments")

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

  create(form : any):Observable<responseApi>{

    return this.httpClient.post<responseApi>(this.post, form )
  }
  updated(form : any , id : any  ) :Observable<responseApi> {

    const direction = pathUrlService.concat(`updatealiment/${id}`)

    return this.httpClient.put<responseApi>( direction, form )

  }

  deleteAlimento(id_alimento:number | string):Observable<responseApi>{
    let url = 'deletealiment'
    return this.httpClient.delete<responseApi>(pathUrlService + url + '/' + id_alimento)
  }

  getAlimentoById(id_alimento:string):Observable<responseApi>{
    const direction = pathUrlService.concat(`onealiment/${id_alimento}`)
    return this.httpClient.get<responseApi>(direction)
  }

  getRegiones () : Observable<responseApi> {
    const uriPaht  =  pathUrlService.concat("allregiones")

    return this.httpClient.get<responseApi>(uriPaht)
  }

  getTipoNutriente () : Observable<responseApi> {
    const uriPaht  =  pathUrlService.concat("allnutrientes")

    return this.httpClient.get<responseApi>(uriPaht)
}
}
