import { Component, NgModule } from '@angular/core';
import { IgDialogComponent } from "../../src/main";
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic }    from '@angular/platform-browser-dynamic';

declare var jQuery: any;
@Component({
	selector: 'my-app',
	templateUrl: `../igDialog/igDialogTemplate.html`
})
export class AppComponent {
	private options: any;

	constructor() {
		this.options = {
			headerText : "Foo",
			height: "325px"
		};
	}
}

@NgModule({
	imports:      [ BrowserModule ],
	declarations: [ AppComponent, IgDialogComponent ],
	bootstrap:    [ AppComponent ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);