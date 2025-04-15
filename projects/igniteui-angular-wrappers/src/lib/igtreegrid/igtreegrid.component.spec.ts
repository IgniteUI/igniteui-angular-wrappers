// eslint-disable-next-line max-len
// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import * as Infragistics from '../../public-api';
import { Tasks } from 'src/app/shared/tasks';

describe('Infragistics Angular TreeGrid', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [Infragistics.IgTreeGridComponent, TestComponent]
        });
    });

    it('should initialize correctly', (done) => {
        const template = '<div><ig-tree-grid [(widgetId)]="gridID" [(options)]="opts" [dataSource]="data"></ig-tree-grid></div>';
        TestBed.overrideComponent(TestComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgTreeGridComponent)
                .toBe(true);
            done();
        });
    });

    it('should reflect changes when a record in the data changes', (done) => {
        const template = '<div><ig-tree-grid [(widgetId)]="gridID" [(options)]="opts" [dataSource]="data"></ig-tree-grid></div>';
        TestBed.overrideComponent(TestComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            fixture.componentInstance.data[0].tasks = '';
            fixture.detectChanges();
            fixture.componentInstance.data[0].tasks = 'Test';
            fixture.detectChanges();
            setTimeout(() => {
                fixture.detectChanges();
                expect($(fixture.debugElement.nativeElement).find('#grid1 tr:first td[aria-describedby=\'grid1_tasks\']').text())
                    .toBe('Test');
                done();
            }, 10);
        });
    });

    it('should reflect changes when a record is added/removed from the data', (done) => {
        const template = '<div><ig-tree-grid [(widgetId)]="gridID" [(options)]="opts" [dataSource]="data"></ig-tree-grid></div>';
        TestBed.overrideComponent(TestComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            // remove item
            fixture.componentInstance.data[0].products.removeAt(4);

            fixture.componentInstance.viewChild.markForCheck();

            setTimeout(() => {
                fixture.detectChanges();
                expect($(fixture.debugElement.nativeElement).find('#grid1 tr').length)
                    .toBe(11);

                // add item
                fixture.componentInstance.data.push({ id: 1000, tasks: 'Test Planning', start: '6/2/2014', finish: '6/4/2014', duration: '3d', progress: '100%' });
                setTimeout(() => {
                    fixture.detectChanges();
                    expect($(fixture.debugElement.nativeElement).find('#grid1 tr').length)
                        .toBe(12);
                    expect($(fixture.debugElement.nativeElement).find('#grid1 tr:last td[aria-describedby=\'grid1_tasks\']').text())
                        .toBe('Test Planning');
                    done();
                }, 10);
            }, 10);
        });
    });

    it('should reflect changes when the root record is removed', (done) => {
        const template = '<div><ig-tree-grid [(widgetId)]="gridID" [(options)]="opts" [dataSource]="data"></ig-tree-grid></div>';
        TestBed.overrideComponent(TestComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            // remove root item
            fixture.componentInstance.data.splice(0);

            setTimeout(() => {
                fixture.detectChanges();
                expect($(fixture.debugElement.nativeElement).find('#grid1 tr').length)
                    .toBe(0);
                done();
            }, 10);
        });
    });

    it('should reflect changes when records in the treegrid are updated/added/deleted', (done) => {
        const template = '<div><ig-tree-grid [(widgetId)]="gridID" [(options)]="opts" [dataSource]="data"></ig-tree-grid></div>';
        TestBed.overrideComponent(TestComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            // update row
            $('#grid1').igTreeGridUpdating('updateRow', 0, { tasks: 'Updated Plan' });
            setTimeout(() => {
                fixture.detectChanges();
                const task = fixture.componentInstance.data[0].tasks;
                expect(task).toBe('Updated Plan');
                // delete row
                $('#grid1').igTreeGridUpdating('deleteRow', 6);
                setTimeout(() => {
                    fixture.detectChanges();
                    expect(fixture.componentInstance.data[0].products.length).toBe(6);
                    // add row
                    $('#grid1').igTreeGridUpdating('addRow',
                      { id: 1000, tasks: 'Project Plan', start: '6/2/2014', finish: '8/22/2014', duration: '60d', progress: '32%' });
                    setTimeout(() => {
                        fixture.detectChanges();
                        expect(fixture.componentInstance.data.length).toBe(2);
                        expect(fixture.componentInstance.data[1].id).toBe(1000);
                        done();
                    }, 10);
                }, 10);
            }, 10);
        });
    });

    it('should initialize correctly when datasource is remote', (done) => {
        $['mockjax']({
            url: 'myURL/Categories',
            contentType: 'application/json',
            dataType: 'json',
            responseText: '[{"ID": 0, "Name": "Food", "Products":[{"ID":0,"Name":"Bread","Description":"Whole grain bread","ReleaseDate":"1992-01-01T00:00:00","DiscontinuedDate":null,"Rating":4,"Price":2.5}]}]'
        });
        const template = '<div><ig-tree-grid [(widgetId)]="gridID" [(options)]="opts2" [changeDetectionInterval]="cdi"></ig-tree-grid></div>';
        TestBed.overrideComponent(TestComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgTreeGridComponent)
                .toBe(true);
            done();
        });
    });


    it('should detect changes when original data source is changed but the data source length is the same.', (done) => {
        const template = '<ig-tree-grid [(widgetId)]="gridID" [(options)]="optsNew" [dataSource]="singleRecData"></ig-tree-grid>';
        TestBed.overrideComponent(TestComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            fixture.componentInstance.singleRecData.length = 0;
            Array.prototype.push.apply(fixture.componentInstance.singleRecData, fixture.componentInstance.singleRecData2);
            fixture.detectChanges();
            const $grid = $('#grid1');
            expect($grid.data('igTreeGrid').allRows().length === 1).toBeTruthy('There should be one record in grid.');
            expect($($grid.data('igTreeGrid').cellById(1, 'tasks')).text() === 'Test').toBeTruthy('Change in text should be reflected in grid.');
            done();
        });
    });

    it('should allow setting empty array for data source', (done) => {
        const template = '<ig-tree-grid [(widgetId)]="gridID" [(options)]="optsNew" [(dataSource)]="singleRecData"></ig-tree-grid>';
        TestBed.overrideComponent(TestComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            fixture.componentInstance.singleRecData.length = 0;
            Array.prototype.push.apply(fixture.componentInstance.singleRecData, fixture.componentInstance.singleRecData2);
            fixture.detectChanges();
            const $grid = $('#grid1');
            expect($grid.data('igTreeGrid').allRows().length === 1).toBeTruthy('There should be one record in treegrid.');
            fixture.componentInstance.singleRecData = [];
            fixture.detectChanges();
            expect($grid.data('igTreeGrid').allRows().length === 0).toBeTruthy('There should be no records in the treegrid.');
            done();
        });
    });
});

@Component({
    selector: 'test-cmp',
    template: '<div></div>' // "Component 'TestComponent' must have either 'template' or 'templateUrl' set."
    ,
    standalone: false
})
class TestComponent {
    private opts: any;
    private opts2: any;
    private optsNew: any;
    private gridID: string;
    public data: Array<any>;
    private cdi = 10;
    public singleRecData: Array<any>;
    public singleRecData2: Array<any>;

    @ViewChild(Infragistics.IgTreeGridComponent, { static: true }) public viewChild: Infragistics.IgTreeGridComponent;

    constructor() {
        this.gridID = 'grid1';
        // this.cdi = 0;
        this.data = Tasks.getData();

        this.singleRecData = [{ id: 1, tasks: 'John Smith' }];
        this.singleRecData2 = [{ id: 1, tasks: 'Test' }];
        this.opts = {
            autoCommit: true,
            // dataSource: this.data,
            width: '100%',
            height: '400px',
            autoGenerateColumns: false,
            autoGenerateColumnLayouts: false,
            primaryKey: 'id',
            childDataKey: 'products',
            renderExpansionIndicatorColumn: true,
            columns: [
                { key: 'id', headerText: 'ID', width: '100px', dataType: 'number' },
                { key: 'tasks', headerText: 'Task', width: '250px', dataType: 'string' },
                { key: 'start', headerText: 'Start', width: '100px', dataType: 'date' },
                { key: 'finish', headerText: 'Finish', width: '100px', dataType: 'date' },
                { key: 'duration', headerText: 'Duration', width: '100px', dataType: 'date' },
                { key: 'progress', headerText: 'Progress', width: '100px', dataType: 'date' }
            ],
            features: [{
                name: 'Updating'
            }]
        };
        this.optsNew = {
            autoCommit: true,
            dataSource: this.singleRecData,
            width: '100%',
            height: '400px',
            autoGenerateColumns: false,
            autoGenerateColumnLayouts: false,
            primaryKey: 'id',
            childDataKey: 'products',
            renderExpansionIndicatorColumn: true,
            columns: [
                { key: 'id', headerText: 'ID', width: '100px', dataType: 'number' },
                { key: 'tasks', headerText: 'Task', width: '250px', dataType: 'string' },
                { key: 'start', headerText: 'Start', width: '100px', dataType: 'date' },
                { key: 'finish', headerText: 'Finish', width: '100px', dataType: 'date' },
                { key: 'duration', headerText: 'Duration', width: '100px', dataType: 'date' },
                { key: 'progress', headerText: 'Progress', width: '100px', dataType: 'date' }
            ],
            features: [{
                name: 'Updating'
            }]
        };

        this.opts2 = {
            dataSource: 'myURL/Categories'
        };
    }
}
