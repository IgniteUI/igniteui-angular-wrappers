import { Component } from '@angular/core';
import { Northwind } from '../shared/northwind';

@Component({
    selector: 'app-combo',
    templateUrl: './combo.component.html',
    styleUrls: ['./combo.component.css']
})
export class ComboComponent {

    public options: IgCombo;
    public northwind: any;
    public combo: any;

    constructor() {
        this.northwind = Northwind.getData();
        this.options = {
            valueKey: 'ProductID',
            textKey: 'ProductName',
            width: '100%'
        };
        this.combo = {
            value1: 20,
            value2: 'Chang'
        };
    }

}
