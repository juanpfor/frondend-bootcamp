import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EspecieService } from 'src/app/Services/especie/especie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-especie',
  templateUrl: './actualizar-especie.component.html',
  styleUrls: ['./actualizar-especie.component.css']
})
export class ActualizarEspecieComponent implements OnInit {
  id: any;
  nombreEspecie = {}
  EspecieForm: FormGroup
  especie = { nombre_especie: '' }
  constructor(private aRoute: ActivatedRoute,
    private especieService: EspecieService,
    private route: Router,
    private fb: FormBuilder,) {
    this.EspecieForm = this.fb.group({
      nombre_especie: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id_especie');
  }

  ngOnInit(): void {
    this.especieService.getEspecieById(this.id + "").subscribe(data => {
      this.especie.nombre_especie = data.results.nombre_especie
      this.EspecieForm.patchValue({
        nombre_especie: data.results.nombre_especie
      })
    })
  }
  ActualizaEspecie(): void {
   
    this.especie = {
      nombre_especie:this.EspecieForm.get('nombre_especie')?.value
    }
    console.log(this.especie);
    this.especieService.actualizarEspecie(this.id, this.especie).subscribe(data => {
      if (data.status == 'success') {
        Swal.fire({
          title: 'Actualizado',
          text: 'Especie actualizada con exito',
          icon: 'success',
          // showCancelButton: true,
          confirmButtonColor: '#3085d6',
          // cancelButtonColor: '#d33',
          confirmButtonText: 'Aceptar'
        })
        this.route.navigate(['/especie'])
      }
    })


  }

}
