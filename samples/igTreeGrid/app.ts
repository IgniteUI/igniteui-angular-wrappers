import { Component, NgModule } from '@angular/core';
import { IgTreeGridComponent } from "../../src/main";
import { Tasks } from "./../data/tasks";
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic }	from '@angular/platform-browser-dynamic';
import { ProductCategories } from "./../data/product-categories";

declare var jQuery: any;
@Component({
	selector: 'my-app',
	templateUrl: "./igTreeGridTemplate.html"
})
export class AppComponent {
	private tgridOptions: IgTreeGrid;
	private id: string;
	private data: any;
	private newProduct:any;

	constructor() {
		this.data = Tasks.getData();

		this.id ='tgrid1';

		this.tgridOptions = {
			autoCommit:true,
			dataSource: this.data,
			width: "100%",
			height: "400px",
			autoGenerateColumns: false,
			autoGenerateColumnLayouts: false,
			primaryKey: "id",
			childDataKey: "products",
			renderExpansionIndicatorColumn: true,
			columns: [
				{ key: "id", headerText: "ID", width:"100px", dataType:"number" },
				{ key: "tasks", headerText: "Task", width:"250px", dataType:"string" },
				{ key: "start", headerText: "Start", width:"100px", dataType:"date" },
				{ key: "finish", headerText: "Finish", width:"100px", dataType:"date" },
				{ key: "duration", headerText: "Duration", width:"100px", dataType:"date" },
				{ key: "progress", headerText: "Progress", width:"100px", dataType:"date" }
			]
		};
	}
}

@NgModule({
	imports:	  [ BrowserModule ],
	declarations: [ AppComponent, IgTreeGridComponent ],
	bootstrap:	[ AppComponent ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);