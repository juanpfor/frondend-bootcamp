import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { EspecieService } from '../../../Services/especie/especie.service';
import { ReqAnimalService } from '../../../Services/reqAlimento/req-animal.service';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-registrar-requerimiento-animal',
  templateUrl: './registrar-requerimiento-animal.component.html',
  styleUrls: ['./registrar-requerimiento-animal.component.css']
})
export class RegistrarRequerimientoAnimalComponent implements OnInit {

  listespecies : any

  reqAnimal : any

  formRequerimientoAnimal: FormGroup = new FormGroup({
    nombre_fase: new FormControl('', Validators.required),
    m_s: new FormControl('', Validators.required),
    e_m_ave: new FormControl('', Validators.required),
    e_d_cerdo: new FormControl('', Validators.required),
    proteina: new FormControl('', Validators.required),
    fibra_cruda: new FormControl('', Validators.required),
    ext_etereo: new FormControl('', Validators.required),
    calcio: new FormControl('', Validators.required),
    fosf_disp: new FormControl('', Validators.required),
    sodio: new FormControl('', Validators.required),
    arginina: new FormControl('', Validators.required),
    lisina: new FormControl('', Validators.required),
    metionina: new FormControl('', Validators.required),
    met_cis: new FormControl('', Validators.required),
    treonina: new FormControl('', Validators.required),
    ceniza: new FormControl('', Validators.required),
    triptofano: new FormControl('', Validators.required),
    especie_id: new FormControl('', Validators.required),

  })

  constructor(
    private serviceespecie: EspecieService,
    private reqanimalService: ReqAnimalService,
    private route: Router,
  ) { }

  ngOnInit() {
    this.getEspecies()
   }

  RegisterAnimal(form : any) {
  }

  getEspecies() {
    this.serviceespecie.listarEspecies().subscribe(data => {

      this.listespecies = data.results
    })
  }

  createReqAnimal(form : any ){
    if (this.formRequerimientoAnimal.valid) {
      this.reqanimalService.createReAnimal(form).subscribe(data => {
        if (data.status == 'success') {
          Swal.fire({
            title: 'Creado',
            text: 'requerimiento creado con exito',
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Aceptar'
          })
          this.route.navigate(['dashboard/gestionarAnimal'])
        } else {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: data.message,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    } else {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: "todos los campos son obligatorios ",
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

}
