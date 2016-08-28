// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { inject, TestComponentBuilder } from '@angular/core/testing';
import { Component, ViewChild, TemplateRef } from '@angular/core';
import * as Infragistics from '../../../src/igniteui.angular2';
import { Tasks } from "../../../samples/data/tasks";

export function main() {
    describe('Infragistics Angular2 TreeGrid', () => {
        it('should initialize correctly', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            var template = '<div><ig-tree-grid [(widgetId)]="gridID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-tree-grid></div>';
            return tcb.overrideTemplate(TestComponent, template)
                .createAsync(TestComponent)
                .then((fixture) => {
                    fixture.detectChanges();
                    expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgTreeGridComponent)
                        .toBe(true);
                });
        }));

        it('should reflect changes when a record in the data changes', (done) => {
            inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
                var template = '<div><ig-tree-grid [(widgetId)]="gridID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-tree-grid></div>';
                return tcb.overrideTemplate(TestComponent, template)
                    .createAsync(TestComponent)
                    .then((fixture) => {
                        fixture.detectChanges();
                        fixture.componentInstance.data[0].tasks = "Test";
                        fixture.detectChanges();
                        setTimeout(() => {
                            fixture.detectChanges();
                            expect($(fixture.debugElement.nativeElement).find("#grid1 tr:first td[aria-describedby='grid1_tasks']").text())
                                .toBe("Test");
                            done();
                        }, 10);
                    });
            })()
        });

        it('should reflect changes when a record is added/removed from the data', (done) => {
            inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
                var template = '<div><ig-tree-grid [(widgetId)]="gridID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-tree-grid></div>';
                return tcb.overrideTemplate(TestComponent, template)
                    .createAsync(TestComponent)
                    .then((fixture) => {
                        fixture.detectChanges();
                        //remove item
                        fixture.componentInstance.data[0].products.removeAt(4);

                        setTimeout(() => {
                            fixture.detectChanges();
                            expect($(fixture.debugElement.nativeElement).find("#grid1 tr").length)
                                .toBe(11);

                            //add item
                            fixture.componentInstance.data.push({ "id": 1000, "tasks": "Test Planning", "start": "6/2/2014", "finish": "6/4/2014", "duration": "3d", "progress": "100%" });
                            setTimeout(() => {
                                fixture.detectChanges();
                                expect($(fixture.debugElement.nativeElement).find("#grid1 tr").length)
                                    .toBe(12);
                                expect($(fixture.debugElement.nativeElement).find("#grid1 tr:last td[aria-describedby='grid1_tasks']").text())
                                    .toBe("Test Planning");
                                done();
                            }, 10);
                        }, 10);
                    });
            })();
        });

        it('should reflect changes when the root record is removed', (done) => {
            inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
                var template = '<div><ig-tree-grid [(widgetId)]="gridID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-tree-grid></div>';
                return tcb.overrideTemplate(TestComponent, template)
                    .createAsync(TestComponent)
                    .then((fixture) => {
                        fixture.detectChanges();
                        //remove root item
                        fixture.componentInstance.data.splice(0);

                        setTimeout(() => {
                            fixture.detectChanges();
                            expect($(fixture.debugElement.nativeElement).find("#grid1 tr").length)
                                .toBe(0);
                            done();
                        }, 10);
                    });
            })();
        });

        it('should reflect changes when records in the treegrid are updated/added/deleted', (done) => {
            inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
                var template = '<div><ig-tree-grid [(widgetId)]="gridID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-tree-grid></div>';
                return tcb.overrideTemplate(TestComponent, template)
                    .createAsync(TestComponent)
                    .then((fixture) => {
                        fixture.detectChanges();

                        //update row
                        $("#grid1").igTreeGridUpdating("updateRow", 0, { tasks: "Updated Plan" });
                        setTimeout(() => {
                            fixture.detectChanges();
                            var task = fixture.componentInstance.data[0].tasks;
                            expect(task).toBe("Updated Plan");
                            //delete row
                            $("#grid1").igTreeGridUpdating("deleteRow", 6);
                            setTimeout(() => {
                                fixture.detectChanges();
                                expect(fixture.componentInstance.data[0].products.length).toBe(6);
                                //add row
                                $("#grid1").igTreeGridUpdating("addRow", { "id": 1000, "tasks": "Project Plan", "start": "6/2/2014", "finish": "8/22/2014", "duration": "60d", "progress": "32%" });
                                setTimeout(() => {
                                    fixture.detectChanges();
                                    expect(fixture.componentInstance.data.length).toBe(2);
                                    expect(fixture.componentInstance.data[1].id).toBe(1000);
                                    done();
                                }, 10);
                            }, 10);
                        }, 10);
                    });
                })();
            });
    });
}

@Component({
    selector: 'test-cmp',
    template: '<div></div>', //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
    directives: [Infragistics.IgTreeGridComponent]
})
class TestComponent {
    private opts: any;
    private gridID: string;
    public data: Array<any>;
    private cdi = 10;
    @ViewChild(Infragistics.IgTreeGridComponent) public viewChild: Infragistics.IgTreeGridComponent;

    constructor() {
        this.gridID = "grid1";
        //this.cdi = 0;
        this.data = Tasks.getData();

        this.opts = {
            autoCommit: true,
            dataSource: this.data,
            width: "100%",
            height: "400px",
            autoGenerateColumns: false,
            autoGenerateColumnLayouts: false,
            primaryKey: "id",
            childDataKey: "products",
            renderExpansionIndicatorColumn: true,
            columns: [
                { key: "id", headerText: "ID", width: "100px", dataType: "number" },
                { key: "tasks", headerText: "Task", width: "250px", dataType: "string" },
                { key: "start", headerText: "Start", width: "100px", dataType: "date" },
                { key: "finish", headerText: "Finish", width: "100px", dataType: "date" },
                { key: "duration", headerText: "Duration", width: "100px", dataType: "date" },
                { key: "progress", headerText: "Progress", width: "100px", dataType: "date" }
            ],
            features: [{
                name: "Updating"
            }]
        };
    }
}