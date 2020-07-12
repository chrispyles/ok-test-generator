import { Component, OnInit, Input } from '@angular/core';

import { GeneratorOutputService, promptIsEllipsis } from '../generator-output.service';

@Component({
  selector: 'oktg-generator-output',
  templateUrl: './generator-output.component.html',
  styleUrls: ['./generator-output.component.css']
})
export class GeneratorOutputComponent implements OnInit {

  @Input() testObject;
  pythonFileString: string;

  constructor(private generatorOutputService: GeneratorOutputService) { }

  ngOnInit(): void {
  }

  renderPythonFile() {
    this.testObject.promptIsEllipsis = promptIsEllipsis;
    return this.generatorOutputService.okTestTemplate(this.testObject);
  }

}
