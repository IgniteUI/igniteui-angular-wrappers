import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

declare var jQuery: any;

@Component({
	selector: 'my-app',
	templateUrl: `../igDataSource/igDataSourceTemplate.html`,
	styles: ['table {border-collapse: collapse;width: 100%;} td {border: 1px solid #ddd; padding: 8px;}']
})
export class AppComponent {
	opts: any;
	ds: Array<any>;
	private source: Infragistics.DataSource;
	data: Array<any> = [
		{ "Name": "John Smith", "Age": 45 },
		{ "Name": "Mary Johnson", "Age": 32 },
		{ "Name": "Bob Ferguson", "Age": 27 }
	];
	constructor() {
		console.log("App constructor");
		this.opts = {
			type: "json",
			dataSource: this.data,
			callback: jQuery.proxy(this.renderTable, this)
		};
		this.source = new Infragistics.DataSource(this.opts);
	}
	renderTable(success, error) {
		if (success) {
			this.ds = this.source.dataView();
		}
	}
	bind() {
		this.source.dataBind();
	}
}

@NgModule({
	imports:      [ BrowserModule ],
	declarations: [ AppComponent ],
	bootstrap:    [ AppComponent ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);