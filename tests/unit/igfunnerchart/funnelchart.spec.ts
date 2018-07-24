// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import * as Infragistics from '../../../src/main';

export function main() {
    describe('Infragistics Angular2 FunnelChart', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [Infragistics.IgFunnelChartComponent, TestComponent]
            });
        });

        it('should initialize correctly', (done) => {
            var template = '<div><ig-funnel-chart  widgetId="chart1" [(options)]="opts" ></ig-funnel-chart></div>';
            TestBed.overrideComponent(TestComponent, {
                    set: {
                        template: template
                    }
                });
            TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgFunnelChartComponent)
                    .toBe(true);
                done();
            });
        });

        it('should allow initializing data source as a top level option', (done) => {
            var template = '<div><ig-funnel-chart  [widgetId]="\'chart1\'" [(dataSource)]="data"></ig-funnel-chart></div>';
            TestBed.overrideComponent(TestComponent, {
                set: {
                    template: template
                }
            });
            TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                expect($(fixture.debugElement.nativeElement).find("#chart1").igFunnelChart("option", "dataSource")[0].Budget)
                    .toBe(30);
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
    private data:any;
    
    @ViewChild(Infragistics.IgFunnelChartComponent) public viewChild: Infragistics.IgFunnelChartComponent;
    
    constructor() {
        this.data = [
            { Budget: 30, Department: "Administration" },
            { Budget: 50, Department: "Sales" },
            { Budget: 60, Department: "IT" },
            { Budget: 50, Department: "Marketing" },
            { Budget: 100, Department: "Development" },
            { Budget: 20, Department: "Support" }
        ]; 
        this.opts = {
                width: "100%",
                height: "450px",
                dataSource: this.data,
                valueMemberPath: "Budget",
                innerLabelMemberPath: "Budget",
                innerLabelVisibility: "visible",
                outerLabelMemberPath: "Department",
                outerLabelVisibility: "visible"
            };
    }
}