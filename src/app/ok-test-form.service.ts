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

}
