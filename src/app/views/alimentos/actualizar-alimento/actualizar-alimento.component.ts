import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router} from '@angular/router';
import { AlimentoService } from 'src/app/Services/alimento/alimento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-alimento',
  templateUrl: './actualizar-alimento.component.html',
  styleUrls: ['./actualizar-alimento.component.css']
})
export class ActualizarAlimentoComponent implements OnInit {

  id: any;
  nombreEspecie = {}
  alimentoForm: FormGroup
  Alimento = { nombre_alimento: '',
                materia_seca: '',
                e_m_aves: '',
                e_m_cerdos: '',
                proteina_cruda: '',
                fibra_cruda: '',
                ext_etereo: '',
                calcio: '',
                fosf_disp: '',
                sodio: '',
                arginina: '',
                lisina: '',
                metionina: '',
                triptofano: '',
                met_cis: '',
                treonina: '',
                tipo_nutriente_id: '',
                region_id: '', }
  constructor(private aRoute: ActivatedRoute,
    private alimentoService: AlimentoService,
    private route: Router,
    private fb: FormBuilder,) {
    this.alimentoForm = this.fb.group({
      nombre_alimento: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id_alimento');
  }

  ngOnInit(): void {
     this.alimentoService.getAlimentoById(/*this.id + ""*/1+"").subscribe(data => {

      this.alimentoForm.patchValue({
        id_alimentos: data.results.id_alimentos,
        nombre_alimento: data.results.nombre_alimento,
        materia_seca: data.results.materia_seca,
        e_m_aves: data.results.e_m_aves,
        e_m_cerdos: data.results.e_m_cerdos,
        proteina_cruda: data.results.proteina_cruda,
        fibra_cruda: data.results.fibra_cruda,
        ext_etereo: data.results.ext_etereo,
        calcio: data.results.calcio,
        fosf_disp: data.results.fosf_disp,
        sodio: data.results.sodio,
        arginina: data.results.arginina,
        lisina: data.results.lisina,
        metionina: data.results.metionina,
        triptofano: data.results.triptofano,
        met_cis: data.results.met_cis,
        treonina: data.results.treonina,
        tipo_nutriente_id: data.results.tipo_nutriente_id,
        region_id: data.results.region_id
      })
    })
    }

  ActualizarAlimento(): void {
   
    // this.Alimento = {
    //   nombre_especie:this.alimentoForm.get('nombre_alimento')?.value
    // }
    // console.log(this.especie);
    // this.especieService.actualizarEspecie(this.id, this.especie).subscribe(data => {
    //   if (data.status == 'success') {
    //     Swal.fire({
    //       title: 'Actualizado',
    //       text: 'alimento actualizada con exito',
    //       icon: 'success',
    //       // showCancelButton: true,
    //       confirmButtonColor: '#3085d6',
    //       // cancelButtonColor: '#d33',
    //       confirmButtonText: 'Aceptar'
    //     })
    //     this.route.navigate(['/especie'])
    //   }
    // })
  
  }

}
