import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pathUrlService } from 'GlobalConstans';
import { Observable } from 'rxjs';
import { responseApi } from 'src/app/interfaces/responseApi';

@Injectable({
  providedIn: 'root'
})
export class ReqAnimalService {

  constructor(private http: HttpClient) { }

  listarReqAnimal(): Observable<responseApi> {
    let url = 'allreqanimals'
    return this.http.get<responseApi>(pathUrlService + url)
  }

  deleteAnimalReq(id_tipo_nutriente:number):Observable<responseApi>{
    let url = 'deletealiment'
    return this.http.delete<responseApi>(pathUrlService + url + '/' + id_tipo_nutriente)
  }

}