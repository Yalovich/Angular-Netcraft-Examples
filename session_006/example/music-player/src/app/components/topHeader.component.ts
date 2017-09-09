import { Component } from '@angular/core';
import {UsesrService} from "../services/user.services";

@Component({
  selector: 'top-header',
  templateUrl: './topHeader.component.html',
  styleUrls: ['./topHeader.component.css']
})
export class TopHeaderComponent {

  userName: string = "";

  constructor(private userService: UsesrService){}

  ngOnInit()
  {
    this.userName = this.userService.name;
  }

  refreshUserName(event: any)
  {
    this.userName = this.userService.name;

    console.log(this.userService.name)
  }
}

