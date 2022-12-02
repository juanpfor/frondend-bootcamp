import { tiponutriente } from './../../../interfaces/alimento';
import { Component, OnInit } from '@angular/core';
import { AlimentoService } from 'src/app/Services/alimento/alimento.service';
import { regiones } from 'src/app/interfaces/regiones';
import { tiponutrienter } from 'src/app/interfaces/tipoalimento';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import  Swal  from 'sweetalert2';
@Component({
  selector: 'app-registro-alimento',
  templateUrl: './registro-alimento.component.html',
  styleUrls: ['./registro-alimento.component.css']
})
export class RegistroAlimentoComponent implements OnInit {

  listregiones: regiones[] = [];
  tiponutriente: tiponutrienter[] = [];

  form : FormGroup = new FormGroup({
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
    public AlimentoService: AlimentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  async ngOnInit() {
    await this.getRegiones()
    await this.getTipoNutriente()
   }

  getRegiones () {
    this.AlimentoService.getRegiones().subscribe(data => {
       this.listregiones = data.results
    })
  }

  getTipoNutriente () {
    this.AlimentoService.getTipoNutriente().subscribe(data => {
       this.tiponutriente = data.results
    })
  }

  submit(form: any) {
    if (this.form.valid) {
      this.AlimentoService.create(form).subscribe(data => {
        if (data.status === 'success') {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: "el alimento fue creado con éxito ",
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(['dashboard/alimentos'])
        }else{
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: data.message,
            showConfirmButton: true,
          })
        }

      })
    }else {
      Swal.fire({
        position: 'center',
        icon: 'info',
        title:  "todos los campos son obligatorios ",
        showConfirmButton: false,
        timer: 1500
      })
    }
  }


}
