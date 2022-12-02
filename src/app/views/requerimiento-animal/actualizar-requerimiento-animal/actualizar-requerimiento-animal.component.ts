import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EspecieService } from '../../../Services/especie/especie.service';
import { ReqAnimalService } from '../../../Services/reqAlimento/req-animal.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-actualizar-requerimiento-animal',
  templateUrl: './actualizar-requerimiento-animal.component.html',
  styleUrls: ['./actualizar-requerimiento-animal.component.css']
})
export class ActualizarRequerimientoAnimalComponent implements OnInit {

  reqanimalID: any

  reqAnimal: any

  listespecies: any

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
    private activeroute: ActivatedRoute,
    private route: Router,
    private serviceespecie: EspecieService,
    private reqanimalService: ReqAnimalService,
  ) { }

  ngOnInit(): void {
    this.reqanimalID = this.activeroute.snapshot.paramMap.get('id')
    this.getEspecies()
    this.getReqAnimalById(this.reqanimalID)
  }

  getEspecies() {
    this.serviceespecie.listarEspecies().subscribe(data => {
      this.listespecies = data.results
    })
  }

  getReqAnimalById(id: any) {

    this.reqanimalService.getReqAnimalByID(id).subscribe(data => {
      console.log(data.results);

      this.reqAnimal = data.results

      this.formRequerimientoAnimal.setValue({
        "nombre_fase": data.results.nombre_fase,
        "m_s": data.results.m_s,
        "e_m_ave": data.results.e_m_ave,
        "e_d_cerdo": data.results.e_d_cerdo,
        "proteina": data.results.proteina,
        "fibra_cruda": data.results.fibra_cruda,
        "ext_etereo": data.results.ext_etereo,
        "calcio": data.results.calcio,
        "fosf_disp": data.results.fosf_disp,
        "sodio": data.results.sodio,
        "arginina": data.results.arginina,
        "lisina": data.results.lisina,
        "metionina": data.results.metionina,
        "met_cis": data.results.met_cis,
        "treonina": data.results.treonina,
        "ceniza": data.results.ceniza,
        "triptofano": data.results.triptofano,
        "especie_id": data.results.especie_id,
      })
    })
  }

  updateRequiredAnimal(form: any) {
    console.log(form);

    if (this.formRequerimientoAnimal.valid) {
      this.reqanimalService.updateReqAnimal(form, this.reqanimalID).subscribe(data => {
        if (data.status == 'success') {
          Swal.fire({
            title: 'Actualizado',
            text: 'requerimiento actualizada con exito',
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Aceptar'
          })
          this.route.navigate(['dashboard/gestionarAnimal'])
        }else {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: data.message,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    }else{
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title:  "todos los campos son obligatorios ",
        showConfirmButton: false,
        timer: 1500
      })
    }





  }

}
