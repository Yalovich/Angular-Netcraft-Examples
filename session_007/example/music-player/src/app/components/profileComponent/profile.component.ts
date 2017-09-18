import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent
{
  constructor(private activateRoute: ActivatedRoute, private router: Router)
  {

  }

  ngOnInit()
  {
    this.activateRoute.params.subscribe(params => {
      console.log("Hello Profile", params);
    })

    console.log(this.router);


  }
}
