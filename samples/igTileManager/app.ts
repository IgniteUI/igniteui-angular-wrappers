import { Component, NgModule } from '@angular/core';
import { IgTileManagerComponent } from "../../src/igniteui.angular2.js";
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic }	from '@angular/platform-browser-dynamic';
import { candidates } from "./../data/candidates.js";

declare var jQuery: any;
@Component({
	selector: 'my-app',
	templateUrl: "../igTileManager/igTileManagerTemplate.html"
})
export class AppComponent {
	private options: any;

	constructor() {
		this.options={
			dataSource: candidates.getData(),
			marginLeft: 10,
			marginTop: 10,
			rightPanelTilesWidth: 200,
			rightPanelTilesHeight: 156,
			maximizedState: '<h3>${name}</h3><img src="${picture}" title="${name}" alt="error" /><p class="text">${text}</p><div style="clear: both"><span class="color">Skills:</span></div><ul class="skills"></ul><div class="linkedIn"><span class="color">LinkedIn:</span> <a href="${linkedin}" target="_blank">http://www.linkedin.com/profile</a></div>',
			minimizedState:'<h4>${name}</h4><img src="${picture}" class="minimized" title="${name}" alt="error" />'
		};
	}
}

@NgModule({
	imports:	  [ BrowserModule ],
	declarations: [ AppComponent, IgTileManagerComponent ],
	bootstrap:	[ AppComponent ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);