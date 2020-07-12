import { Injectable } from '@angular/core';
import * as _ from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class GeneratorOutputService {

  okTestTemplate = okTestTemplate;

  constructor() { }

}

const okTestTemplate = _.template(`test = {
    "name": "<%= name %>",
    "points": <%= points ? points : 1 %>,
    "suites": [
        {
            "cases": [ <% _(testCases).each((testCase) => { %>
                {
                    "code": r"""<% if (testCase.input.length != 1 || testCase.input[0] != "") { 
                      _(testCase.input).each((line, i) => { %>
                    <%= promptIsEllipsis(testCase.input, i) ? "..." : ">>>" %> <%= line %><% }); }
                    if (testCase.output.length != 1 || testCase.output[0] != "") { _(testCase.output).each((line, i) => { %>
                    <%= line %><% }); } %>
                    """,
                    "hidden": <%= testCase.hidden ? "True" : "False" %>,
                    "locked": <%= testCase.locked ? "True" : "False" %>,
                }, <% }); %>
            ],
            "scored": <%= scored ? "True" : "False" %>,
            "setup": "",
            "teardown": "",
            "type": "doctest"
        }
    ]
}`);

// Function to determine if Python interpreter line should start with >>> or ...
export function promptIsEllipsis(lines, index) {
  var line = lines[index];
  if (index === 0) {
    return false;
  }
  return line.startsWith("\t") || line.startsWith(" ") || line.startsWith("else:") || line.startsWith("elif") ||
    line.startsWith("except ") || line.startsWith("finally:") || lines[index - 1].trim().endsWith("\\");
}
