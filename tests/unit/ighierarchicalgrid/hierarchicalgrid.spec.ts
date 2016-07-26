// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { inject, TestComponentBuilder } from '@angular/core/testing';
import { Component, ViewChild, TemplateRef } from '@angular/core';
import * as Infragistics from '../../../src/igniteui.angular2';

export function main() {
    describe('Infragistics Angular2 HierarchicalGrid', function () {
        it('should initialize correctly',
            inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
                var template = '<div><ig-hierarchical-grid [(widgetId)]="gridID" [(options)]="opts"></ig-hierarchical-grid></div>';
                return tcb.overrideTemplate(TestComponent, template)
                    .createAsync(TestComponent)
                    .then((fixture) => {
                        fixture.detectChanges();
                        expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgHierarchicalGridComponent)
                            .toBe(true);
                    });
            }));

        it('should reflect changes when a record in the data changes',
            inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
                var template = '<div><ig-hierarchical-grid [(widgetId)]="gridID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-hierarchical-grid></div>';
                return tcb.overrideTemplate(TestComponent, template)
                    .createAsync(TestComponent)
                    .then((fixture) => {
                        fixture.detectChanges();
                        fixture.componentInstance.data[0].Name = "Test";
                        fixture.detectChanges();
                        setTimeout(() => {
                            fixture.detectChanges();
                            expect($(fixture.debugElement.nativeElement).find("#grid1 tr:first td[aria-describedby='grid1_Name']").text())
                                .toBe("Test");
                        }, 10);
                    });
            }));

        it('should reflect changes when a record is removed from the data',
            inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
                var template = '<div><ig-hierarchical-grid [(widgetId)]="gridID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-hierarchical-grid></div>';
                return tcb.overrideTemplate(TestComponent, template)
                    .createAsync(TestComponent)
                    .then((fixture) => {
                        fixture.detectChanges();
                        //remove item
                        fixture.componentInstance.data.removeAt(0);

                        setTimeout(() => {
                            fixture.detectChanges();
                            expect($(fixture.debugElement.nativeElement).find("#grid1 tr").length)
                                .toBe(2);
                            expect($(fixture.debugElement.nativeElement).find("#grid1 tr:first td[aria-describedby='grid1_Name']").text())
                                .toBe("Beverages");
                        }, 10);
                    });
            }));

        it('should reflect changes when a record is added from the data',
            inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
                var template = '<div><ig-hierarchical-grid [(widgetId)]="gridID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-hierarchical-grid></div>';
                return tcb.overrideTemplate(TestComponent, template)
                    .createAsync(TestComponent)
                    .then((fixture) => {
                        fixture.detectChanges();
                        //add item
                        fixture.componentInstance.data.push({ ID: 200, Name: "John Snow" });
                        setTimeout(() => {
                            fixture.detectChanges();
                            expect($(fixture.debugElement.nativeElement).find("#grid1 tr").length)
                                .toBe(4);
                            expect($(fixture.debugElement.nativeElement).find("#grid1 tr:last td[aria-describedby='grid1_Name']").text())
                                .toBe("John Snow");
                        }, 10);
                    });
            }));

        it('should reflect changes when records in the grid are updated',
            inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
                var template = '<div><ig-hierarchical-grid [(widgetId)]="gridID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-hierarchical-grid></div>';
                return tcb.overrideTemplate(TestComponent, template)
                    .createAsync(TestComponent)
                    .then((fixture) => {
                        fixture.detectChanges();

                        //update row
                        $("#grid1").igGridUpdating("updateRow", 0, { Name: "Maria" });
                        setTimeout(() => {
                            fixture.detectChanges();
                            var fName = fixture.componentInstance.data[0].Name;
                            expect(fName).toBe("Maria");
                        }, 10);
                    });
            }));

        it('should reflect changes when records in the grid are deleted',
            inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
                var template = '<div><ig-hierarchical-grid [(widgetId)]="gridID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-hierarchical-grid></div>';
                return tcb.overrideTemplate(TestComponent, template)
                    .createAsync(TestComponent)
                    .then((fixture) => {
                        fixture.detectChanges();
                        //delete row
                        $("#grid1").igGridUpdating("deleteRow", 0);
                        setTimeout(() => {
                            fixture.detectChanges();
                            expect(fixture.componentInstance.data.length).toBe(2);
                            expect(fixture.componentInstance.data[0].ID).toBe(1);
                        }, 10);
                    });
            }));

        it('should reflect changes when records in the grid are added',
            inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
                var template = '<div><ig-hierarchical-grid [(widgetId)]="gridID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-hierarchical-grid></div>';
                return tcb.overrideTemplate(TestComponent, template)
                    .createAsync(TestComponent)
                    .then((fixture) => {
                        fixture.detectChanges();
                        $("#grid1").igGridUpdating("addRow", { ID: 200, Name: "Snow" });
                        setTimeout(() => {
                            fixture.detectChanges();
                            expect(fixture.componentInstance.data.length).toBe(4);
                            expect(fixture.componentInstance.data[3].ID).toBe(200);
                        }, 10);
                    });
            }));



        it('should reflect changes when child records are changes',
            inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
                var template = '<div><ig-hierarchical-grid [(widgetId)]="gridID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-hierarchical-grid></div>';
                return tcb.overrideTemplate(TestComponent, template)
                    .createAsync(TestComponent)
                    .then((fixture) => {
                        fixture.detectChanges();
                        //expand first record 
                        var row = $("#grid1").igGrid("rowAt", 0);
                        $("#grid1").igHierarchicalGrid("expand", row);
                        //change data child data
                        fixture.componentInstance.data[0].Products.removeAt(0);

                        setTimeout(() => {
                            fixture.detectChanges();
                            expect($(fixture.debugElement.nativeElement).find("#grid1").igHierarchicalGrid("option", "dataSource")[0].Products.length)
                                .toBe(0);
                        }, 10);
                    });
            }));

        it('should reflect changes when a value in the child grid changes', (done) => {
            inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
                var template = '<div><ig-hierarchical-grid [(widgetId)]="gridID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-hierarchical-grid></div>';
                return tcb.overrideTemplate(TestComponent, template)
                        .createAsync(TestComponent)
                        .then((fixture) => {
                            fixture.detectChanges();
                            //expand first record 
                            var row = $("#grid1").igGrid("rowAt", 0);
                            $("#grid1").igHierarchicalGrid("expand", row);
                            //change data child data
                            fixture.componentInstance.data[0].Products[0].Name = "Custom Name";
                            setTimeout(() => {
                                fixture.detectChanges();
                                expect($($(fixture.debugElement.nativeElement).find("#grid1_0_Products_child").igGrid("cellAt", 1, 0)).text())
                                    .toBe("Custom Name");
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
    directives: [Infragistics.IgHierarchicalGridComponent]
})
class TestComponent {
    private opts: any;
    private gridID: string;
    public data: any;
    protected cdi = 0;
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

        this.gridID = "grid1";
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
    }
}