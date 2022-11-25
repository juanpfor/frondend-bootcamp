import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { responseApi } from 'src/app/interfaces/responseApi';
import { Observable } from 'rxjs';
import { pathUrlService } from 'GlobalConstans';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor(private http: HttpClient) { }



  getAnimals(): Observable<responseApi> {

    const direction = pathUrlService.concat("all_req_animals")

    return this.http.get<responseApi>(direction)
  }
}
