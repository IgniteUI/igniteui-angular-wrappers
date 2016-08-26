// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { inject, TestComponentBuilder } from '@angular/core/testing';
import { Component, ViewChild, TemplateRef } from '@angular/core';
import * as Infragistics from '../../../src/igniteui.angular2';

export function main() {
	describe('Infragistics Angular2 Grid', () => {
		it('should initialize correctly', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="opts"></ig-grid></div>';
			return tcb.overrideTemplate(TestComponent, template)
				.createAsync(TestComponent)
				.then((fixture) => {
					fixture.detectChanges();
					expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgGridComponent)
						.toBe(true);
				});
		}));

		it('should initialize correctly using top level options ', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [dataSource]="data" [primaryKey]="Id"></ig-grid></div>';
			return tcb.overrideTemplate(TestComponent, template)
				.createAsync(TestComponent)
				.then((fixture) => {
					fixture.detectChanges();
					expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgGridComponent)
						.toBe(true);
				});
		}));

		it('should initialize correctly with both approaches - top level and default', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(caption)]="caption" [(options)]="opts"></ig-grid></div>';
			return tcb.overrideTemplate(TestComponent, template)
				.createAsync(TestComponent)
				.then((fixture) => {
					fixture.detectChanges();
					expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgGridComponent)
						.toBe(true);
					expect($(fixture.debugElement.nativeElement).find("#grid1_caption").text())
						.toBe("My Caption");
				});
		}));

		it('should allow changing top level options', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(caption)]="caption" [(options)]="opts"></ig-grid></div>';
			return tcb.overrideTemplate(TestComponent, template)
				.createAsync(TestComponent)
				.then((fixture) => {
					fixture.detectChanges();
					fixture.componentInstance.caption = "Changed Caption";
					setTimeout(() => {
						fixture.detectChanges();
						expect($(fixture.debugElement.nativeElement).find("#grid1_caption").text())
							.toBe("Changed Caption");
					}, 10);
				});
		}));

		it('should detect and apply changes from model', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-grid></div>';
			return tcb.overrideTemplate(TestComponent, template)
				.createAsync(TestComponent)
				.then((fixture) => {
					fixture.detectChanges();
					fixture.componentInstance.data[0].Name = "Mr. Smith";
					setTimeout(() => {
						fixture.detectChanges();
						expect($(fixture.debugElement.nativeElement).find("#grid1 tr:first td[aria-describedby='grid1_Name']").text())
						.toBe("Mr. Smith");
					}, 10);
				});
		}));

		it('should detect and apply deleting records from model', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-grid></div>';
			return tcb.overrideTemplate(TestComponent, template)
				.createAsync(TestComponent)
				.then((fixture) => {
					fixture.detectChanges();
					fixture.componentInstance.data.splice(2,1);
					setTimeout(() => {
						fixture.detectChanges();
						expect($(fixture.debugElement.nativeElement).find("#grid1 tbody tr").length)
						.toBe(2);
					}, 10);
				});
		}));

		it('should detect and apply adding records from model', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-grid></div>';
			return tcb.overrideTemplate(TestComponent, template)
				.createAsync(TestComponent)
				.then((fixture) => {
					fixture.detectChanges();
					fixture.componentInstance.data.push({ "Id": 4, "Name": "Bob Ferguson", "Age": 33 });
					setTimeout(() => {
						fixture.detectChanges();
						expect($(fixture.debugElement.nativeElement).find("#grid1 tbody tr").length)
						.toBe(4);
					}, 10);
				});
		}));

		it('should detect and apply changes to model', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="opts"></ig-grid></div>';
			return tcb.overrideTemplate(TestComponent, template)
				.createAsync(TestComponent)
				.then((fixture) => {
					fixture.detectChanges();
					$(fixture.debugElement.nativeElement).find("#grid1 tr[data-id='2'] td[aria-describedby='grid1_Name']").click();
					$(fixture.debugElement.nativeElement).find("#grid1").igGridUpdating("setCellValue", 2, "Name", "Mary Jackson");
					$(fixture.debugElement.nativeElement).find("#grid1_container #grid1_updating_done").click();
					expect(fixture.debugElement.componentInstance.data[1].Name)
					.toBe("Mary Jackson");
				});
		}));

		it('should detect and apply deleting records to model', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="opts"></ig-grid></div>';
			return tcb.overrideTemplate(TestComponent, template)
				.createAsync(TestComponent)
				.then((fixture) => {
					fixture.detectChanges();
					$(fixture.debugElement.nativeElement).find("#grid1").igGridUpdating("deleteRow", 2);
					expect(fixture.debugElement.componentInstance.data.length)
					.toBe(2);
				});
		}));

		it('should detect and apply adding records to model', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="opts"></ig-grid></div>';
			return tcb.overrideTemplate(TestComponent, template)
				.createAsync(TestComponent)
				.then((fixture) => {
					fixture.detectChanges();
					$(fixture.debugElement.nativeElement).find("#grid1").igGridUpdating("addRow", { "Id": 4, "Name": "Bob Ferguson", "Age": 33 });
					expect(fixture.debugElement.componentInstance.data.length)
					.toBe(4);
				});
		}));

		it('should allow defining events', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="opts" (cellClick)="cellClickHandler($event)"></ig-grid></div>';
			return tcb.overrideTemplate(TestComponent, template)
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
					}, 50);
				});
		}));

		it('should allow changing options', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="opts1" [changeDetectionInterval]="cdi"></ig-grid></div>';
			return tcb.overrideTemplate(TestComponent, template)
				.createAsync(TestComponent)
				.then((fixture) => {
					fixture.detectChanges();
					fixture.componentInstance.opts1.height = "400px";
					setTimeout(() => {
						fixture.detectChanges();
						expect($(fixture.debugElement.nativeElement).find("#grid1_container").outerHeight())
						.toBe(400);
					}, 10);
				});
		}));

		it('should allow column templates', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="opts1" [changeDetectionInterval]="cdi"></ig-grid></div>';
			return tcb.overrideTemplate(TestComponent, template)
				.createAsync(TestComponent)
				.then((fixture) => {
					fixture.detectChanges();
					fixture.componentInstance.data[0].Age = 42;
					setTimeout(() => {
						fixture.detectChanges();
						expect($(fixture.debugElement.nativeElement).find("#grid1 tr[data-id='1'] td[aria-describedby='grid1_Age']").text())
						.toBe("Age: 42");
					}, 10);
				});
		}));

		it('should detect and apply changes of date columns to model', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="opts1" [changeDetectionInterval]="cdi"></ig-grid></div>';
			return tcb.overrideTemplate(TestComponent, template)
				.createAsync(TestComponent)
				.then((fixture) => {
					fixture.detectChanges();
					$(fixture.debugElement.nativeElement).find("#grid1 tr[data-id='2'] td[aria-describedby='grid1_HireDate']").click();
					$(fixture.debugElement.nativeElement).find("#grid1").igGridUpdating("setCellValue", 2, "HireDate", "11/11/2016");
					$(fixture.debugElement.nativeElement).find("#grid1_container #grid1_updating_done").click();
					expect(fixture.debugElement.componentInstance.data[1].HireDate.getTime())
					.toBe(new Date("11/11/2016").getTime());
				});
		}));
		
		it('should detect and apply changes of dates columns from model', (done) => {
			inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="opts1" [changeDetectionInterval]="cdi"></ig-grid></div>';
			return tcb.overrideTemplate(TestComponent, template)
					.createAsync(TestComponent)
					.then((fixture) => {
						fixture.detectChanges();
						fixture.componentInstance.data[0].HireDate = new Date("11/11/2016");
						setTimeout(() => {
							fixture.detectChanges();
							expect($(fixture.debugElement.nativeElement).find("#grid1 tr:first td[aria-describedby='grid1_HireDate']").text())
							.toBe("11/11/2016");
							done();
						}, 10);
					});
			})();
		});
	});
}

@Component({
	selector: 'test-cmp',
	template: '<div></div>', //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
	directives: [Infragistics.IgGridComponent]
})
class TestComponent {
	private opts: any;
	public opts1: any;
	private gridID: string;
	public data: Array<any>;
	private cdi: number;
	private firedEvent: any;
	public caption: string;
	@ViewChild(Infragistics.IgGridComponent) public viewChild: Infragistics.IgGridComponent;

	constructor() {
		this.gridID = "grid1";
		this.cdi = 0;
		this.caption = "My Caption";
		this.data = [
				{ "Id": 1, "Name": "John Smith", "Age": 45, "HireDate": "\/Date(704678400000)\/" },
				{ "Id": 2, "Name": "Mary Johnson", "Age": 32, "HireDate": "\/Date(794678400000)\/" },
				{ "Id": 3, "Name": "Bob Ferguson", "Age": 27, "HireDate": "\/Date(834678400000)\/" }
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
			height: "300px",
			autoGenerateColumns: false,
			primaryKey: "Id",
			columns: [
				{ key: "Id", headerText: "Id", dataType: "number", hidden: true },
				{ key: "Name", headerText: "Name", dataType: "string", width: "100px" },
				{ key: "Age", headerText: "Age", dataType: "number", width: "100px", template: "Age: ${Age}" },
				{ key: "HireDate", headerText: "HireDate", dataType: "date", width: "100px" },
			],
			autoCommit: true,
			features: [
				{ name: "Updating" }
			]
		};
	}

	public cellClickHandler(evt) {
		this.firedEvent = evt;
	}
}