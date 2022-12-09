import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Preparaciones } from '../../../interfaces/preparaciones';
import { Alimento } from '../../../interfaces/alimento';
import { AlimentoService } from '../../../Services/alimento/alimento.service';
import { PreparacionesService } from '../../../Services/preparaciones/preparaciones.service';

@Component({
  selector: 'app-detail-preparaciones',
  templateUrl: './detail-preparaciones.component.html',
  styleUrls: ['./detail-preparaciones.component.css']
})
export class DetailPreparacionesComponent implements OnInit {

  userID: any = localStorage.getItem('id_user')
  preparaciones: Preparaciones[] = [];
  nameUser: string = ''

  preparacionID: any

  alimentos: Alimento[] = []
  alimentosfiltrados: any


  pageActual: number = 1;
  pages: number = 8;


  constructor(
    private services: AlimentoService,
    private servicesPreparacionesAlimentos: PreparacionesService,
    private activeroute: ActivatedRoute,
  ) { }

  async ngOnInit() {
    this.preparacionID = this.activeroute.snapshot.paramMap.get('id')
    this.getAlimentos(this.userID)
  }

  getAlimentos(id : number | string) {
      this.servicesPreparacionesAlimentos.getPreparacionByIdUser(id).subscribe(
        alimentos => {
          this.alimentosfiltrados = alimentos.results.filter((data : any) =>
          data.id_preparacion == this.preparacionID)
          this.alimentos = alimentos.results
          console.log(this.alimentosfiltrados[0]);

        }
      )
  }

}
