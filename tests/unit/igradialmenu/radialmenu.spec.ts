// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { it, iit, describe, expect, inject, injectAsync, beforeEachProviders, fakeAsync, tick, TestComponentBuilder, AsyncTestCompleter } from 'angular2/testing_internal';
import {Component, ViewChild, TemplateRef} from 'angular2/core';
import * as Infragistics from '../../../src/igniteui.angular2';

export function main() {
    describe('Infragistics Angular2 RadialMenu', () => {
		it('should initialize correctly', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
           var template = '<div><ig-radial-menu widgetId="rmenu" [(options)]="opts"></ig-radial-menu></div>';
           tcb.overrideTemplate(TestComponent, template)
               .createAsync(TestComponent)
               .then((fixture) => {
					fixture.detectChanges();
					expect(fixture.debugElement.componentInstance.viewChild).toBeAnInstanceOf(Infragistics.IgRadialMenuComponent);
					async.done();
               });
         }));
         
    });
}

@Component({
    selector: 'test-cmp',
    template: '<div></div>', //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
    directives: [Infragistics.IgRadialMenuComponent]
})
class TestComponent {
	private opts: any;
    
	@ViewChild(Infragistics.IgRadialMenuComponent) public viewChild: Infragistics.IgRadialMenuComponent;
	
	constructor() {
	    this.opts={
            width: "300px",
            height: "300px",
            items:
            [
                {
                    name: "button1",
                    header: "Bold"                  
                },
 
                {
                    name: "button2",
                    header: "Italic"                  
                },
 
                {
                    type: "coloritem",
                    header: "Color",
                    items:
                    [
                        {
                            type: "colorwell",
                            color: "#FFFF00"
                        },
                        {
                            type: "colorwell",
                            color: "#C00000"
                        },
                        {
                            type: "colorwell",
                            color: "#008000"
                        },
                        {
                            type: "colorwell",
                            color: "#002060"
                        },
                        {
                            type: "colorwell",
                            color: "#000000"
                        }
                    ]
                },
                {
                    type: "numericgauge",
                    wedgeSpan: "5",
                    ticks: "8,9,10,11,12,13,14,16,18,20,22,24,26,28,36,48",
                    value: "16"
                }
            ]
        };
	}
}