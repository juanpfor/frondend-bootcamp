import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { LoginService } from '../../Services/login/login.service'
import { CookieService } from 'ngx-cookie-service'
import Swal  from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private api: LoginService,
    private router: Router,
    private cookies: CookieService
    ) { }
  erroStatus: boolean = false
  erroMsg: any = ""

  loginForm = new FormGroup({
    identificacion: new FormControl('', Validators.required),
    pasword: new FormControl('', Validators.required)
  })
  ngOnInit() {
    this.guard()
   }

  onLogin(form: any) {
    if (this.loginForm.valid) {
      this.api.logueoService(form).subscribe(data => {
        let dataResponse: any = data;
        if (dataResponse.status == 'success') {
          this.setDataUserLocalStorage(data)
          this.router.navigate(['dashboard/adminHome'])
        } else {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: data.message ,
            showConfirmButton: false,
            timer: 1000
          })
        }
      })
    }else{
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: "todos los campos son obligatorios" ,
        showConfirmButton: false,
        timer: 1000
      })
    }
  }
  showPassword() {//ocualtar password
    const change = document.getElementById('password') as HTMLInputElement
    if (change.type === 'password') {
      change.type = 'text'
    } else {
      change.type = 'password'
    }
  }

  guard () {
    const token = localStorage.getItem('token')

    token == null || '' ? this.router.navigate(['login']) : this.router.navigate(['dashboard/adminHome'])
  }

  setDataUserLocalStorage (data : any) {
    localStorage.setItem('token', data.results.token)
    this.cookies.set('token', data.results.token)
    localStorage.setItem('id_user', data.results.userForToken.id)
    this.cookies.set('id_user', data.results.userForToken.id)
    localStorage.setItem('region_id', data.results.userForToken.region_id)
    this.cookies.set('region_id', data.results.userForToken.region_id)
  }
}
