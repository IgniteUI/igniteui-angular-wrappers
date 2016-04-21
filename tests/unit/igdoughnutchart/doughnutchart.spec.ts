// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { it, iit, describe, expect, inject, injectAsync, beforeEachProviders, fakeAsync, tick, TestComponentBuilder, AsyncTestCompleter } from 'angular2/testing_internal';
import {Component, ViewChild, TemplateRef} from 'angular2/core';
import * as Infragistics from '../../../src/igniteui.angular2';

export function main() {
    describe('Infragistics Angular2 DoughnutChart', () => {
		it('should initialize correctly', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
           var template = '<div><ig-doughnut-chart  widgetId="chart1" [(options)]="opts" ></ig-doughnut-chart></div>';
           tcb.overrideTemplate(TestComponent, template)
               .createAsync(TestComponent)
               .then((fixture) => {
					fixture.detectChanges();
					expect(fixture.debugElement.componentInstance.viewChild).toBeAnInstanceOf(Infragistics.IgDoughnutChartComponent);
					async.done();
               });
         }));         
    });
}

@Component({
    selector: 'test-cmp',
    template: '<div></div>', //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
    directives: [Infragistics.IgDoughnutChartComponent]
})
class TestComponent {
	private opts: any;
    private data:any;
    
	@ViewChild(Infragistics.IgDoughnutChartComponent) public viewChild: Infragistics.IgDoughnutChartComponent;
	
	constructor() {
		this.data = [
                { "CountryName": "China", "Pop1990": 1141, "Pop2008": 1333, "Pop2025": 1458 },
                { "CountryName": "India", "Pop1990": 849, "Pop2008": 1140, "Pop2025": 1398 },
                { "CountryName": "United States", "Pop1990": 250, "Pop2008": 304, "Pop2025": 352 },
                { "CountryName": "Indonesia", "Pop1990": 178, "Pop2008": 228, "Pop2025": 273 },
                { "CountryName": "Brazil", "Pop1990": 150, "Pop2008": 192, "Pop2025": 223 }
            ];
		this.opts = {
             width: "500px",
                height: "500px",
                series:
                    [{
                            name: "Pop1990",
                            labelMemberPath: "CountryName",
                            valueMemberPath: "Pop1990",
                            dataSource: this.data
                    }]   
            };
	}
}