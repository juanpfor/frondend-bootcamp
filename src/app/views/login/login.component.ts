import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { LoginService } from '../../Services/login/login.service'
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api: LoginService, private router: Router, private cookies: CookieService) { }
  erroStatus: boolean = false
  erroMsg: any = ""

  loginForm = new FormGroup({
    identificacion: new FormControl('', Validators.required),
    pasword: new FormControl('', Validators.required)
  })
  ngOnInit(): void {
   }

  onLogin(form: any) {

    this.api.logueoService(form).subscribe(data => {
      let dataResponse: any = data;
      if (dataResponse.status == 'success') {
        localStorage.setItem('token', dataResponse.results.token)
        this.cookies.set('token', dataResponse.results.token)


        this.router.navigate(['adminHome'])
      } else {
        this.erroStatus = true
        this.erroMsg = dataResponse.message
      }
    })
  }
  showPassword() {//ocualtar password
    const change = document.getElementById('password') as HTMLInputElement
    if (change.type === 'password') {
      change.type = 'text'
    } else {
      change.type = 'password'
    }
  }
}
