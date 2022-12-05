import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private cookie : CookieService,
    private route : Router,
  ) { }

  ngOnInit() {}

  logout () {
    localStorage.clear()
    this.cookie.deleteAll()
    this.route.navigate(['/login']);
  }

}
