// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import * as Infragistics from '../../../src/main';

export function main() {
    describe('Infragistics Angular2 PieChart', () => {

        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [Infragistics.IgPieChartComponent, TestComponent]
            });
        });

        it('should initialize correctly', (done) => {
            var template = '<div><ig-pie-chart  [widgetId]="\'piechart1\'" [(options)]="opts" ></ig-pie-chart></div>';
            TestBed.overrideComponent(TestComponent, {
                set: {
                    template: template
                }
            });
            TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgPieChartComponent)
                    .toBe(true);
                done();
            });
        });

        it('should allow initializing data source as a top level option', (done) => {
            var template = '<div><ig-pie-chart  [widgetId]="\'chart1\'" [(dataSource)]="data"></ig-pie-chart></div>';
            TestBed.overrideComponent(TestComponent, {
                set: {
                    template: template
                }
            });
            TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                expect($(fixture.debugElement.nativeElement).find("#chart1").igPieChart("option", "dataSource")[0].Budget)
                    .toBe(60);
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
    private data: any;

    @ViewChild(Infragistics.IgPieChartComponent, {static: true}) public viewChild: Infragistics.IgPieChartComponent;

    constructor() {
        this.data = [
            { "Budget": 60, "Label": "Administration" },
            { "Budget": 40, "Label": "Sales" },
            { "Budget": 60, "Label": "IT" },
            { "Budget": 40, "Label": "Marketing" },
            { "Budget": 60, "Label": "Development" },
            { "Budget": 20, "Label": "Support" }
        ];
        this.opts = {
            dataSource: this.data,
            width: "500px",
            height: "500px",
            valueMemberPath: "Budget",
            labelMemberPath: "Label"
        };
    }
}