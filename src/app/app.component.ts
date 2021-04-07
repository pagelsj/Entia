import { Component, OnInit } from '@angular/core';
import { GetDataService } from './services/get-data/get-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'entia';
  constructor(
    private getData: GetDataService
  ) {}

  ngOnInit() {
    this.getData.load()
      .subscribe(resp => {
        console.log(resp)
      })
  }
}
