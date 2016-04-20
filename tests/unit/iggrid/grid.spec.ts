// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { it, iit, describe, expect, inject, injectAsync, beforeEachProviders, fakeAsync, tick, TestComponentBuilder, AsyncTestCompleter } from 'angular2/testing_internal';
import {Component, ViewChild, TemplateRef} from 'angular2/core';
import * as Infragistics from '../../../src/igniteui.angular2';

export function main() {
    describe('Infragistics Angular2 Grid', () => {
		it('should initialize correctly', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
           var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-grid></div>';
           tcb.overrideTemplate(TestComponent, template)
               .createAsync(TestComponent)
               .then((fixture) => {
					fixture.detectChanges();
					expect(fixture.debugElement.componentInstance.viewChild).toBeAnInstanceOf(Infragistics.IgGridComponent);
					async.done();
               });
         }));
		 
		 it('should initialize correctly', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
           var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-grid></div>';
           tcb.overrideTemplate(TestComponent, template)
               .createAsync(TestComponent)
               .then((fixture) => {
					fixture.detectChanges();
					fixture.componentInstance.data[0].Name = "Mr. Smith";
					setTimeout(() => {
						fixture.detectChanges();
						expect($(fixture.debugElement.nativeElement).find("#grid1 tr:first td[aria-describedby='grid1_Name']").text())
						.toBe("Mr. Smith");
						async.done();
					}, 10);
               });
         }));
    });
}

@Component({
    selector: 'test-cmp',
    template: '<div></div>', //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
    directives: [Infragistics.IgGridComponent]
})
class TestComponent {
	private opts: any;
	private gridID: string;
	private data: Array<any>;
	private cdi: number;
	@ViewChild(Infragistics.IgGridComponent) public viewChild: Infragistics.IgGridComponent;
	
	constructor() {
		this.gridID = "grid1";
		this.cdi = 0;
		this.data = [
				{ "Id": 1, "Name": "John Smith", "Age": 45 },
				{ "Id": 2, "Name": "Mary Johnson", "Age": 32 },
				{ "Id": 3, "Name": "Bob Ferguson", "Age": 27 }
			]
		this.opts = {
			primaryKey: "Id",
			dataSource: this.data,
			features: [
				{ name: "Updating" }
			]
		};
	}
}