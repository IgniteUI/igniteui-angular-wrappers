import { Component, NgModule } from '@angular/core';
import { IgUploadComponent } from "../../src/igniteui.angular2.js";
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic }	from '@angular/platform-browser-dynamic';

declare var jQuery: any;
@Component({
	selector: 'my-app',
	templateUrl: '../igUpload/igUploadTemplate.html'
})
export class AppComponent {
	constructor() {
	}
}

@NgModule({
	imports:	  [ BrowserModule ],
	declarations: [ AppComponent, IgUploadComponent ],
	bootstrap:	[ AppComponent ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);