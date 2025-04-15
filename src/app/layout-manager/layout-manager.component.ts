import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-layout-manager',
    templateUrl: './layout-manager.component.html',
    styleUrls: ['./layout-manager.component.css'],
    standalone: false
})
export class LayoutManagerComponent {

    public layoutOptions: any;

    constructor() {
        this.layoutOptions = {
            layoutMode: 'border',
            height: '300px',
            borderLayout: {
                leftWidth: '10%',
                rightWidth: '20%'
            }
        };
    }

}
