import { Component } from '@angular/core';

@Component({
    selector: 'app-editors',
    templateUrl: './editors.component.html',
    styleUrls: ['./editors.component.css'],
    standalone: false
})
export class EditorsComponent {

    public editors: any;

    constructor() {
        this.editors = {
            currency: 12.1,
            date: new Date(),
            editor: 'Infragistics',
            mask: '134-134-134',
            numeric: 123,
            percent: 0.12,
            text: 'Ignite UI'
        };
    }

}
