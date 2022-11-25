import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'app-registrar-requerimiento-animal',
  templateUrl: './registrar-requerimiento-animal.component.html',
  styleUrls: ['./registrar-requerimiento-animal.component.css']
})
export class RegistrarRequerimientoAnimalComponent implements OnInit {

  loginRegister = new FormGroup({
    identificacion: new FormControl('', Validators.required),
    pasword: new FormControl('', Validators.required)
  })

  constructor() { }

  ngOnInit(): void { }

  RegisterAnimal(form : any) {

  }

}
