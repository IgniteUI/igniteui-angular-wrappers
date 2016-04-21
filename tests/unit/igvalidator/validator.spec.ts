// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { it, iit, describe, expect, inject, injectAsync, beforeEachProviders, fakeAsync, tick, TestComponentBuilder, AsyncTestCompleter } from 'angular2/testing_internal';
import {Component, ViewChild, TemplateRef} from 'angular2/core';
import * as Infragistics from '../../../src/igniteui.angular2';

export function main() {
    describe('Infragistics Angular2 RadialMenu', () => {
		it('should initialize correctly', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
           var template = '<div><ig-validator widgetId="validator" [(options)]="opts"></ig-validator><input id="validator"/></div>';
           tcb.overrideTemplate(TestComponent, template)
               .createAsync(TestComponent)
               .then((fixture) => {
					fixture.detectChanges();
					expect(fixture.debugElement.componentInstance.viewChild).toBeAnInstanceOf(Infragistics.IgValidatorComponent);
					async.done();
               });
         }));
         
    });
}

@Component({
    selector: 'test-cmp',
    template: '<div></div>', //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
    directives: [Infragistics.IgValidatorComponent]
})
class TestComponent {
	private opts: any;
    
	@ViewChild(Infragistics.IgValidatorComponent) public viewChild: Infragistics.IgValidatorComponent;
	
	constructor() {
	    this.opts={required:true};
	}
}