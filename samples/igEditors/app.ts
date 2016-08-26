import { Component, Inject, ElementRef, EventEmitter, HostListener} from '@angular/core';
import {IgCurrencyEditorComponent, IgDateEditorComponent, IgMaskEditorComponent, IgNumericEditorComponent, 
    IgPercentEditorComponent, IgTextEditorComponent, IgDatePickerComponent} from "../../src/igniteui.angular2.ts";
import { FORM_DIRECTIVES } from '@angular/common';
import {bootstrap }    from '@angular/platform-browser-dynamic'

declare var jQuery: any;
@Component({
	selector: 'my-app',	
	templateUrl: `../igEditors/igEditorsTemplate.html`,
	directives: [FORM_DIRECTIVES, IgCurrencyEditorComponent, IgDateEditorComponent, IgMaskEditorComponent, IgNumericEditorComponent, 
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