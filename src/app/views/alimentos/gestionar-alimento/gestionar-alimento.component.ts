import { Component, OnInit } from '@angular/core';
import { Alimento } from 'src/app/interfaces/alimento';
import { AlimentoService } from 'src/app/Services/alimento/alimento.service';

@Component({
  selector: 'app-gestionar-alimento',
  templateUrl: './gestionar-alimento.component.html',
  styleUrls: ['./gestionar-alimento.component.css']
})
export class GestionarAlimentoComponent implements OnInit {
 
  alimentos: any[] = []
  constructor(private AlimentoService:AlimentoService) { }

  ngOnInit(): void {
    // this.getAll()
  }
  getAll():void{
    this.AlimentoService.getAll().subscribe(
      data=>{
        console.log(data);
        this.alimentos = data.results;

        
      }
    )
    
  }
}
