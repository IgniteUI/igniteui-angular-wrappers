// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { it, iit, describe, expect, inject, injectAsync, beforeEachProviders, fakeAsync, tick, TestComponentBuilder, AsyncTestCompleter } from 'angular2/testing_internal';
import {Component, ViewChild, TemplateRef} from 'angular2/core';
import * as Infragistics from '../../../src/igniteui.angular2';

export function main() {
    describe('Infragistics Angular2 DataChart and Zoombar', () => {
		it('should initialize correctly', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
           var template = '<div><ig-data-chart  widgetId="datachart1" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-data-chart></div>';
           tcb.overrideTemplate(TestComponent, template)
               .createAsync(TestComponent)
               .then((fixture) => {
					fixture.detectChanges();
					expect(fixture.debugElement.componentInstance.viewChild).toBeAnInstanceOf(Infragistics.IgDataChartComponent);
					async.done();
               });
         }));         
         
         it('Zoombar should initialize correctly', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
           var template = '<div><ig-data-chart  widgetId="datachart1" [(options)]="opts"></ig-data-chart><ig-zoombar [(options)]="zoombarOpts" widgetId="zoombar"></ig-zoombar></div>';
           tcb.overrideTemplate(TestComponent, template)
               .createAsync(TestComponent)
               .then((fixture) => {
					fixture.detectChanges();
					expect(fixture.debugElement.componentInstance.viewChild2).toBeAnInstanceOf(Infragistics.IgZoombarComponent);
					async.done();
               });
         }));         
    });
}

@Component({
    selector: 'test-cmp',
    template: '<div></div>', //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
    directives: [Infragistics.IgDataChartComponent,Infragistics.IgZoombarComponent]
})
class TestComponent {
	private opts: any;
    private zoombarOpts:any;
	private data: Array<any>;
	private cdi: number;
	@ViewChild(Infragistics.IgDataChartComponent) public viewChild: Infragistics.IgDataChartComponent;
	@ViewChild(Infragistics.IgZoombarComponent) public viewChild2: Infragistics.IgZoombarComponent;
    
	constructor() {
		this.cdi = 10;
		this.data = [{
            "CountryName": "China",
            "Pop1995": 1216,
            "Pop2005": 1297,
            "Pop2015": 1361,
            "Pop2025": 1394
        }];
		this.opts = {
			dataSource: this.data,
			axes: [{
				name: "NameAxis",
				type: "categoryX",
				title: "Country",
				label: "CountryName"
			},
				{
					name: "PopulationAxis",
					type: "numericY",
					minimumvalue: 0,
					title: "Milions of People"
				}],
			series: [{
				name: "2015Population",
				type: "column",
				isHighlightingEnabled: true,
				isTransitionInEnabled: true,
				xAxis: "NameAxis",
				yAxis: "PopulationAxis",
				valueMemberPath: "Pop2015"
			}]
		};
        this.zoombarOpts = {
			target: "#datachart1"
		};
	}
}