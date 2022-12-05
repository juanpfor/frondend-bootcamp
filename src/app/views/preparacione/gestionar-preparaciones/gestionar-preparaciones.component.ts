import { PreparacionesService } from './../../../Services/preparaciones/preparaciones.service';
import { Component, OnInit } from '@angular/core';
import { Preparaciones } from '../../../interfaces/preparaciones';

@Component({
  selector: 'app-gestionar-preparaciones',
  templateUrl: './gestionar-preparaciones.component.html',
  styleUrls: ['./gestionar-preparaciones.component.css']
})
export class GestionarPreparacionesComponent implements OnInit {

  userId : any = localStorage.getItem('id_user')
  preparaciones : Preparaciones[] = [];
  nameUser : string = ''

  pageActual: number = 1;
  pages: number = 8;

  constructor(
    private preparacionesServices : PreparacionesService,
  ) { }

  ngOnInit() {
    this.getPreparacionesByIDUser(this.userId)
  }


  getPreparacionesByIDUser(id : number | string) {
      this.preparacionesServices.getPreparacionByIdUser(id).subscribe(preparacion => {
        this.preparaciones = preparacion.results
      })
  }


}
