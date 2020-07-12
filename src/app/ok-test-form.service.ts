import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OkTestFormService {

  testCaseDefaults = {
    input: [''],
    output: [''],
    hidden: [false],
    locked: [false]
  }

  constructor() { }

  getTestCaseDefaults() {
    return JSON.parse(JSON.stringify(this.testCaseDefaults));
  }

  // Function to capture the TAB key in all textareas
  // captureTabKey() {
  //   var textareas = document.getElementsByTagName('textarea');
  //   var count = textareas.length;
  //   for (var i = 0; i < count; i++) {
  //       textareas[i].onkeydown = 
  //   }
  // }

}
