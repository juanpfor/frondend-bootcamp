import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frond-end';
  token: string | null = null
  ngOnInit(): void {
    this.token = localStorage.getItem('token');

    // if (localStorage.getItem('token')) {
    //   alert("existe token")
    // }
   }
}
