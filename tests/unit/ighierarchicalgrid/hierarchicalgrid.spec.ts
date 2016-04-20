// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { it, iit, describe, expect, inject, injectAsync, beforeEachProviders, fakeAsync, tick, TestComponentBuilder, AsyncTestCompleter } from 'angular2/testing_internal';
import {Component, ViewChild, TemplateRef} from 'angular2/core';
import * as Infragistics from '../../../src/igniteui.angular2';
import {NorthwindEmployees} from "../../../samples/data/northwind-employees";

export function main() {
    describe('Infragistics Angular2 HierarchicalGrid', function() {
		it('should initialize correctly',
         inject([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
           var template = '<div><ig-hierarchical-grid [(widgetId)]="gridID" [(options)]="opts"></ig-hierarchical-grid></div>';
           tcb.overrideTemplate(TestComponent, template)
               .createAsync(TestComponent)
               .then((fixture) => {
                fixture.detectChanges();
				expect(fixture.debugElement.componentInstance.viewChild).toBeAnInstanceOf(Infragistics.IgHierarchicalGridComponent);
                async.done();
               });
         }));
         
         it('should reflect changes when a record in the data changes',
         inject([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
           var template = '<div><ig-hierarchical-grid [(widgetId)]="gridID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-hierarchical-grid></div>';
           tcb.overrideTemplate(TestComponent, template)
               .createAsync(TestComponent)
               .then((fixture) => {
             	    fixture.detectChanges();
					fixture.componentInstance.data[0].FirstName = "Test";
                    fixture.detectChanges();
					setTimeout(() => {
						fixture.detectChanges();
						expect($(fixture.debugElement.nativeElement).find("#grid1 tr:first td[aria-describedby='grid1_FirstName']").text())
						.toBe("Test");  
						async.done();
					}, 10);
               });
         }));
         
          it('should reflect changes when a record is added/removed from the data',
         inject([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
           var template = '<div><ig-hierarchical-grid [(widgetId)]="gridID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-hierarchical-grid></div>';
           tcb.overrideTemplate(TestComponent, template)
               .createAsync(TestComponent)
               .then((fixture) => {
             	    fixture.detectChanges();
                     //remove item
					fixture.componentInstance.data.removeAt(0);
                      
					setTimeout(() => {					
                        fixture.detectChanges();
						expect($(fixture.debugElement.nativeElement).find("#grid1 tr").length)
						.toBe(8);
                        expect($(fixture.debugElement.nativeElement).find("#grid1 tr:first td[aria-describedby='grid1_FirstName']").text())
                        .toBe("Andrew");                        
                        //add item
                        fixture.componentInstance.data.push({ EmployeeID: 200, LastName: "Snow", FirstName: "John", Title: "Vice President, Sales"});
                        	setTimeout(() => {					
                            fixture.detectChanges();
                            expect($(fixture.debugElement.nativeElement).find("#grid1 tr").length)
                            .toBe(9);   
                                expect($(fixture.debugElement.nativeElement).find("#grid1 tr:last td[aria-describedby='grid1_FirstName']").text())
                                .toBe("John");                         
                            async.done();
                        }, 10);						
					}, 10);
               });
         }));
         
          it('should reflect changes when records in the grid are updated/added/deleted',
         inject([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
           var template = '<div><ig-hierarchical-grid [(widgetId)]="gridID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-hierarchical-grid></div>';
           tcb.overrideTemplate(TestComponent, template)
               .createAsync(TestComponent)
               .then((fixture) => {
             	    fixture.detectChanges();
					
                    //update row
                    $("#grid1").igGridUpdating("updateRow", 1, {FirstName: "Maria"});
                    setTimeout(() => {					
                            fixture.detectChanges();
                            var fName =  fixture.componentInstance.data[0].FirstName;
                            expect(fName).toBe("Maria");                            
                            //delete row
                               $("#grid1").igGridUpdating("deleteRow", 2);                  
                              setTimeout(() => {					
                                fixture.detectChanges();                                
                                expect(fixture.componentInstance.data.length).toBe(8);  
                                expect(fixture.componentInstance.data[1].EmployeeID).toBe(3);      
                                   //add row           
                                   $("#grid1").igGridUpdating("addRow", { EmployeeID: 200, LastName: "Snow", FirstName: "John", Title: "Vice President, Sales"});        
                                   setTimeout(() => {					
                                    fixture.detectChanges();                                
                                    expect(fixture.componentInstance.data.length).toBe(9);  
                                    expect(fixture.componentInstance.data[8].EmployeeID).toBe(200);                      
                                    async.done();
                                }, 10);
                            }, 10);
                        }, 10);
               });
         }));
         
         it('should reflect changes when child records are changes',
         inject([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
           var template = '<div><ig-hierarchical-grid [(widgetId)]="gridID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-hierarchical-grid></div>';
           tcb.overrideTemplate(TestComponent, template)
               .createAsync(TestComponent)
               .then((fixture) => {
             	    fixture.detectChanges();
                    //expand first record 
                    var row = $("#grid1").igGrid("rowAt", 0);
                    $("#grid1").igHierarchicalGrid("expand", row);
                    //change data child data
					fixture.componentInstance.data[0].Orders.results.removeAt(0);
                 
					setTimeout(() => {
						fixture.detectChanges();
						expect($(fixture.debugElement.nativeElement).find("#grid1").igHierarchicalGrid("option", "dataSource")[0].Orders.results.length)
						.toBe(122);  
                         async.done();						
					}, 10);
               });
         }));
         
       it('should reflect changes when a value in the child grid changes',
         inject([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
           var template = '<div><ig-hierarchical-grid [(widgetId)]="gridID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-hierarchical-grid></div>';
           tcb.overrideTemplate(TestComponent, template)
               .createAsync(TestComponent)
               .then((fixture) => {
             	    fixture.detectChanges();
                    //expand first record 
                    var row = $("#grid1").igGrid("rowAt", 0);
                    $("#grid1").igHierarchicalGrid("expand", row);
                    //change data child data
					fixture.componentInstance.data[0].Orders.results[0].ShipName = "Custom ShipName";
					setTimeout(() => {
						fixture.detectChanges();
						expect($($(fixture.debugElement.nativeElement).find("#grid1_1_Orders_child").igGrid("cellAt", 2, 0)).text())
						.toBe("Custom ShipName");  
                         async.done();						
					}, 10);
               });
         }));
    });
}

@Component({
    selector: 'test-cmp',
    template: '<div></div>', //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
    directives: [Infragistics.IgHierarchicalGridComponent]
})
class TestComponent {
	private opts: any;
	private gridID: string;
    public data: any;
    protected cdi = 0;
	@ViewChild(Infragistics.IgHierarchicalGridComponent) public viewChild: Infragistics.IgHierarchicalGridComponent;
	
	constructor() {
        this.data = NorthwindEmployees.getData();
		this.gridID = "grid1";
		this.opts = {
			autoCommit:true,
			dataSource: this.data,
            primaryKey: "EmployeeID",
			width: "100%",
			height: "400px",
			autoGenerateColumns: false,
			autoGenerateColumnLayouts: false,
            
			columns: [
                { key: "EmployeeID", headerText: "EmployeeID", width:"25%", dataType:"number", hidden:true },
				{ key: "FirstName", headerText: "First Name", width:"25%", dataType:"string" },
				{ key: "LastName", headerText: "Last Name", width:"25%", dataType:"string" },
				{ key: "Title", headerText: "Title", width:"25%", dataType:"string" },
				{ key: "BirthDate", headerText: "Birth Date", width:"25%", dataType:"date" }
			],
            features: [
						{
							name: "Updating"
						}
			],
			columnLayouts: [
				{
					key: "Orders",
					responseDataKey: "results",
					primaryKey: "OrderID",
					autoGenerateColumns: false,
					width: "100%",
					columns: [
						{ key: "OrderID", headerText: "OrderID", width:"25%", dataType:"string" },
						{ key: "Freight", headerText: "Freight", width:"25%", dataType:"string" },
						{ key: "ShipName", headerText: "ShipName", width:"25%", dataType:"string" },
						{ key: "ShipAddress", headerText: "ShipAddress", width:"25%", dataType:"string" }
					],
					features: [
						{
							name: "Updating"
						}
					]
				}
			]
		};
	}
}