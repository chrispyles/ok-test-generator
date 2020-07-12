import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { GeneratorOutputService, promptIsEllipsis } from '../generator-output.service';

@Component({
  selector: 'oktg-generator-output',
  templateUrl: './generator-output.component.html',
  styleUrls: ['./generator-output.component.css']
})
export class GeneratorOutputComponent implements OnInit {

  @Input() testObject;
  pythonFileString: string;

  constructor(private generatorOutputService: GeneratorOutputService,
    private domSantizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  renderPythonFile() {
    this.testObject.promptIsEllipsis = promptIsEllipsis;
    this.pythonFileString = this.generatorOutputService.okTestTemplate(this.testObject);
    return this.pythonFileString;
  }

  // setupDownload(filename) {
  //   var btn = document.querySelector("#download-btn");
  //   btn.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
  //   btn.setAttribute("download", filename)
  // }

  getUriEncodedPythonFileString() {
    return this.domSantizer.bypassSecurityTrustUrl("data:text/plain;charset=utf-8," + encodeURIComponent(this.pythonFileString));
  }

}
