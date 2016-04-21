
// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { it, iit, describe, expect, inject, injectAsync, beforeEachProviders, fakeAsync, tick, TestComponentBuilder, AsyncTestCompleter } from 'angular2/testing_internal';
import {Component, ViewChild, TemplateRef} from 'angular2/core';
import * as Infragistics from '../../../src/igniteui.angular2';

export function main() {
    describe('Infragistics Angular2 Linear Gauge', () => {
		it('should initialize correctly', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
           var template = '<div><ig-linear-gauge widgetId="lGauge" [(options)]="opts"></ig-linear-gauge></div>';
           tcb.overrideTemplate(TestComponent, template)
               .createAsync(TestComponent)
               .then((fixture) => {
					fixture.detectChanges();
					expect(fixture.debugElement.componentInstance.viewChild).toBeAnInstanceOf(Infragistics.IgLinearGaugeComponent);
					async.done();
               });
         }));
         
    });
}

@Component({
    selector: 'test-cmp',
    template: '<div></div>', //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
    directives: [Infragistics.IgLinearGaugeComponent]
})
class TestComponent {
	private opts: any;
    
	@ViewChild(Infragistics.IgLinearGaugeComponent) public viewChild: Infragistics.IgLinearGaugeComponent;
	
	constructor() {
	    this.opts = {
               height: "80px",
                width: "100%",
                value: 27,
                maximumValue: 30,
                ranges: [{startValue:0, endValue:22, name:"target"}]
            };
	}
}