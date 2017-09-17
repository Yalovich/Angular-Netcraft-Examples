import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {UserService} from "../services/user.services";

@Component({
  selector: 'top-header',
  templateUrl: './topHeader.component.html',
  styleUrls: ['./topHeader.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopHeaderComponent {

  userName: string = "";

  constructor(private userService: UserService, private changeDectectorRef: ChangeDetectorRef){}

  /**
   * angular init method
   */
  ngOnInit()
  {
    this.userService.detailsUpdate.subscribe(userModel => {

      this.userName = userModel.name;
      console.log("user was updated: ", userModel);

      this.changeDectectorRef.markForCheck();
    });
  }
}

