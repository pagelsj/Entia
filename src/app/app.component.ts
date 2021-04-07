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

  ngOnInit() {
    this.getData.load()
      .subscribe(resp => {
        this.userList = resp;
      })
  }
  selectedUser() {
    // this.user = event.value
    console.log(this.selected)
  }
}
