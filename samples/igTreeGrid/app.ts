import {Component, Inject, ElementRef, EventEmitter, HostListener} from 'angular2/core';
import {IgTreeGridComponent} from "../../src/igniteui.angular2.ts";
import {Tasks} from "./../data/tasks.ts";
import {bootstrap }    from 'angular2/platform/browser'

declare var jQuery: any;
@Component({
	selector: 'my-app',
	template: `
		<h1 class="push-down-md"><a href="http://www.igniteui.com/tree-grid/overview" target="_blank">igTreeGrid</a></h1>
	
		<div class="row description">
			<div class="col-md-12">
				<p class="lead">This sample demonstrates how Angular 2 components are used to instantiate igTreeGrid.</p>
			</div>
		</div>
		
		<div class="row">
			<div class="col-md-12">
				<ig-tree-grid 
						[(widgetId)]='id'
						[options]="tgridOptions">
				</ig-tree-grid>
			</div>
		</div>
		`,
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
			renderExpansionIndicatorColumn: "true",
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