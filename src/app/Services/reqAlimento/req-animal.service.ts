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

  deleteAnimalReq(id :number):Observable<responseApi>{
    const direction = pathUrlService.concat(`delete_req_animal/${id}`)
    return this.http.delete<responseApi>(direction)
  }
  getReqAnimalByID (id : number | string ):Observable<responseApi> {
    const direction = pathUrlService.concat(`oneanimals/${id}`)
    return this.http.get<responseApi>(direction)
  }
  updateReqAnimal (form : any , id : number | string ) :Observable<responseApi>{
    const direction = pathUrlService.concat(`update_req_animal/${id}`)
    return this.http.put<responseApi>(direction , form)
  }
  createReAnimal (form : any ) :Observable<responseApi>{
    const direction = pathUrlService.concat(`create_req_animal`)
    return this.http.post<responseApi>(direction , form)
  }

}
