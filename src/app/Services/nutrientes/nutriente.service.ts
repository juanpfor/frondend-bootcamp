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

  listarNutrientes():Observable<responseApi>{
    let url = 'allnutrientes'
    return this.http.get<responseApi>(pathUrlService + url)
  } 
}
