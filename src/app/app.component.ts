import { Component, Output, EventEmitter } from '@angular/core';
// import * as $ from 'jquery';

@Component({
    selector: 'oktg-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'ok-test-generator';
    testObject;

    isFormSent = false;

    // ngAfterViewInit() {
    //     $(function () {
    //         ($('[data-toggle="popover"]') as any).popover();
    //     })
    // }

    onGenerateFile(event) {
        this.isFormSent = true;
        this.testObject = event;
    }
}
