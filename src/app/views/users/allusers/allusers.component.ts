import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/Services/users/user.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {
 
  Users:User[]=[]
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  getAll():void{
    this.userService.getAll().subscribe(
      (data:User[])=>{
        this.Users=data
      }
    )
  }

}
