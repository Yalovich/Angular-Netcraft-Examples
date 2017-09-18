
import {Injectable} from "@angular/core";
import UserModel from "../models/user.model";
import {Subject} from "rxjs";

@Injectable()
export class UsesrService
{
  detailsUpdate: Subject<UserModel> = new Subject();

  /**
   *
   * @param user
   */
  saveUser(user: UserModel)
  {
    console.log("Saving..", user);

    setTimeout(() => {

      console.log("Saved", user);
      this.detailsUpdate.next(user);

    }, 1500);


  }
}
