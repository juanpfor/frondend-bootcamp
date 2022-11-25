import { Component, OnInit } from '@angular/core';
import { AlimentoService } from 'src/app/Services/alimento/alimento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registro-alimento',
  templateUrl: './registro-alimento.component.html',
  styleUrls: ['./registro-alimento.component.css']
})
export class RegistroAlimentoComponent implements OnInit {

  form: FormGroup=new FormGroup({
    nombre_alimento:  new FormControl(''),
    materia_seca:  new FormControl(''),
    e_m_aves:  new FormControl(''),
    e_m_cerdos:  new FormControl(''),
    proteina_cruda:  new FormControl(''),
    fibra_cruda:  new FormControl(''),
    ext_etereo:  new FormControl(''),
    calcio:  new FormControl(''),
    fosf_disp:  new FormControl(''),
    sodio:  new FormControl(''),
    arginina:  new FormControl(''),
    lisina:  new FormControl(''),
    metionina:  new FormControl(''),
    met_cis:  new FormControl(''),
    treonina:  new FormControl(''),
    tipo_nutriente_id:  new FormControl(''),
    region_id:  new FormControl(''),
    createdAt:  new FormControl(''),
    updatedAt:  new FormControl(''),
  });

  constructor(
    public AlimentoService: AlimentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      nombre_alimento:['', Validators.required],
materia_seca:['', Validators.required],
e_m_aves:['', Validators.required],
e_m_cerdos:['', Validators.required],
proteina_cruda:['', Validators.required],
fibra_cruda:['', Validators.required],
ext_etereo:['', Validators.required],
calcio:['', Validators.required],
fosf_disp:['', Validators.required],
sodio:['', Validators.required],
arginina:['', Validators.required],
lisina:['', Validators.required],
metionina:['', Validators.required],
met_cis:['', Validators.required],
treonina:['', Validators.required],
tipo_nutriente_id:['', Validators.required],
region_id:['', Validators.required],
createdAt:['', Validators.required],
updatedAt:['', Validators.required],

    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.AlimentoService.create(this.form.value).subscribe(res => {
         console.log('Person created successfully!');
  
    })
  }

}
