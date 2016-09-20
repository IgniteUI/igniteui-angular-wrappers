import { Component, NgModule } from '@angular/core';
import { IgLayoutManagerComponent } from "../../src/igniteui.angular2";
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic }	from '@angular/platform-browser-dynamic';

declare var jQuery: any;
@Component({
	selector: 'my-app',
	templateUrl:"../igLayoutManager/igLayoutManagerTemplate.html"
})
export class AppComponent {
	private layoutOptions: any;

	constructor() {        
		this.layoutOptions={
			layoutMode: "border",
			height:"300px",
			borderLayout: {
				leftWidth:"10%",
				rightWidth:"20%"
			}
		};
	}
}

@NgModule({
	imports:	  [ BrowserModule ],
	declarations: [ AppComponent, IgLayoutManagerComponent ],
	bootstrap:	[ AppComponent ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);