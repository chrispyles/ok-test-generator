import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OkTestFormComponent } from './ok-test-form/ok-test-form.component';
import { GeneratorOutputComponent } from './generator-output/generator-output.component';

@NgModule({
  declarations: [
    AppComponent,
    OkTestFormComponent,
    GeneratorOutputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
