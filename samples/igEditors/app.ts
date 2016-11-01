import { Component, NgModule } from '@angular/core';
import { IgCurrencyEditorComponent, IgDateEditorComponent, IgMaskEditorComponent, IgNumericEditorComponent, 
	IgPercentEditorComponent, IgTextEditorComponent, IgDatePickerComponent } from "../../src/igniteui.angular2";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic }	from '@angular/platform-browser-dynamic';

declare var jQuery: any;
@Component({
	selector: 'my-app',	
	templateUrl: `../igEditors/igEditorsTemplate.html`
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

@NgModule({
	imports:	  [ BrowserModule, FormsModule ],
	declarations: [ AppComponent, IgCurrencyEditorComponent, IgDateEditorComponent, IgMaskEditorComponent, IgNumericEditorComponent, 
	IgPercentEditorComponent, IgTextEditorComponent, IgDatePickerComponent ],
	bootstrap:	[ AppComponent ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);