import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// import * as $ from 'jquery';

import { AppComponent } from './app.component';
import { OkTestFormComponent } from './ok-test-form/ok-test-form.component';

@NgModule({
  declarations: [
    AppComponent,
    OkTestFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
