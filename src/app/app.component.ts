import { Component, OnInit } from '@angular/core';
import { GetDataService } from './services/get-data/get-data.service';

import { User } from './interfaces/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users:Array<User>;

  constructor(
    private getData: GetDataService
  ) {}

  ngOnInit() {
    this.getData.load()
      .subscribe(resp => {
        this.users = resp;
        console.log('this.users', this.users)
      })
  }
}
