import {Component, Inject, ElementRef, EventEmitter, HostListener} from 'angular2/core';
import {IgTreeGridComponent} from "../../src/igniteui.angular2.ts";
import {Tasks} from "./../data/tasks.ts";
import {bootstrap }    from 'angular2/platform/browser'

declare var jQuery: any;
@Component({
	selector: 'my-app',
	template: "./igTreeGridTemplate.html",
	directives: [IgTreeGridComponent]
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

bootstrap(AppComponent);