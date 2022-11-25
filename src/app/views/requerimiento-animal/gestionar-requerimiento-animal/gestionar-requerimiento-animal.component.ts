import { Component, OnInit } from '@angular/core';
import { AnimalsService } from "../../../Services/animals/animals.service";
import { Routes, RouterModule } from '@angular/router';
@Component({
  selector: 'app-gestionar-requerimiento-animal',
  templateUrl: './gestionar-requerimiento-animal.component.html',
  styleUrls: ['./gestionar-requerimiento-animal.component.css']
})
export class GestionarRequerimientoAnimalComponent implements OnInit {

  animals : any

  constructor(private serviAnimal : AnimalsService ) { }

  ngOnInit() {
    this.listarRequerimientoAnimal()
  }

  listarRequerimientoAnimal() {
    this.serviAnimal.getAnimals().subscribe(data => {
      console.log(data.results);
      this.animals = data.results
    })
  }

}
