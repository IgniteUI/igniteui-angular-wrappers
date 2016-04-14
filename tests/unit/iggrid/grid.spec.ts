// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { it, iit, describe, expect, inject, injectAsync, beforeEachProviders, fakeAsync, tick, TestComponentBuilder } from 'angular2/testing';
import {Component, ViewChild, TemplateRef} from 'angular2/core';
import * as Infragistics from '../../../src/igniteui.angular2';

export function main() {
    describe('Infragistics Angular2 Grid', function() {
		it('should initialize correctly',
         inject([TestComponentBuilder], (tcb: TestComponentBuilder, async) => {
           var template = '<div><ig-grid [(widgetId)]="gridID" [(options)]="opts"></ig-grid></div>';
           tcb.overrideTemplate(TestComponent, template)
               .createAsync(TestComponent)
               .then((fixture) => {
                fixture.detectChanges();
				expect(fixture.debugElement.componentInstance.viewChild).toBeAnInstanceOf(Infragistics.IgGridComponent);
                async.done();
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
	@ViewChild(Infragistics.IgGridComponent) public viewChild: Infragistics.IgGridComponent;
	
	constructor() {
		this.gridID = "grid1";
		this.opts = {
			dataSource: [
				{ "Name": "John Smith", "Age": 45 },
				{ "Name": "Mary Johnson", "Age": 32 },
				{ "Name": "Bob Ferguson", "Age": 27 }
			]
		};
	}
}