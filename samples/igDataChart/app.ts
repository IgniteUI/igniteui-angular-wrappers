import { Component, Inject, ElementRef, EventEmitter, HostListener} from 'angular2/core';
import { IgDataChartComponent, IgZoombarComponent } from "../../src/igniteui.angular2.ts";
import {bootstrap }    from 'angular2/platform/browser'

declare var jQuery: any;
@Component({
	selector: 'my-app',
	template: `<ig-data-chart [(options)]="options" widgetId='datachart1'></ig-data-chart>
               <ig-zoombar [(options)]="zoombarOptions" widgetId='zoombar'></ig-zoombar>
    `,
	directives: [IgDataChartComponent, IgZoombarComponent]
})
export class AppComponent {
	private data: any;
	private options: any;
	private zoombarOptions: any;

	constructor() {
		this.data = [{ "CountryName": "China", "Pop1995": 1216, "Pop2005": 1297, "Pop2015": 1361, "Pop2025": 1394 }, { "CountryName": "India", "Pop1995": 920, "Pop2005": 1090, "Pop2015": 1251, "Pop2025": 1396 }, { "CountryName": "United States", "Pop1995": 266, "Pop2005": 295, "Pop2015": 322, "Pop2025": 351 }, { "CountryName": "Indonesia", "Pop1995": 197, "Pop2005": 229, "Pop2015": 256, "Pop2025": 277 }, { "CountryName": "Brazil", "Pop1995": 161, "Pop2005": 186, "Pop2015": 204, "Pop2025": 218 }];

		this.options = {
			dataSource: this.data,
			axes: [{
				name: "NameAxis",
				type: "categoryX",
				title: "Country",
				label: "CountryName"
			},
				{
					name: "PopulationAxis",
					type: "numericY",
					minimumvalue: 0,
					title: "Milions of People"
				}],
			series: [{
				name: "2015Population",
				type: "column",
				isHighlightingEnabled: true,
				isTransitionInEnabled: true,
				xAxis: "NameAxis",
				yAxis: "PopulationAxis",
				valueMemberPath: "Pop2015"
			}]
		};

		this.zoombarOptions = {
			target: "#datachart1"
		};
	}
}
bootstrap(AppComponent);