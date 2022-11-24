import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NutrienteService } from '../../../Services/nutrientes/nutriente.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  postFormulario = new FormGroup({
    nombre_tipo_nutriente: new FormControl('', Validators.required),
  });
  constructor(private apiservice: NutrienteService, private router:Router) {}

  ngOnInit(): void {}
  postForm(form: any) {
    if (this.postFormulario.valid) {
      this.apiservice.PostNutrientes(form).subscribe((data) => {
        console.log(data);
        this.router.navigate(['nutrientes'])
      });
    } else {
      console.log("Campos Obligatorios");

    }

    console.log(form);
  }
}
