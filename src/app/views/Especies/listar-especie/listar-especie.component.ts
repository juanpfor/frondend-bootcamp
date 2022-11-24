import { Component, OnInit } from '@angular/core';
import { EspecieService } from 'src/app/Services/especie/especie.service';

@Component({
  selector: 'app-listar-especie',
  templateUrl: './listar-especie.component.html',
  styleUrls: ['./listar-especie.component.css']
})
export class ListarEspecieComponent implements OnInit {
  listEspecies?: any[]
  constructor(private especieService: EspecieService) { }

  ngOnInit(): void {
    this.ListarEspecies()
  }
  ListarEspecies(): void {
    this.especieService.listarEspecies().subscribe(data => {
      this.listEspecies = data.results
      console.log(this.listEspecies);
    }

    )


  }
}
