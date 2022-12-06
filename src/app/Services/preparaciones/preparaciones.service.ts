import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pathUrlService } from '../../../../GlobalConstans';
import { Observable } from 'rxjs';
import { responseApi } from '../../interfaces/responseApi';

@Injectable({
  providedIn: 'root'
})
export class PreparacionesService {

  constructor(
    private httt : HttpClient ,
  ) { }


  getPreparacionByIdUser(id : string | number ) :Observable<responseApi>{
    const direction = pathUrlService.concat(`preparacionbyuser/${id}`)
    return this.httt.get<responseApi>(direction)
  }

  getAllPreparacionesalimentos ():Observable<responseApi> {
    const direction = pathUrlService.concat(`allpreparacionesalimentos`)
    return this.httt.get<responseApi>(direction)
  }

}
