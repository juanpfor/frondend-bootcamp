import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pathUrlService } from 'GlobalConstans';
import { responseApi } from 'src/app/interfaces/responseApi';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecieService {
  
  constructor(private httpClient:HttpClient) { }


  listarEspecies():Observable<responseApi>{
    let url = 'allespecies'
    return this.httpClient.get<responseApi>(pathUrlService + url)
  }

  deleteEspecie(id_especie:number):Observable<responseApi>{
    let url = 'deleteespecie'
    return this.httpClient.delete<responseApi>(pathUrlService + url + '/' + id_especie)
  }
  actualizarEspecie(id_especie:number, especie: any):Observable<responseApi>{
    let url = 'updateespecie'
    return this.httpClient.put<responseApi>(pathUrlService + url + '/' + id_especie, especie)
  }
  getEspecieById(id_especie:string):Observable<responseApi>{
    let url = 'oneespecie'
    return this.httpClient.get<responseApi>(pathUrlService + url + '/' + id_especie)
  }
  updateEspecie(id_especie:number, especie:any):Observable<responseApi>{
    let url = 'updateespecie'
    return this.httpClient.put<responseApi>(pathUrlService + url + '/' + id_especie, especie)
  }
}
