import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlimentoService } from 'src/app/Services/alimento/alimento.service';
import { Alimento } from 'src/app/interfaces/alimento';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-alimento',
  templateUrl: './actualizar-alimento.component.html',
  styleUrls: ['./actualizar-alimento.component.css']
})
export class ActualizarAlimentoComponent implements OnInit {

  aliment: any = []
  listregiones: any[] = [];
  tiponutriente: any[] = [];

  alimentoID: any


  form: FormGroup = new FormGroup({
    nombre_alimento: new FormControl('', Validators.required),
    materia_seca: new FormControl('', Validators.required),
    e_m_aves: new FormControl('', Validators.required),
    e_m_cerdos: new FormControl('', Validators.required),
    proteina_cruda: new FormControl('', Validators.required),
    fibra_cruda: new FormControl('', Validators.required),
    ext_etereo: new FormControl('', Validators.required),
    calcio: new FormControl('', Validators.required),
    fosf_disp: new FormControl('', Validators.required),
    sodio: new FormControl('', Validators.required),
    arginina: new FormControl('', Validators.required),
    lisina: new FormControl('', Validators.required),
    metionina: new FormControl('', Validators.required),
    triptofano: new FormControl('', Validators.required),
    met_cis: new FormControl('', Validators.required),
    treonina: new FormControl('', Validators.required),
    regiones_ids: new FormControl('', Validators.required),
    tipo_nutriente_id: new FormControl('', Validators.required),
  });
  constructor(
    private activeroute: ActivatedRoute,
    private alimentoService: AlimentoService,
    private route: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.alimentoID = this.activeroute.snapshot.paramMap.get('id')
    this.getalimentByID(this.alimentoID)
    this.getRegiones()
    this.getTipoNutriente()
  }

  getalimentByID(id : any) {
    this.alimentoService.getAlimentoById(id).subscribe(data => {
      this.aliment = data.results
      if (data.status == 'success') {
        this.form.setValue({
          "nombre_alimento" : this.aliment.nombre_alimento,
          "materia_seca" : this.aliment.materia_seca,
          "e_m_aves" : this.aliment.e_m_aves,
          "e_m_cerdos" : this.aliment.e_m_cerdos,
          "proteina_cruda" : this.aliment.proteina_cruda,
          "fibra_cruda" : this.aliment.fibra_cruda,
          "ext_etereo" : this.aliment.ext_etereo,
          "calcio" : this.aliment.calcio,
          "fosf_disp" : this.aliment.fosf_disp,
          "arginina" : this.aliment.arginina,
          "lisina" : this.aliment.lisina,
          "metionina" : this.aliment.metionina,
          "triptofano" : this.aliment.triptofano,
          "tipo_nutriente_id" : this.aliment.tiponutriente.id_tipo_nutriente,
          "met_cis" : this.aliment.met_cis,
          "treonina" : this.aliment.treonina,
          "sodio" : this.aliment.sodio,
          "regiones_ids" : this.aliment.sodio,
        })
      }
    })
  }

  getRegiones () {
    this.alimentoService.getRegiones().subscribe(data => {
       this.listregiones = data.results
    })
  }

  getTipoNutriente () {
    this.alimentoService.getTipoNutriente().subscribe(data => {
       this.tiponutriente = data.results
    })
  }

  ActualizarAlimento(form : any ) {

    console.log(form);

    this.alimentoService.updated(form , this.alimentoID).subscribe(data => {

      if (this.form.valid) {
        if (data.status == 'success') {
          Swal.fire({
            title: 'Actualizado',
            text: 'alimento actualizada con exito',
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Aceptar'
          })
          this.route.navigate(['dashboard/alimentos'])
        }else {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: data.message,
            showConfirmButton: false,
            timer: 1500
          })
        }
      }else {
        Swal.fire({
          position: 'center',
          icon: 'info',
          title:  "todos los campos son obligatorios ",
          showConfirmButton: false,
          timer: 1500
        })
      }
    })

  }

}
