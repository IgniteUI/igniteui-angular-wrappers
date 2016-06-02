import { Component, Inject, ElementRef, EventEmitter, HostListener} from 'angular2/core';
import {IgCurrencyEditorComponent, IgDateEditorComponent, IgMaskEditorComponent, IgNumericEditorComponent, 
    IgPercentEditorComponent, IgTextEditorComponent, IgDatePickerComponent} from "../../src/igniteui.angular2.ts";
import {bootstrap }    from 'angular2/platform/browser'

declare var jQuery: any;
@Component({
	selector: 'my-app',	
	templateUrl: `../igEditors/igEditorsTemplate.html`,
	directives: [IgCurrencyEditorComponent, IgDateEditorComponent, IgMaskEditorComponent, IgNumericEditorComponent, 
    IgPercentEditorComponent, IgTextEditorComponent, IgDatePickerComponent]
})
export class AppComponent {
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
bootstrap(AppComponent);