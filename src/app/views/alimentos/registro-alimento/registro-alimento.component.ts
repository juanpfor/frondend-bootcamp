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

  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];


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
    met_cis: new FormControl('', Validators.required),
    treonina: new FormControl('', Validators.required),
    tipo_nutriente_id: new FormControl('', Validators.required),
    region_id: new FormControl('', Validators.required),
    createdAt: new FormControl('', Validators.required),
    updatedAt: new FormControl('', Validators.required),
  });

  constructor(
    public AlimentoService: AlimentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void { }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.AlimentoService.create(this.form.value).subscribe(res => {
      console.log('Person created successfully!');

    })
  }


}
