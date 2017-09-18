import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {UsesrService} from "../services/user.services";
import UserModel from "../models/user.model";

@Component({
  selector: 'top-header',
  templateUrl: './topHeader.component.html',
  styleUrls: ['./topHeader.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopHeaderComponent {

  userName: string = "";

  constructor(private userService: UsesrService, private changeRef: ChangeDetectorRef){}

  ngOnInit()
  {
    this.userService.detailsUpdate.subscribe(this.onUserDetailsChange.bind(this));
  }

  /**
   *
   * @param user
   */
  onUserDetailsChange(user: UserModel)
  {
    console.log("THIS: ", this);

    console.log("TopHeader: ", user);
    this.userName = user.name;

    this.changeRef.markForCheck();
  }
}

