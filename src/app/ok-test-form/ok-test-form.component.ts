import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

import { OkTestFormService } from '../ok-test-form.service';

@Component({
  selector: 'oktg-ok-test-form',
  templateUrl: './ok-test-form.component.html',
  styleUrls: ['./ok-test-form.component.css']
})
export class OkTestFormComponent implements OnInit {

  okTestForm: FormGroup;
  @Output() generateFile: EventEmitter<void> = new EventEmitter();

  constructor(private fb: FormBuilder, private okTestFormService: OkTestFormService) { }

  ngOnInit(): void {
    this.okTestForm = this.fb.group({
      testName: ['', [Validators.required, Validators.pattern("[\\w_]+")]],
      points: [''],
      scored: [true],
      testCases: this.fb.array([
        this.fb.group(this.okTestFormService.getTestCaseDefaults())
      ])
    })
  }

  get testCases() {
    return this.okTestForm.get('testCases') as FormArray;
  }

  get scored() {
    return this.okTestForm.get('scored');
  }

  addTestCase() {
    this.testCases.push(this.fb.group(this.okTestFormService.getTestCaseDefaults()));
  }

  deleteTestCase(index: number) {
    this.testCases.removeAt(index);
  }

  // generateTestFile() {
  //   console.log(this.testCases);
  // }

  captureTabKey(event) {
    if (event.keyCode == 9 || event.which == 9){
        event.preventDefault();
        var s = event.target.selectionStart;
        event.target.value = event.target.value.substring(0, event.target.selectionStart) + "\t" + event.target.value.substring(event.target.selectionEnd);
        event.target.selectionEnd = s+1; 
    }
  }

  generateTestFile() {
    let testObject = this.okTestForm.getRawValue();

    for (let i = 0; i < testObject.testCases.length; i++) {
      let testCase = testObject.testCases[i];
      console.log(testCase.input);
      testCase.input = testCase.input.replace("\t", "    ").split("\n");
      testCase.output = testCase.output.replace("\t", "    ").split("\n");
      console.log(testCase.input);
    }

    console.log("Generating test:\n", testObject);
    this.generateFile.emit(testObject);
  }

}
