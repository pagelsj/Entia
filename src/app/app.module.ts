import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EditUserComponent, FieldUpdateComponent } from './components';
import {
  GetDataService,
  UpdateDataService
} from './services';

@NgModule({
  declarations: [
    AppComponent,
    EditUserComponent,
    FieldUpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    GetDataService,
    UpdateDataService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
