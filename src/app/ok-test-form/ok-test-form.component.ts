import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import * as $ from 'jquery';

import { OkTestFormService } from '../ok-test-form.service';

@Component({
  selector: 'oktg-ok-test-form',
  templateUrl: './ok-test-form.component.html',
  styleUrls: ['./ok-test-form.component.css']
})
export class OkTestFormComponent implements OnInit {

  okTestForm: FormGroup;

  constructor(private fb: FormBuilder, private okTestFormService: OkTestFormService) { }

  ngOnInit(): void {
    this.okTestForm = this.fb.group({
      testName: [''],
      points: [1],
      testCases: this.fb.array([
        this.fb.group(this.okTestFormService.getTestCaseDefaults())
      ])
    })
  }

  get testCases() {
    return this.okTestForm.get('testCases') as FormArray;
  }

  addTestCase() {
    this.testCases.push(this.fb.group(this.okTestFormService.getTestCaseDefaults()));
  }

  deleteTestCase(index: number) {
    this.testCases.removeAt(index);
  }

}
