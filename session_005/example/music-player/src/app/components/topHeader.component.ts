import { Component } from '@angular/core';
import StorageService from "../services/storage.service";

@Component({
  selector: 'top-header',
  templateUrl: './topHeader.component.html',
  styleUrls: ['./topHeader.component.css']
})
export class TopHeaderComponent {

  constructor(private storage: StorageService)
  {
    setInterval(() => {

      console.log(" --> ", this.storage.lastKey);

    }, 1500)

  }

}

