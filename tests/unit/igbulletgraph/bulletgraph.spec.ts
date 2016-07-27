
// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { inject, beforeEachProviders, TestComponentBuilder } from '@angular/core/testing';
import { Component, ViewChild, TemplateRef } from '@angular/core';
import * as Infragistics from '../../../src/igniteui.angular2';

export function main() {
    describe('Infragistics Angular2 BulletGraph', () => {
		it('should initialize correctly',
           inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
           var template = '<div><ig-bullet-graph widgetId="bulletGraph" [(options)]="opts"></ig-bullet-graph></div>';
           return tcb.overrideTemplate(TestComponent, template)
               .createAsync(TestComponent)
               .then((fixture) => {
					fixture.detectChanges();
					expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgBulletGraphComponent)
                        .toBe(true);
               });
         }));
    });
}

@Component({
    selector: 'test-cmp',
    template: '<div></div>', //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
    directives: [Infragistics.IgBulletGraphComponent]
})
class TestComponent {
	private opts: any;
    
	@ViewChild(Infragistics.IgBulletGraphComponent) public viewChild: Infragistics.IgBulletGraphComponent;
	
	constructor() {
	    this.opts = {
                height: "80px",
                width: "100%",
                minimumValue: 0,  
                maximumValue: 30,  
                value: 26,
                targetValue: 22,
                ranges: [
                    {
                        name: 'bad',
                        startValue: 0,
                        endValue: 14
                    },
                    {
                        name: 'acceptable',
                        startValue: 14,
                        endValue: 25
                    },
                    {
                        name: 'good',
                        startValue: 25,
                        endValue: 30
                    }]
            }
	}
}