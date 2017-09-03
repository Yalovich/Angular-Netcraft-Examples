
import {Injectable} from "@angular/core";

@Injectable()
export class UsesrService
{
  name: string;
  savedItems: number = 0;

  increaseSavedItems()
  {
    this.savedItems++;
  }
}
