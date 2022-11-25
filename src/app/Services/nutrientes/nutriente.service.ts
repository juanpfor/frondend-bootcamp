import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pathUrlService } from 'GlobalConstans';
import { Observable } from 'rxjs';
import { responseApi } from 'src/app/interfaces/responseApi';

@Injectable({
  providedIn: 'root'
})
export class NutrienteService {

  constructor(private http: HttpClient) { }

  listarNutrientes(): Observable<responseApi> {
    let url = 'allnutrientes'
    return this.http.get<responseApi>(pathUrlService + url)
  }

  PostNutrientes(form: any): Observable<responseApi> {
    let url = 'createtypenutriente'
    return this.http.post<responseApi>(pathUrlService + url, form)
  }

  deleteNutrientes(id_tipo_nutriente:number):Observable<responseApi>{
    let url = 'deletetypenutriente'
    return this.http.delete<responseApi>(pathUrlService + url + '/' + id_tipo_nutriente)
  }
}
