import { Component, OnInit } from '@angular/core';
import { NutrienteService } from 'src/app/Services/nutrientes/nutriente.service';

@Component({
  selector: 'app-gestionar',
  templateUrl: './gestionar.component.html',
  styleUrls: ['./gestionar.component.css']
})
export class GestionarComponent implements OnInit {

  listNutrientes?: any[]
  constructor(private nutienteServes: NutrienteService) { }
  
  ngOnInit(): void {
    this.listarNutrientes()
  }
  
  listarNutrientes():void{
    this.nutienteServes.listarNutrientes().subscribe(data =>{
      this.listNutrientes = data.results
      console.log( this.listNutrientes);
      
    })
  }

}
