import { Component, NgModule } from '@angular/core';
import { IgMapComponent } from "../../src/igniteui.angular2";
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic }	from '@angular/platform-browser-dynamic';

declare var jQuery: any;
@Component({
	selector: 'my-app',
	templateUrl: "../igMap/igMapTemplate.html"
})
export class AppComponent {
	constructor() {
	}
}

@NgModule({
	imports:	  [ BrowserModule ],
	declarations: [ AppComponent, IgMapComponent ],
	bootstrap:	[ AppComponent ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);