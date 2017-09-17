
import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {UserModel} from "../models/user.model";

@Injectable()
export class UserService
{
  detailsUpdate: Subject<UserModel> = new Subject();

  userModel: UserModel = new UserModel();

  /**
   *
   * @param key
   * @param value
   */
  set(key, value)
  {
    this.userModel[key] = value;
    this.detailsUpdate.next(this.userModel);
  }
}
