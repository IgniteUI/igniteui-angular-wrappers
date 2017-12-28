// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import * as Infragistics from '../../../src/igniteui.angular2';

export function main() {
    describe('Infragistics Angular2 HierarchicalGrid', function () {

        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [Infragistics.IgHierarchicalGridComponent, TestComponent]
            });
        });

       it('should initialize correctly', (done) => {
           var template = '<div><ig-hierarchical-grid [(widgetId)]="gridID" [(options)]="opts"></ig-hierarchical-grid></div>';
           TestBed.overrideComponent(TestComponent, {
               set: {
                   template: template
               }
           });
           TestBed.compileComponents().then(() => {
               let fixture = TestBed.createComponent(TestComponent);
               fixture.detectChanges();
               expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgHierarchicalGridComponent)
                   .toBe(true);
               done();
           });
       });

       it('should reflect changes when a record in the data changes', (done) => {
           var template = '<div><ig-hierarchical-grid [(widgetId)]="gridID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-hierarchical-grid></div>';
           TestBed.overrideComponent(TestComponent, {
               set: {
                   template: template
               }
           });
           TestBed.compileComponents().then(() => {
               let fixture = TestBed.createComponent(TestComponent);
               fixture.detectChanges();
               fixture.componentInstance.data[0].Name = "Test";
               fixture.detectChanges();
               setTimeout(() => {
                   fixture.detectChanges();
                   expect($(fixture.debugElement.nativeElement).find("#grid1 tr:first td[aria-describedby='grid1_Name']").text())
                       .toBe("Test");
                   done();
               }, 10);
           });
       });

       it('should reflect changes when a record is removed from the data', (done) => {
           var template = '<div><ig-hierarchical-grid [(widgetId)]="gridID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-hierarchical-grid></div>';
           TestBed.overrideComponent(TestComponent, {
               set: {
                   template: template
               }
           });
           TestBed.compileComponents().then(() => {
               let fixture = TestBed.createComponent(TestComponent);
               fixture.detectChanges();
               //remove item
               fixture.componentInstance.data.removeAt(0);

               setTimeout(() => {
                   fixture.detectChanges();
                   expect($(fixture.debugElement.nativeElement).find("#grid1 tr").length)
                       .toBe(2);
                   expect($(fixture.debugElement.nativeElement).find("#grid1 tr:first td[aria-describedby='grid1_Name']").text())
                       .toBe("Beverages");
                   done();
               }, 10);
           });
       });

       it('should reflect changes when a record is added from the data', (done) => {
           var template = '<div><ig-hierarchical-grid [(widgetId)]="gridID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-hierarchical-grid></div>';
           TestBed.overrideComponent(TestComponent, {
               set: {
                   template: template
               }
           });
           TestBed.compileComponents().then(() => {
               let fixture = TestBed.createComponent(TestComponent);
               fixture.detectChanges();
               //add item
               fixture.componentInstance.data.push({ ID: 200, Name: "John Snow" });
               setTimeout(() => {
                   fixture.detectChanges();
                   expect($(fixture.debugElement.nativeElement).find("#grid1 tr").length)
                       .toBe(4);
                   expect($(fixture.debugElement.nativeElement).find("#grid1 tr:last td[aria-describedby='grid1_Name']").text())
                       .toBe("John Snow");
                       done();
               }, 10);
           });
       });

       it('should reflect changes when records in the grid are updated', (done) => {
           var template = '<div><ig-hierarchical-grid [(widgetId)]="gridID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-hierarchical-grid></div>';
           TestBed.overrideComponent(TestComponent, {
               set: {
                   template: template
               }
           });
           TestBed.compileComponents().then(() => {
               let fixture = TestBed.createComponent(TestComponent);
               fixture.detectChanges();

               //update row
               $("#grid1").igGridUpdating("updateRow", 0, { Name: "Maria" });
               setTimeout(() => {
                   fixture.detectChanges();
                   var fName = fixture.componentInstance.data[0].Name;
                   expect(fName).toBe("Maria");
                   done();
               }, 10);
           });
       });

       it('should reflect changes when records in the grid are deleted', (done) => {
           var template = '<div><ig-hierarchical-grid [(widgetId)]="gridID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-hierarchical-grid></div>';
           TestBed.overrideComponent(TestComponent, {
               set: {
                   template: template
               }
           });
           TestBed.compileComponents().then(() => {
               let fixture = TestBed.createComponent(TestComponent);
               fixture.detectChanges();
               //delete row
               $("#grid1").igGridUpdating("deleteRow", 0);
               setTimeout(() => {
                   fixture.detectChanges();
                   expect(fixture.componentInstance.data.length).toBe(2);
                   expect(fixture.componentInstance.data[0].ID).toBe(1);
                   done();
               }, 10);
           });
       });

       it('should reflect changes when records in the grid are added', (done) => {
           var template = '<div><ig-hierarchical-grid [(widgetId)]="gridID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-hierarchical-grid></div>';
           TestBed.overrideComponent(TestComponent, {
               set: {
                   template: template
               }
           });
           TestBed.compileComponents().then(() => {
               let fixture = TestBed.createComponent(TestComponent);
               fixture.detectChanges();
               $("#grid1").igGridUpdating("addRow", { ID: 200, Name: "Snow" });
               setTimeout(() => {
                   fixture.detectChanges();
                   expect(fixture.componentInstance.data.length).toBe(4);
                   expect(fixture.componentInstance.data[3].ID).toBe(200);
                   done();
               }, 10);
           });
       });

       it('should reflect changes when child records are changed', (done) => {
           var template = '<div><ig-hierarchical-grid [(widgetId)]="gridID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-hierarchical-grid></div>';
           TestBed.overrideComponent(TestComponent, {
               set: {
                   template: template
               }
           });
           TestBed.compileComponents().then(() => {
               let fixture = TestBed.createComponent(TestComponent);
               fixture.detectChanges();
               //expand first record 
               var row = $("#grid1").igGrid("rowAt", 0);
               $("#grid1").igHierarchicalGrid("expand", row, () => {
					//change data child data
					fixture.componentInstance.data[0].Products.removeAt(0);

					setTimeout(() => {
						fixture.detectChanges();
						expect($(fixture.debugElement.nativeElement).find("#grid1").igHierarchicalGrid("option", "dataSource")[0].Products.length)
							.toBe(0);
						done();
					}, 10);
				});
           });
       });

       it('should reflect changes when a value in the child grid changes', (done) => {
           var template = '<div><ig-hierarchical-grid [(widgetId)]="gridID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-hierarchical-grid></div>';
           TestBed.overrideComponent(TestComponent, {
               set: {
                   template: template
               }
           });
           TestBed.compileComponents().then(() => {
               let fixture = TestBed.createComponent(TestComponent);
               fixture.detectChanges();
               //expand first record 
               var row = $("#grid1").igGrid("rowAt", 0);
               $("#grid1").igHierarchicalGrid("expand", row, () => {
					//change data child data
					fixture.componentInstance.data[0].Products[0].Name = "Custom Name";
					setTimeout(() => {
						fixture.detectChanges();
						expect($($(fixture.debugElement.nativeElement).find("#grid1_0_Products_child").igGrid("cellAt", 1, 0)).text())
							.toBe("Custom Name");
							done();
					}, 10);
				});
           });
       });

        it('should initialize correctly when datasource is remote', (done) => {
            $['mockjax']({
				url: "myURL/Categories",
				contentType: 'application/json',
				dataType: 'json',
				responseText: '[{"ID": 0, "Name": "Food", "Products":[{"ID":0,"Name":"Bread","Description":"Whole grain bread","ReleaseDate":"1992-01-01T00:00:00","DiscontinuedDate":null,"Rating":4,"Price":2.5}]}]'
			});
            var template = '<div><ig-hierarchical-grid [(widgetId)]="gridID2" [(options)]="opts2" [changeDetectionInterval]="cdi"></ig-hierarchical-grid></div>';
            TestBed.overrideComponent(TestComponent, {
                set: {
                    template: template
                }
            });
            TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                setTimeout(() => {
                    expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgHierarchicalGridComponent)
                        .toBe(true);
                    done();
                }, 500);
            });
        });
        it("should detect changes when original data source is changed but the data source length is the same.", (done) => {
			var template = '<ig-hierarchical-grid [(widgetId)]="gridID" [(options)]="optsNew"></ig-hierarchical-grid>';		
			TestBed.overrideComponent(TestComponent, {
				set: {
					template: template
				}
			});
			TestBed.compileComponents().then(() => {
				var	fixture = TestBed.createComponent(TestComponent);
				fixture.componentInstance.singleRecData.length = 0;
				Array.prototype.push.apply( fixture.componentInstance.singleRecData, fixture.componentInstance.singleRecData2);
				fixture.detectChanges();						
				let $grid = $("#grid1");
				expect($grid.data("igGrid").allRows().length === 1).toBeTruthy("There should be one record in grid.");
				expect($($grid.data("igGrid").cellById(1, "Name")).text() === "Test").toBeTruthy("Change in text should be reflected in grid.");
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
    private opts: any;
    private opts2: any;
    private optsNew: any;
    private gridID: string;
    private gridID2: string;
    public data: any;
    protected cdi = 0;
    public singleRecData: Array<any>;
	public singleRecData2: Array<any>;

    @ViewChild(Infragistics.IgHierarchicalGridComponent) public viewChild: Infragistics.IgHierarchicalGridComponent;

    constructor() {
        this.data = [
            {
                "ID": 0,
                "Name": "Food",
                "Products": [
                    { "ID": 0, "Name": "Bread", "Price": "2.5" }
                ]
            },
            {
                "ID": 1,
                "Name": "Beverages",
                "Products": [
                    { "ID": 1, "Name": "Milk", "Price": "3.5" },
                    { "ID": 2, "Name": "Vint soda", "Price": "20.9" }
                ]
            },
            {
                "ID": 2,
                "Name": "Electronics",
                "Products": [
                    { "ID": 7, "Name": "DVD Player", "Price": "35.88" },
                    { "ID": 8, "Name": "LCD HDTV", "Price": "1088.8" }
                ]
            }
        ];
        this.singleRecData = [ {
                "ID": 0,
                "Name": "Food",
                "Products": [
                    { "ID": 0, "Name": "Bread", "Price": "2.5" }
                ]
            }];
       this.singleRecData2 = [ {
                "ID": 1,
                "Name": "Test",
                "Products": [
                    { "ID": 1, "Name": "Milk", "Price": "3.5" },
                    { "ID": 2, "Name": "Vint soda", "Price": "20.9" }
                ]
            }];
        this.gridID = "grid1";
        this.gridID2 = "hgrid";
        this.opts = {
            autoCommit: true,
            dataSource: this.data,
            primaryKey: "ID",
            width: "100%",
            height: "400px",
            autoGenerateColumns: false,
            autoGenerateColumnLayouts: false,
            columns: [
                { headerText: "ID", key: "ID", width: "50px", dataType: "number" },
                { headerText: "Name", key: "Name", width: "130px", dataType: "string" }
            ],
            features: [
                {
                    name: "Updating"
                }
            ],
            columnLayouts: [
                {
                    key: "Products",
                    responseDataKey: "",
                    childrenDataProperty: "Products",
                    autoGenerateColumns: false,
                    primaryKey: "ID",
                    columns: [
                        { key: "ID", headerText: "ID", width: "25px" },
                        { key: "Name", headerText: "Product Name", width: "90px" },
                        { key: "Price", headerText: "Price", dataType: "number", width: "55px" }
                    ]
                }
            ]
        };
        this.optsNew = {
            autoCommit: true,
            dataSource: this.singleRecData,
            primaryKey: "ID",
            width: "100%",
            height: "400px",
            autoGenerateColumns: false,
            autoGenerateColumnLayouts: false,
            columns: [
                { headerText: "ID", key: "ID", width: "50px", dataType: "number" },
                { headerText: "Name", key: "Name", width: "130px", dataType: "string" }
            ],
            columnLayouts: [
                {
                    key: "Products",
                    responseDataKey: "",
                    childrenDataProperty: "Products",
                    autoGenerateColumns: false,
                    primaryKey: "ID",
                    columns: [
                        { key: "ID", headerText: "ID", width: "25px" },
                        { key: "Name", headerText: "Product Name", width: "90px" },
                        { key: "Price", headerText: "Price", dataType: "number", width: "55px" }
                    ]
                }
            ]
        };

        this.opts2 = {
            dataSource: "myURL/Categories"
        };
    }
}