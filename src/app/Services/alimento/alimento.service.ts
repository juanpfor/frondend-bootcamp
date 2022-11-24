import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pathUrlService } from 'GlobalConstans';
import { Observable } from 'rxjs';
import { Alimento } from 'src/app/interfaces/alimento';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AlimentoService {
  private Api = pathUrlService.concat("allaliments")
  constructor(private httpClient:HttpClient) { }
  getAll():Observable<Alimento[]>{
    return this.httpClient.get<Alimento[]>(this.Api)
  }
}
