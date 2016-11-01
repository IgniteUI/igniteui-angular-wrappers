import { Component, NgModule } from '@angular/core';
import { IgHtmlEditorComponent } from "../../src/igniteui.angular2";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic }	from '@angular/platform-browser-dynamic';

declare var jQuery: any;
@Component({
	selector: 'my-app',
	templateUrl: `../igHtmlEditor/igHtmlEditorTemplate.html`
})
export class AppComponent {
	private options: any;
	private data: any

	constructor() {
		this.data = "<p>Ignite UI controls:</p><p><ul><li>igEditors</li><li>igHtmlEditor</li><li>igGrid</li><li>igDataChart</li><li>etc.</li></ul></p>";
		this.options = {
			value: this.data,
			height: "400px",
			width: "700px"
		};
	}
}

@NgModule({
	imports:	  [ BrowserModule, FormsModule ],
	declarations: [ AppComponent, IgHtmlEditorComponent ],
	bootstrap:	[ AppComponent ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);