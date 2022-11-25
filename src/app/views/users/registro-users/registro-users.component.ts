import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/users/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registro-users',
  templateUrl: './registro-users.component.html',
  styleUrls: ['./registro-users.component.css']
})
export class RegistroUsersComponent implements OnInit {
 form:FormGroup=new FormGroup({
  celular:new FormControl(''),
  contrasena:new FormControl(''),
  correo:new  FormControl(''), 
  foto:new FormControl(''),
  id_usuario:new FormControl(''),
  identificacion:new FormControl(''),
  nombres:new FormControl(''),
  region_id:new FormControl(''),
  tipo_usuario:new FormControl('')
 })
  constructor(public userService:UserService,
              private Router:Router,
              private formBuilder:FormBuilder
    ) { }

  ngOnInit(): void {
   this.form=this.formBuilder.group({
    celular:['', Validators.required],
    contrasena:['', Validators.required],
    correo:['', Validators.required],
    foto:['', Validators.required],
    id_usuario:['', Validators.required],
    identificacion:['', Validators.required],
    nombres:['', Validators.required],
    region_id:['', Validators.required],
    tipo_usuario:['', Validators.required],
   })
  }
  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.userService.create(this.form.value).subscribe(res => {
         console.log('Person created successfully!');
      
    })
  }
}
