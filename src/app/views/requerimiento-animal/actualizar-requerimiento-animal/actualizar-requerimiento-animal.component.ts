import { Component, OnInit } from '@angular/core';
import { Router  , ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-actualizar-requerimiento-animal',
  templateUrl: './actualizar-requerimiento-animal.component.html',
  styleUrls: ['./actualizar-requerimiento-animal.component.css']
})
export class ActualizarRequerimientoAnimalComponent implements OnInit {

  alimentoAnimalId : any

  constructor(
    private activeroute : ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.alimentoAnimalId = this.activeroute.snapshot.paramMap.get('id')
  }

}
