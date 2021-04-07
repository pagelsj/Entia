import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GetDataService } from './services';
import { EditUserComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ GetDataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
