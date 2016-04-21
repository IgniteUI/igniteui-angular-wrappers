// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { it, iit, describe, expect, inject, injectAsync, beforeEachProviders, fakeAsync, tick, TestComponentBuilder, AsyncTestCompleter } from 'angular2/testing_internal';
import {Component, ViewChild, TemplateRef} from 'angular2/core';
import * as Infragistics from '../../../src/igniteui.angular2';

export function main() {
    describe('Infragistics Angular2 PieChart', () => {
		it('should initialize correctly', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
           var template = '<div><ig-pie-chart  widgetId="chart1" [(options)]="opts" ></ig-pie-chart></div>';
           tcb.overrideTemplate(TestComponent, template)
               .createAsync(TestComponent)
               .then((fixture) => {
					fixture.detectChanges();
					expect(fixture.debugElement.componentInstance.viewChild).toBeAnInstanceOf(Infragistics.IgPieChartComponent);
					async.done();
               });
         }));         
    });
}

@Component({
    selector: 'test-cmp',
    template: '<div></div>', //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
    directives: [Infragistics.IgPieChartComponent]
})
class TestComponent {
	private opts: any;
    private data:any;
    
	@ViewChild(Infragistics.IgPieChartComponent) public viewChild: Infragistics.IgPieChartComponent;
	
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