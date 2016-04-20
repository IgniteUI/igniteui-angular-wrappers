// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { it, iit, describe, expect, inject, injectAsync, beforeEachProviders, fakeAsync, tick, TestComponentBuilder, AsyncTestCompleter } from 'angular2/testing_internal';
import {Component, ViewChild, TemplateRef} from 'angular2/core';
import * as Infragistics from '../../../src/igniteui.angular2';

export function main() {
	describe('Infragistics Angular2 Grid', () => {
		it('should initialize correctly', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="opts"></ig-grid></div>';
			tcb.overrideTemplate(TestComponent, template)
				.createAsync(TestComponent)
				.then((fixture) => {
						fixture.detectChanges();
						expect(fixture.debugElement.componentInstance.viewChild).toBeAnInstanceOf(Infragistics.IgGridComponent);
						async.done();
				});
		}));
		
		it('should detect and apply changes from model', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-grid></div>';
			tcb.overrideTemplate(TestComponent, template)
				.createAsync(TestComponent)
				.then((fixture) => {
					fixture.detectChanges();
					fixture.componentInstance.data[0].Name = "Mr. Smith";
					setTimeout(() => {
						fixture.detectChanges();
						expect($(fixture.debugElement.nativeElement).find("#grid1 tr:first td[aria-describedby='grid1_Name']").text())
						.toBe("Mr. Smith");
						async.done();
					}, 10);
				});
		}));

		it('should detect and apply deleting records from model', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-grid></div>';
			tcb.overrideTemplate(TestComponent, template)
				.createAsync(TestComponent)
				.then((fixture) => {
					fixture.detectChanges();
					fixture.componentInstance.data.splice(2,1);
					setTimeout(() => {
						fixture.detectChanges();
						expect($(fixture.debugElement.nativeElement).find("#grid1 tbody tr").length)
						.toBe(2);
						async.done();
					}, 10);
				});
		}));

		it('should detect and apply adding records from model', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-grid></div>';
			tcb.overrideTemplate(TestComponent, template)
				.createAsync(TestComponent)
				.then((fixture) => {
					fixture.detectChanges();
					fixture.componentInstance.data.push({ "Id": 4, "Name": "Bob Ferguson", "Age": 33 });
					setTimeout(() => {
						fixture.detectChanges();
						expect($(fixture.debugElement.nativeElement).find("#grid1 tbody tr").length)
						.toBe(4);
						async.done();
					}, 10);
				});
		}));

		it('should detect and apply changes to model', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="opts"></ig-grid></div>';
			tcb.overrideTemplate(TestComponent, template)
				.createAsync(TestComponent)
				.then((fixture) => {
					fixture.detectChanges();
					$(fixture.debugElement.nativeElement).find("#grid1 tr[data-id='2'] td[aria-describedby='grid1_Name']").click();
					$(fixture.debugElement.nativeElement).find("#grid1").igGridUpdating("setCellValue", 2, "Name", "Mary Jackson");
					$(fixture.debugElement.nativeElement).find("#grid1_container #grid1_updating_done").click();
					expect(fixture.debugElement.componentInstance.data[1].Name)
					.toBe("Mary Jackson");
					async.done();
				});
		}));

		it('should detect and apply deleting records to model', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="opts"></ig-grid></div>';
			tcb.overrideTemplate(TestComponent, template)
				.createAsync(TestComponent)
				.then((fixture) => {
					fixture.detectChanges();
					$(fixture.debugElement.nativeElement).find("#grid1").igGridUpdating("deleteRow", 2);
					expect(fixture.debugElement.componentInstance.data.length)
					.toBe(2);
					async.done();
				});
		}));

		it('should detect and apply adding records to model', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="opts"></ig-grid></div>';
			tcb.overrideTemplate(TestComponent, template)
				.createAsync(TestComponent)
				.then((fixture) => {
					fixture.detectChanges();
					$(fixture.debugElement.nativeElement).find("#grid1").igGridUpdating("addRow", { "Id": 4, "Name": "Bob Ferguson", "Age": 33 });
					expect(fixture.debugElement.componentInstance.data.length)
					.toBe(4);
					async.done();
				});
		}));

		it('should allow defining events', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="opts" (cellClick)="cellClickHandler($event)"></ig-grid></div>';
			tcb.overrideTemplate(TestComponent, template)
				.createAsync(TestComponent)
				.then((fixture) => {
					fixture.detectChanges();
					$(fixture.debugElement.nativeElement).find("#grid1 tr[data-id='1'] td[aria-describedby='grid1_Name']").click();
					setTimeout(() => {
						expect(fixture.debugElement.componentInstance.firedEvent.event.type)
							.toBe("iggridcellclick");
						expect(fixture.debugElement.componentInstance.firedEvent.ui.colIndex)
							.toBe(1);
						expect(fixture.debugElement.componentInstance.firedEvent.ui.colKey)
							.toBe("Name");
						async.done();
					}, 50);
				});
		}));

		it('should allow changing options', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="opts1" [changeDetectionInterval]="cdi"></ig-grid></div>';
			tcb.overrideTemplate(TestComponent, template)
				.createAsync(TestComponent)
				.then((fixture) => {
					fixture.detectChanges();
					fixture.componentInstance.opts1.height = "400px";
					setTimeout(() => {
						fixture.detectChanges();
						expect($(fixture.debugElement.nativeElement).find("#grid1_container").outerHeight())
						.toBe(400);
						async.done();
					}, 10);
				});
		}));
	});
}

@Component({
	selector: 'test-cmp',
	template: '<div></div>', //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
	directives: [Infragistics.IgGridComponent]
})
class TestComponent {
	private opts: any;
	private opts1: any;
	private gridID: string;
	private data: Array<any>;
	private cdi: number;
	private firedEvent: any;
	@ViewChild(Infragistics.IgGridComponent) public viewChild: Infragistics.IgGridComponent;

	constructor() {
		this.gridID = "grid1";
		this.cdi = 0;
		this.data = [
				{ "Id": 1, "Name": "John Smith", "Age": 45 },
				{ "Id": 2, "Name": "Mary Johnson", "Age": 32 },
				{ "Id": 3, "Name": "Bob Ferguson", "Age": 27 }
			]
		this.opts = {
			primaryKey: "Id",
			dataSource: this.data,
			autoCommit: true,
			features: [
				{ name: "Updating" }
			]
		};
		
		this.opts1 = {
			dataSource: this.data,
			height: "300px"
		};
	}

	public cellClickHandler(evt) {
		this.firedEvent = evt;
	}
}