// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import * as Infragistics from '../../../src/igniteui.angular2';

export function main() {
	describe('Infragistics Angular2 Grid', () => {

		beforeEach(() => {
			TestBed.configureTestingModule({
				declarations: [Infragistics.Column, Infragistics.Features, Infragistics.IgGridPagingFeature, Infragistics.IgGridComponent, TestComponent]
			});
		});

		it('should initialize correctly', (done) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="opts"></ig-grid></div>';
			TestBed.overrideComponent(TestComponent, {
					set: {
						template: template
					}
				});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestComponent);
				fixture.detectChanges();
				expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgGridComponent)
					.toBe(true);
					done();
			});
		});

		it('should initialize correctly using top level options ', (done) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [dataSource]="data" [primaryKey]="Id"></ig-grid></div>';
			TestBed.overrideComponent(TestComponent, {
					set: {
						template: template
					}
				});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestComponent);
				fixture.detectChanges();
				expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgGridComponent)
					.toBe(true);
				done();
			});
		});

		it('should initialize correctly with both approaches - top level and default', (done) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(caption)]="caption" [(options)]="opts"></ig-grid></div>';
			TestBed.overrideComponent(TestComponent, {
					set: {
						template: template
					}
				});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestComponent);
				fixture.detectChanges();
				expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgGridComponent)
					.toBe(true);
				expect($(fixture.debugElement.nativeElement).find("#grid1_caption").text())
					.toBe("My Caption");
				done();
			});
		});

		it('should allow changing top level options', (done) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(caption)]="caption" [(options)]="opts"></ig-grid></div>';
			TestBed.overrideComponent(TestComponent, {
					set: {
						template: template
					}
				});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestComponent);
				fixture.detectChanges();
				fixture.componentInstance.caption = "Changed Caption";
				setTimeout(() => {
					fixture.detectChanges();
					expect($(fixture.debugElement.nativeElement).find("#grid1_caption").text())
						.toBe("Changed Caption");
					done();
				}, 10);
			});
		});

		it('should detect and apply changes from model', (done) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-grid></div>';
			TestBed.overrideComponent(TestComponent, {
					set: {
						template: template
					}
				});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestComponent);
				fixture.detectChanges();
				fixture.componentInstance.data[0].Name = "Mr. Smith";
				setTimeout(() => {
					fixture.detectChanges();
					expect($(fixture.debugElement.nativeElement).find("#grid1 tr:first td[aria-describedby='grid1_Name']").text())
					.toBe("Mr. Smith");
					done();
				}, 10);
			});
		});

		it('should detect and apply deleting records from model', (done) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-grid></div>';
			TestBed.overrideComponent(TestComponent, {
					set: {
						template: template
					}
				});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestComponent);
				fixture.detectChanges();
				fixture.componentInstance.data.splice(2,1);
				setTimeout(() => {
					fixture.detectChanges();
					expect($(fixture.debugElement.nativeElement).find("#grid1 tbody tr").length)
					.toBe(2);
					done();
				}, 10);
			});
		});

		it('should detect and apply adding records from model', (done) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-grid></div>';
			TestBed.overrideComponent(TestComponent, {
					set: {
						template: template
					}
				});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestComponent);
				fixture.detectChanges();
				fixture.componentInstance.data.push({ "Id": 4, "Name": "Bob Ferguson", "Age": 33 });
				setTimeout(() => {
					fixture.detectChanges();
					expect($(fixture.debugElement.nativeElement).find("#grid1 tbody tr").length)
					.toBe(4);
					done();
				}, 10);
			});
		});

		it('should detect and apply changes to model', (done) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="opts"></ig-grid></div>';
			TestBed.overrideComponent(TestComponent, {
					set: {
						template: template
					}
				});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestComponent);
				fixture.detectChanges();
				$(fixture.debugElement.nativeElement).find("#grid1 tr[data-id='2'] td[aria-describedby='grid1_Name']").click();
				$(fixture.debugElement.nativeElement).find("#grid1").igGridUpdating("setCellValue", 2, "Name", "Mary Jackson");
				$(fixture.debugElement.nativeElement).find("#grid1_container #grid1_updating_done").click();
				expect(fixture.debugElement.componentInstance.data[1].Name)
				.toBe("Mary Jackson");
				done();
			});
		});

		it('should detect and apply deleting records to model', (done) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="opts"></ig-grid></div>';
			TestBed.overrideComponent(TestComponent, {
					set: {
						template: template
					}
				});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestComponent);
				fixture.detectChanges();
				$(fixture.debugElement.nativeElement).find("#grid1").igGridUpdating("deleteRow", 2);
				expect(fixture.debugElement.componentInstance.data.length)
				.toBe(2);
				done();
			});
		});

		it('should detect and apply adding records to model', (done) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="opts"></ig-grid></div>';
			TestBed.overrideComponent(TestComponent, {
					set: {
						template: template
					}
				});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestComponent);
				fixture.detectChanges();
				$(fixture.debugElement.nativeElement).find("#grid1").igGridUpdating("addRow", { "Id": 4, "Name": "Bob Ferguson", "Age": 33 });
				expect(fixture.debugElement.componentInstance.data.length)
				.toBe(4);
				done();
			});
		});

		it('should allow defining events', (done) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="opts" (cellClick)="cellClickHandler($event)"></ig-grid></div>';
			TestBed.overrideComponent(TestComponent, {
					set: {
						template: template
					}
				});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestComponent);
				fixture.detectChanges();
				$(fixture.debugElement.nativeElement).find("#grid1 tr[data-id='1'] td[aria-describedby='grid1_Name']").click();
				setTimeout(() => {
					expect(fixture.debugElement.componentInstance.firedEvent.event.type)
						.toBe("iggridcellclick");
					expect(fixture.debugElement.componentInstance.firedEvent.ui.colIndex)
						.toBe(1);
					expect(fixture.debugElement.componentInstance.firedEvent.ui.colKey)
						.toBe("Name");
					done();
				}, 50);
			});
		});

		it('should allow changing options', (done) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="opts1" [changeDetectionInterval]="cdi"></ig-grid></div>';
			TestBed.overrideComponent(TestComponent, {
					set: {
						template: template
					}
				});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestComponent);
				fixture.detectChanges();
				fixture.componentInstance.opts1.height = "400px";
				setTimeout(() => {
					fixture.detectChanges();
					expect($(fixture.debugElement.nativeElement).find("#grid1_container").outerHeight())
					.toBe(400);
					done();
				}, 10);
			});
		});

		it('should allow column templates', (done) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="opts1" [changeDetectionInterval]="cdi"></ig-grid></div>';
			TestBed.overrideComponent(TestComponent, {
					set: {
						template: template
					}
				});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestComponent);
				fixture.detectChanges();
				fixture.componentInstance.data[0].Age = 42;
				setTimeout(() => {
					fixture.detectChanges();
					expect($(fixture.debugElement.nativeElement).find("#grid1 tr[data-id='1'] td[aria-describedby='grid1_Age']").text())
					.toBe("Age: 42");
					done()
				}, 10);
			});
		});

		it('should detect and apply changes of date columns to model', (done) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="opts1" [changeDetectionInterval]="cdi"></ig-grid></div>';
			TestBed.overrideComponent(TestComponent, {
					set: {
						template: template
					}
				});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestComponent);
				fixture.detectChanges();
				$(fixture.debugElement.nativeElement).find("#grid1 tr[data-id='2'] td[aria-describedby='grid1_HireDate']").click();
				$(fixture.debugElement.nativeElement).find("#grid1").igGridUpdating("setCellValue", 2, "HireDate", "11/11/2016");
				$(fixture.debugElement.nativeElement).find("#grid1_container #grid1_updating_done").click();
				expect(fixture.debugElement.componentInstance.data[1].HireDate.getTime())
				.toBe(new Date("11/11/2016").getTime());
				done();
			});
		});
		
		it('should detect and apply changes of dates columns from model', (done) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="opts1" [changeDetectionInterval]="cdi"></ig-grid></div>';
			TestBed.overrideComponent(TestComponent, {
					set: {
						template: template
					}
				});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestComponent);
				fixture.detectChanges();
				fixture.componentInstance.data[0].HireDate = new Date("11/11/2016");
				setTimeout(() => {
					fixture.detectChanges();
					expect($(fixture.debugElement.nativeElement).find("#grid1 tr:first td[aria-describedby='grid1_HireDate']").text())
					.toBe("11/11/2016");
					done();
				}, 10);
			});
		});

		it('should initialize column and feature nested directives', (done) => {
			var template = "<ig-grid [widgetId]='gridID' [width]='w' [autoCommit]='true' [dataSource]='data' [height]='h' [autoGenerateColumns]='false' [primaryKey]='\"Id\"'>" +
				"<column [key]=\"'Id'\" [(headerText)]=\"idHeaderText\" [width]=\"'165px'\" [dataType]=\"'number'\"></column>" +
				"<column [key]=\"'Name'\" [headerText]=\"'Name'\" [width]=\"'250px'\" [dataType]=\"'string'\"></column>" +
				"<column [key]=\"'HireDate'\" [headerText]=\"'Quantity per unit'\" [width]=\"'250px'\" [dataType]=\"'date'\"></column>" +
				"<features>" +
				"<paging [(currentPageIndex)]=\"pi\" [pageSize]=\"'2'\"> </paging>" + 
				"</features>" + 
			"</ig-grid>";
			TestBed.overrideComponent(TestComponent, {
					set: {
						template: template
					}
				});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestComponent);
				fixture.detectChanges();
				expect($(fixture.debugElement.nativeElement).find("#grid1 thead th#grid1_Id").text())
					.toBe("Product Id");
				expect($(fixture.debugElement.nativeElement).find("#grid1_pager li.ui-state-active").text())
					.toBe("2");
				fixture.componentInstance.pi = 0;
				fixture.componentInstance.idHeaderText = "Changed ID";
				setTimeout(() => {
					fixture.detectChanges();
					//this assert should wait the next Service Release of IgniteUI
					//expect($(fixture.debugElement.nativeElement).find("#grid1 thead th#grid1_Id").text())
					//	.toBe("Changed ID");
					expect($(fixture.debugElement.nativeElement).find("#grid1_pager li.ui-state-active").text())
						.toBe("1");
					done();
				}, 10);
			});
		});

		it('should initialize column and feature nested directives with options', (done) => {
			var template = "<ig-grid [widgetId]='gridID' [(options)]='opts1'>" +
				"<column [key]=\"'Id'\" [(headerText)]=\"idHeaderText\" [width]=\"'165px'\" [dataType]=\"'number'\"></column>" +
				"<column [key]=\"'Name'\" [headerText]=\"'Name'\" [width]=\"'250px'\" [dataType]=\"'string'\"></column>" +
				"<column [key]=\"'HireDate'\" [headerText]=\"'Quantity per unit'\" [width]=\"'250px'\" [dataType]=\"'date'\"></column>" +
				"<features>" + 
				"<paging [(currentPageIndex)]=\"pi\" [pageSize]=\"'2'\"></paging>" +
				"</features>" +
			"</ig-grid>";
			TestBed.overrideComponent(TestComponent, {
					set: {
						template: template
					}
				});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestComponent);
				fixture.detectChanges();
				expect($(fixture.debugElement.nativeElement).find("#grid1_container thead th#grid1_Id").text())
					.toBe("Product Id");
				expect($(fixture.debugElement.nativeElement).find("#grid1_pager li.ui-state-active").text())
					.toBe("2");
				fixture.componentInstance.pi = 0;
				fixture.componentInstance.idHeaderText = "Changed ID";
				setTimeout(() => {
					fixture.detectChanges();
					//this assert should wait the next Service Release of IgniteUI
					//expect($(fixture.debugElement.nativeElement).find("#grid1 thead th#grid1_Id").text())
					//	.toBe("Changed ID");
					expect($(fixture.debugElement.nativeElement).find("#grid1_pager li.ui-state-active").text())
						.toBe("1");
					done();
				}, 10);
			});
		});

		it('should allow calling component and feature methods', (done) => {
			var template = "<ig-grid [widgetId]='gridID' [(options)]='opts1'>" +
				"<column [key]=\"'Id'\" [(headerText)]=\"idHeaderText\" [width]=\"'165px'\" [dataType]=\"'number'\"></column>" +
				"<column [key]=\"'Name'\" [headerText]=\"'Name'\" [width]=\"'250px'\" [dataType]=\"'string'\"></column>" +
				"<column [key]=\"'HireDate'\" [headerText]=\"'Quantity per unit'\" [width]=\"'250px'\" [dataType]=\"'date'\"></column>" +
				"<features>" + 
				"<paging [pageSize]=\"'2'\"></paging>" +
				"</features>" +
			"</ig-grid>";
			TestBed.overrideComponent(TestComponent, {
					set: {
						template: template
					}
				});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestComponent);
				fixture.detectChanges();

				//check if grid method calls return correct values
				var rows = fixture.componentInstance.viewChild.allRows();
				expect(rows.length).toBe(2);
				var cellVal =  fixture.componentInstance.viewChild.getCellValue(1, "Name");
				expect(cellVal).toBe("John Smith");

				//call paging feature's api methods
				var paging =  fixture.componentInstance.viewChild.featuresList.paging;

				paging.pageSize(1);

				rows = fixture.componentInstance.viewChild.allRows();
				expect(rows.length).toBe(1);
				cellVal =  fixture.componentInstance.viewChild.getCellValue(1, "Name");
				expect(cellVal).toBe("John Smith");

				paging.pageIndex(1);

				rows = fixture.componentInstance.viewChild.allRows();
				expect(rows.length).toBe(1);
				var cell =  fixture.componentInstance.viewChild.cellAt(1, 0, false);
				expect(cell.innerHTML).toBe("Mary Johnson");

				done();

			});


		 })

		it('should allow filtering after new data is applied', (done) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="opts2" [(dataSource)]="data1"></ig-grid></div>';
			TestBed.overrideComponent(TestComponent, {
					set: {
						template: template
					}
				});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestComponent);
				fixture.detectChanges();
				expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgGridComponent)
					.toBe(true);
				fixture.componentInstance.data1 = [
					{"Id":"4", "Date":"\/Date(1235088000000)\/"},
					{"Id":"5", "Date":"\/Date(1250809200000)\/"},
					{"Id":"6", "Date":"\/Date(1335394800000)\/"}
				];
				setTimeout(() => {
					fixture.detectChanges();
					$(fixture.debugElement.nativeElement).find("#grid1").igGridFiltering("filter", ([{fieldName: "Date", expr: "\/Date(704678400000)\/", cond: "notOn"}]));
					expect($(fixture.debugElement.nativeElement).find("#grid1_container .ui-iggrid-results").text())
						.toBe("3 matching records");
					done();
				}, 500);
			});
		});
	});
}

@Component({
	selector: 'test-cmp',
	template: '<div></div>' //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
})
class TestComponent {
	private opts: any;
	public opts1: any;
	public opts2: any;
	private gridID: string;
	public data: Array<any>;
	public data1: Array<any>;
	private cdi: number;
	public pi: number;
	private firedEvent: any;
	public caption: string;
	public idHeaderText: string;
	@ViewChild(Infragistics.IgGridComponent) public viewChild: Infragistics.IgGridComponent;

	constructor() {
		this.gridID = "grid1";
		this.cdi = 0;
		this.caption = "My Caption";
		this.idHeaderText = "Product Id";
		this.pi = 1;
		this.data = [
				{ "Id": 1, "Name": "John Smith", "Age": 45, "HireDate": "\/Date(704678400000)\/" },
				{ "Id": 2, "Name": "Mary Johnson", "Age": 32, "HireDate": "\/Date(794678400000)\/" },
				{ "Id": 3, "Name": "Bob Ferguson", "Age": 27, "HireDate": "\/Date(834678400000)\/" }
			];
		this.data1 = [
			{"Id":"1", "Date":"\/Date(1250809200000)\/"},
			{"Id":"2", "Date":"\/Date(1335394800000)\/"},
			{"Id":"3", "Date":"\/Date(1235088000000)\/"}
		];
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

		this.opts2 = {
            width: "100%",
            height: "400px",
            autoCommit: true,
            autoGenerateColumns: false,
            columns: [
                { key: "Id", headerText: "ID", width: "20%", dataType: "string" },
                { key: "Date", headerText: "Date", dataType: "date", width: "80%", format: "dd/MM/yyyy" },
            ],
            primaryKey: "Id",
            features: [
                {
                    name: "Filtering",
                    type: "local",
                    mode: "simple",
                    filterDialogContainment: "window"
                }
            ]
        };
	}

	public cellClickHandler(evt) {
		this.firedEvent = evt;
	}
}