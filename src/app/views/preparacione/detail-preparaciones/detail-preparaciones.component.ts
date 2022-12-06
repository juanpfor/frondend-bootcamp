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

  puserId: any = localStorage.getItem('id_user')
  preparaciones: Preparaciones[] = [];
  nameUser: string = ''

  preparacionID: any

  alimentos: Alimento[] = []
  alimentosfiltrados: any[] = []

  preparacionesAlimentos: any[] = [];

  pageActual: number = 1;
  pages: number = 8;


  constructor(
    private services: AlimentoService,
    private servicesPreparacionesAlimentos: PreparacionesService,
    private activeroute: ActivatedRoute,
  ) { }

  async ngOnInit() {
    this.preparacionID = this.activeroute.snapshot.paramMap.get('id')
    await this.getAllAliments()
    await this.getAllPreparacionAlimentos()
  }

  async getAllAliments() {
    await this.services.getAll().subscribe(alimets => {
      this.alimentos = alimets.results
    })
  }
  async getAllPreparacionAlimentos () {
    await this.servicesPreparacionesAlimentos.getAllPreparacionesalimentos().subscribe(data => {
      this.preparacionesAlimentos = this.filterPreparacionByID(data.results)
      console.log(this.alimentos);
      console.log(this.preparacionesAlimentos);

      this.nameAlimetsByID(this.preparacionesAlimentos, this.alimentos)

    })
  }
  filterPreparacionByID(data: any[]) {
    const alimentos = data.filter(aliment => aliment.preparacion_id == this.preparacionID)
    return alimentos
  }

  async nameAlimetsByID(listpreparaciones: any[], allAlimentos: any[]) {
    let localarray
    let listalimensts: any[] = []
    for (let aliment of listpreparaciones) {
      localarray = await allAlimentos.filter(data => data.id_alimentos == aliment.alimento_id)

      if (localarray != null || localarray != '') {
        listalimensts.push(localarray)
      }
    }

    this.alimentosfiltrados = listalimensts
    console.log(this.alimentosfiltrados);

  }
}
