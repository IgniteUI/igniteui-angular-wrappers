// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { it, iit, describe, expect, inject, injectAsync, beforeEachProviders, fakeAsync, tick, TestComponentBuilder, AsyncTestCompleter } from 'angular2/testing_internal';
import {Component, ViewChild, TemplateRef} from 'angular2/core';
import * as Infragistics from '../../../src/igniteui.angular2';

export function main() {
    describe('Infragistics Angular2 Splitter', () => {
		it('should initialize correctly', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
           var template = '<div><ig-splitter widgetId="splitter" [(options)]="opts"></ig-splitter></div>';
           tcb.overrideTemplate(TestComponent, template)
               .createAsync(TestComponent)
               .then((fixture) => {
					fixture.detectChanges();
					expect(fixture.debugElement.componentInstance.viewChild).toBeAnInstanceOf(Infragistics.IgSplitterComponent);
					async.done();
               });
         }));
         
    });
}

@Component({
    selector: 'test-cmp',
    template: '<div></div>', //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
    directives: [Infragistics.IgSplitterComponent]
})
class TestComponent {
	private opts: any;
    
	@ViewChild(Infragistics.IgSplitterComponent) public viewChild: Infragistics.IgSplitterComponent;
	
	constructor() {
	    this.opts= { height: "300px", panels: [{ size: 160, min: 100, max: 250 }] };
	}
}