// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { inject, TestComponentBuilder } from '@angular/core/testing';
import { Component, ViewChild, TemplateRef } from '@angular/core';
import * as Infragistics from '../../../src/igniteui.angular2';

export function main() {
    describe('Infragistics Angular2 FunnelChart', () => {
        it('should initialize correctly', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        var template = '<div><ig-funnel-chart  widgetId="chart1" [(options)]="opts" ></ig-funnel-chart></div>';
        return tcb.overrideTemplate(TestComponent, template)
            .createAsync(TestComponent)
            .then((fixture) => {
                    fixture.detectChanges();
                    expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgFunnelChartComponent)
                        .toBe(true);
            });
        }));
    });
}

@Component({
    selector: 'test-cmp',
    template: '<div></div>', //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
    directives: [Infragistics.IgFunnelChartComponent]
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