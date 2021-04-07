import { Component, OnInit } from '@angular/core';
import { GetDataService } from './services/';

import { User } from './interfaces/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userList:Array<User>;
  selected: User;

  constructor(
    private getData: GetDataService
  ) {}

  updateUser(userData) {
    // Find the index of the object with the matching ID.
    let index = this.userList.findIndex(el => el.id === userData.id);

    this.userList[index] = userData;
    // this.selected = null;
  }

  ngOnInit() {
    this.getData.load()
      .subscribe(resp => {
        this.userList = resp;
      })
  }

}
