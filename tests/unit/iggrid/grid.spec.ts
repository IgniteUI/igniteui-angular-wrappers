// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import * as Infragistics from '../../../dist/npm/igniteui.angular2';

export function main() {
	describe('Infragistics Angular2 Grid', () => {

		beforeEach(() => {
			TestBed.configureTestingModule({
				declarations: [Infragistics.Column, Infragistics.Features, Infragistics.IgGridPagingFeature, Infragistics.IgGridComponent, 
					Infragistics.IgGridCellMergingFeature, Infragistics.IgGridAppendRowsOnDemandFeature, Infragistics.IgGridColumnFixingFeature,
					Infragistics.IgGridColumnMovingFeature, Infragistics.IgGridFilteringFeature, Infragistics.IgGridGroupByFeature,
					Infragistics.IgGridHidingFeature, Infragistics.IgGridHidingFeature, Infragistics.IgGridMultiColumnHeadersFeature,
					Infragistics.IgGridResizingFeature, Infragistics.IgGridResponsiveFeature, Infragistics.IgGridRowSelectorsFeature, 
					Infragistics.IgGridSelectionFeature, Infragistics.IgGridSortingFeature, Infragistics.IgGridSummariesFeature,
					Infragistics.IgGridTooltipsFeature, Infragistics.IgGridUpdatingFeature, TestComponent]
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

		it('should recreate correctly when setting new set of options', (done) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="opts"></ig-grid></div>';
			TestBed.overrideComponent(TestComponent, {
				set: {
					template: template
				}
			});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestComponent);
				fixture.detectChanges();
				fixture.componentInstance.opts = fixture.componentInstance.opts2;
				fixture.detectChanges();

				expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgGridComponent)
					.toBe(true);
				expect($(fixture.debugElement.nativeElement).find("#grid1").data("igGridFiltering") !== undefined)
					.toBe(true);
				expect($(fixture.debugElement.nativeElement).find("#grid1").data("igGridUpdating") === undefined)
					.toBe(true);
				expect($(fixture.debugElement.nativeElement).find("#grid1_container").height() === 400)
					.toBe(true);
				expect($(fixture.debugElement.nativeElement).find("#grid1_container tr[data-header-row] th").length)
					.toBe(2);
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

		it('should recreate correctly when there are top level options ', (done) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [dataSource]="data" [caption]="\'Grid\'" [(options)]="opts"></ig-grid></div>';
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

				fixture.componentInstance.opts = fixture.componentInstance.opts2;
				fixture.detectChanges();

				expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgGridComponent)
					.toBe(true);
				expect($(fixture.debugElement.nativeElement).find("#grid1").data("igGridFiltering") !== undefined)
					.toBe(true);
				expect($(fixture.debugElement.nativeElement).find("#grid1").data("igGridUpdating") === undefined)
					.toBe(true);
				expect($(fixture.debugElement.nativeElement).find("#grid1_container").height() === 400)
					.toBe(true);
				expect($(fixture.debugElement.nativeElement).find("#grid1_container tr[data-header-row] th").length)
					.toBe(2);
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
				fixture.componentInstance.data.splice(2, 1);
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

		it('should initialize grid features', (done) => {
			var template = "<ig-grid [widgetId]='gridID' [width]='w' [autoCommit]='true' [dataSource]='data' [height]='h' [autoGenerateColumns]='false' [primaryKey]='\"Id\"'>" +
				"<column [key]=\"'Id'\" [(headerText)]=\"idHeaderText\" [width]=\"'165px'\" [dataType]=\"'number'\"></column>" +
				"<column [key]=\"'Name'\" [headerText]=\"'Name'\" [width]=\"'250px'\" [dataType]=\"'string'\"></column>" +
				"<column [key]=\"'HireDate'\" [headerText]=\"'Quantity per unit'\" [width]=\"'250px'\" [dataType]=\"'date'\"></column>" +
				"<features>" +
				"<paging [(currentPageIndex)]=\"pi\" [pageSize]=\"'2'\"> </paging>" + 
				"<sorting></sorting><filtering></filtering><hiding></hiding><group-by></group-by>" + 
				"<column-moving></column-moving><cell-merging></cell-merging><multi-column-headers></multi-column-headers>" + 
				"<summaries></summaries>" + 
				"</features>" + 
			"</ig-grid>";
			TestBed.overrideComponent(TestComponent, {
				set: {
					template: template
				}
			});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestComponent), $grid;
				fixture.detectChanges();
				$grid = $("#grid1"); 
				expect($grid.data("igGridPaging") !== undefined).toBeTruthy("Paging feature not initialized");
				expect($grid.data("igGridSorting") !== undefined).toBeTruthy("Sorting feature not initialized");
				expect($grid.data("igGridFiltering") !== undefined).toBeTruthy("Filtering feature not initialized");
				expect($grid.data("igGridHiding") !== undefined).toBeTruthy("Hiding feature not initialized");
				expect($grid.data("igGridGroupBy") !== undefined).toBeTruthy("GroupBy feature not initialized");
				expect($grid.data("igGridColumnMoving") !== undefined).toBeTruthy("Column Moving feature not initialized");
				expect($grid.data("igGridCellMerging") !== undefined).toBeTruthy("Cell Merging feature not initialized");
				expect($grid.data("igGridMultiColumnHeaders") !== undefined).toBeTruthy("Multi Column Headers feature not initialized");
				expect($grid.data("igGridSummaries") !== undefined).toBeTruthy("Summaries feature not initialized");
				done();
			});
		});

		it('should initialize grid features 2', (done) => {
			var template = "<ig-grid [widgetId]='gridID' [width]='gridWidth' [autoCommit]='true' [dataSource]='data' [height]='h' [autoGenerateColumns]='false' [primaryKey]='\"Id\"'>" +
				"<column [key]=\"'Id'\" [(headerText)]=\"idHeaderText\" [width]=\"'165px'\" [dataType]=\"'number'\"></column>" +
				"<column [key]=\"'Name'\" [headerText]=\"'Name'\" [width]=\"'250px'\" [dataType]=\"'string'\"></column>" +
				"<column [key]=\"'HireDate'\" [headerText]=\"'Quantity per unit'\" [width]=\"'250px'\" [dataType]=\"'date'\"></column>" +
				"<features>" +
				"<column-fixing></column-fixing><selection></selection><row-selectors></row-selectors><updating></updating><tooltips></tooltips>" + 
				"</features>" + 
			"</ig-grid>";
			TestBed.overrideComponent(TestComponent, {
				set: {
					template: template
				}
			});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestComponent), $grid;
				fixture.detectChanges();
				fixture.componentInstance.gridWidth = "400px";
				$grid = $("#grid1");
				expect($grid.data("igGridColumnFixing") !== undefined).toBeTruthy("Column Fixing feature not initialized");
				expect($grid.data("igGridSelection") !== undefined).toBeTruthy("Selection feature not initialized");
				expect($grid.data("igGridRowSelectors") !== undefined).toBeTruthy("Row Selectors feature not initialized");
				expect($grid.data("igGridUpdating") !== undefined).toBeTruthy("Updating feature not initialized");
				expect($grid.data("igGridTooltips") !== undefined).toBeTruthy("Tooltips feature not initialized");
				done();
			});
		});

		it('should initialize grid features 3', (done) => {
			var template = "<ig-grid [widgetId]='gridID' [width]='gridWidth' [autoCommit]='true' [dataSource]='data' [height]='400' [autoGenerateColumns]='false' [primaryKey]='\"Id\"'>" +
				"<column [key]=\"'Id'\" [(headerText)]=\"idHeaderText\" [width]=\"'165px'\" [dataType]=\"'number'\"></column>" +
				"<column [key]=\"'Name'\" [headerText]=\"'Name'\" [width]=\"'250px'\" [dataType]=\"'string'\"></column>" +
				"<column [key]=\"'HireDate'\" [headerText]=\"'Quantity per unit'\" [width]=\"'250px'\" [dataType]=\"'date'\"></column>" +
				"<features>" +
				"<append-rows-on-demand></append-rows-on-demand><responsive></responsive>" + 
				"</features>" + 
			"</ig-grid>";
			TestBed.overrideComponent(TestComponent, {
				set: {
					template: template
				}
			});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestComponent), $grid;
				fixture.detectChanges();
				fixture.componentInstance.gridWidth = "400px";
				$grid = $("#grid1");
				expect($grid.data("igGridAppendRowsOnDemand") !== undefined).toBeTruthy("Append Rows On Demand feature not initialized");
				expect($grid.data("igGridResponsive") !== undefined).toBeTruthy("Responsive feature not initialized");
				done();
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
					expect($(fixture.debugElement.nativeElement).find("#grid1 thead th#grid1_Id").text())
						.toBe("Changed ID");
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
					expect($(fixture.debugElement.nativeElement).find("#grid1_container thead th#grid1_Id").text())
						.toBe("Changed ID");
					expect($(fixture.debugElement.nativeElement).find("#grid1_container thead th").length)
						.toBe(3);
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

		it('should recreate the grid when there are nested directives with options(No change)', (done) => {
			var template = "<ig-grid [widgetId]='gridID' [(options)]='opts1'>" +
				"<column [key]=\"'Id'\" [(headerText)]=\"idHeaderText\" [width]=\"'165px'\" [dataType]=\"'number'\"></column>" +
				"<column [key]=\"'Name'\" [headerText]=\"'Name'\" [width]=\"'250px'\" [dataType]=\"'string'\"></column>" +
				"<column [key]=\"'HireDate'\" [headerText]=\"'Quantity per unit'\" [width]=\"'250px'\" [dataType]=\"'date'\"></column>" +
				"<features>" + 
				"<paging [pageSize]=\"'2'\" [(currentPageIndex)]=\"pi\"></paging>" +
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
				fixture.componentInstance.opts1 = fixture.componentInstance.opts3;
				fixture.detectChanges();

				expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgGridComponent)
					.toBe(true);
				expect($(fixture.debugElement.nativeElement).find("#grid1").data("igGridPaging") !== undefined)
					.toBe(true);
				expect($(fixture.debugElement.nativeElement).find("#grid1_container").height() === 400)
					.toBe(true);
				expect($(fixture.debugElement.nativeElement).find("#grid1_container tr[data-header-row] th").length)
					.toBe(3);
				done();
			});
		});

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
					{ "Id": "4", "Date": "2017-06-06" },
					{ "Id": "5", "Date": "2017-06-07" },
					{ "Id": "6", "Date": "2017-06-08" }
				];
				setTimeout(() => {
					fixture.detectChanges();
					$(fixture.debugElement.nativeElement).find("#grid1").igGridFiltering("filter", ([{ fieldName: "Date", expr: "2017-06-09", cond: "notOn" }]));
					expect($(fixture.debugElement.nativeElement).find("#grid1_container .ui-iggrid-results").text())
						.toBe("3 matching records");
					done();
				}, 500);
			});
		});
		it('should populate featuerList when features are defined via grid options.', (done) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="optsAllFeatures" [(dataSource)]="data1"></ig-grid></div>';
			TestBed.overrideComponent(TestComponent, {
				set: {
					template: template
				}
			});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestComponent);
				fixture.detectChanges();		
				var list = fixture.componentInstance.viewChild.featuresList;
				expect(list.allFeatures.length).toBe(14);
				expect(list.updating !== undefined).toBeTruthy("Feature should be populated.");
				expect(list.filtering !== undefined).toBeTruthy("Feature should be populated.");
				expect(list.paging !== undefined).toBeTruthy("Feature should be populated.");
				expect(list.columnFixing !== undefined).toBeTruthy("Feature should be populated.");
				expect(list.columnMoving !== undefined).toBeTruthy("Feature should be populated.");
				expect(list.sorting !== undefined).toBeTruthy("Feature should be populated.");
				expect(list.tooltips !== undefined).toBeTruthy("Feature should be populated.");
				expect(list.cellMerging !== undefined).toBeTruthy("Feature should be populated.");
				expect(list.selection !== undefined).toBeTruthy("Feature should be populated.");
				expect(list.rowSelectors !== undefined).toBeTruthy("Feature should be populated.");
				expect(list.resizing !== undefined).toBeTruthy("Feature should be populated.");
				expect(list.multiColumnHeaders !== undefined).toBeTruthy("Feature should be populated.");
				expect(list.columnFixing !== undefined).toBeTruthy("Feature should be populated.");
				expect(list.summaries !== undefined).toBeTruthy("Feature should be populated.");
				done();
			});
		});

		it('should populate featuerList when features are defined via grid options - part 2.', (done) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="optsAllFeatures2" [(dataSource)]="data1"></ig-grid></div>';
			TestBed.overrideComponent(TestComponent, {
				set: {
					template: template
				}
			});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestComponent);
				fixture.detectChanges();		
				var list = fixture.componentInstance.viewChild.featuresList;
				expect(list.allFeatures.length).toBe(2);
				expect(list.appendRowsOnDemand !== undefined).toBeTruthy("Feature should be populated.");
				expect(list.responsive !== undefined).toBeTruthy("Feature should be populated.");
				done();
			});
		});
		it('should populate featuerList when features are defined via grid options - part 3.', (done) => {
			var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="optsAllFeatures3" [(dataSource)]="data1"></ig-grid></div>';
			TestBed.overrideComponent(TestComponent, {
				set: {
					template: template
				}
			});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestComponent);
				fixture.detectChanges();		
				var list = fixture.componentInstance.viewChild.featuresList;
				expect(list.allFeatures.length).toBe(1);
				expect(list.groupBy !== undefined).toBeTruthy("Feature should be populated.");
				done();
			});
		});
	});
}

@Component({
	selector: 'test-cmp',
	template: '<div></div>' //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
})
class TestComponent {
	public opts: any;
	public opts1: any;
	public opts2: any;
	public opts3: any;
	private gridID: string;
	public data: Array<any>;
	public data1: Array<any>;
	private cdi: number;
	public pi: number;
	private firedEvent: any;
	public caption: string;
	public idHeaderText: string;
	public gridWidth: string;
	public optsAllFeatures:any;
	public optsAllFeatures2:any;
	public optsAllFeatures3:any;
	@ViewChild(Infragistics.IgGridComponent) public viewChild: Infragistics.IgGridComponent;

	constructor() {
		this.gridID = "grid1";
		this.cdi = 0;
		this.caption = "My Caption";
		this.idHeaderText = "Product Id";
		this.pi = 1;
		this.gridWidth = "800px";
		this.data = [
			{ "Id": 1, "Name": "John Smith", "Age": 45, "HireDate": "2002-05-09" },
			{ "Id": 2, "Name": "Mary Johnson", "Age": 32, "HireDate": "2004-01-18" },
			{ "Id": 3, "Name": "Bob Ferguson", "Age": 27, "HireDate": "2003-03-03" }
		];
		this.data1 = [
			{ "Id": "1", "Date": "2013-08-07" },
			{ "Id": "2", "Date": "2013-08-08" },
			{ "Id": "3", "Date": "2013-08-09" }
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

		this.opts3 = {
			width: "100%",
			height: "400px",
			autoCommit: true,
			autoGenerateColumns: false,
			primaryKey: "Id"
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

		this.optsAllFeatures = {
			width: "700px",
			height: "400px",
			autoCommit: true,
			autoGenerateColumns: false,
			columns: [
				{ key: "Id", headerText: "ID", width: "100px", dataType: "string" },
				{ key: "Date", headerText: "Date", dataType: "date", width: "100px", format: "dd/MM/yyyy" },
			],
			primaryKey: "Id",
			features: [
				{
					name: "Filtering"
				},
				{
					name: "Updating"
				},
				{
					name: "Paging"
				},
				{
					name: "ColumnFixing"
				},
				{
					name: "Sorting"
				},
				{
					name: "Summaries"
				},
				{
					name: "Hiding"
				},
				{
                	name: "ColumnMoving"
                },
				{
                	name: "Tooltips"
                },
				{
					name: "CellMerging"
				},
				{
					name: "Selection"
				},
				{
					name: "RowSelectors"
				},
				//{
				//name: "AppendRowsOnDemand"
				//},
				//{
				//name: "GroupBy"
				//},
				{
					name: "Resizing"
				},
				{
					name: "MultiColumnHeaders"
				},
				//{
				//	name: "Responsive"
				//}
			]
		};
		this.optsAllFeatures2 = {
			width: "700px",
			height: "400px",
			autoCommit: true,
			autoGenerateColumns: false,
			columns: [
				{ key: "Id", headerText: "ID", width: "100px", dataType: "string" },
				{ key: "Date", headerText: "Date", dataType: "date", width: "100px", format: "dd/MM/yyyy" },
			],
			primaryKey: "Id",
			features: [
				{
				name: "AppendRowsOnDemand"
				},
				{
				name: "Responsive"
				}
			]
		};

		this.optsAllFeatures3 = {
			width: "700px",
			height: "400px",
			autoCommit: true,
			autoGenerateColumns: false,
			columns: [
				{ key: "Id", headerText: "ID", width: "100px", dataType: "string" },
				{ key: "Date", headerText: "Date", dataType: "date", width: "100px", format: "dd/MM/yyyy" },
			],
			primaryKey: "Id",
			features: [
				{
					name:"GroupBy"
				}
			]
		};
		
	};
	

	public cellClickHandler(evt) {
		this.firedEvent = evt;
	}
}