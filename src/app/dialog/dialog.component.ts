import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.css'],
    standalone: false
})
export class DialogComponent {

    public options: any;

    constructor() {
        this.options = {
            headerText: 'Foo',
            height: '325px'
        };
    }
}
