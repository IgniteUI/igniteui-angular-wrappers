// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { it, iit, describe, expect, inject, injectAsync, beforeEachProviders, fakeAsync, tick, TestComponentBuilder, AsyncTestCompleter } from 'angular2/testing_internal';
import {Component, ViewChild, TemplateRef} from 'angular2/core';
import * as Infragistics from '../../../src/igniteui.angular2';
import {candidates} from "../../../samples/data/candidates";

export function main() {
    describe('Infragistics Angular2 TileManager', () => {
		it('should initialize correctly', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
           var template = '<div><ig-tile-manager widgetId="dashboard" [(options)]="opts" [changeDetectionInterval]="cdi" ></ig-tile-manager></div>';
           tcb.overrideTemplate(TestComponent, template)
               .createAsync(TestComponent)
               .then((fixture) => {
					fixture.detectChanges();
					expect(fixture.debugElement.componentInstance.viewChild).toBeAnInstanceOf(Infragistics.IgTileManagerComponent);  
					async.done();
               });
         }));
         
    });
}

@Component({
    selector: 'test-cmp',
    template: '<div></div>', //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
    directives: [Infragistics.IgTileManagerComponent]
})
class TestComponent {
	private opts: any;
    private cdi = 10;
    
	@ViewChild(Infragistics.IgTileManagerComponent) public viewChild: Infragistics.IgTileManagerComponent;
	
	constructor() {
		this.opts = {
            //dataSource: candidates.getData(),
            marginLeft: 10,
            marginTop: 10,
            rightPanelTilesWidth: 200,
            rightPanelTilesHeight: 156,           
            maximizedState: '<h3>${name}</h3><img src="${picture}" title="${name}" alt="error" /><p class="text">${text}</p><div style="clear: both"><span class="color">Skills:</span></div><ul class="skills"></ul><div class="linkedIn"><span class="color">LinkedIn:</span> <a href="${linkedin}" target="_blank">http://www.linkedin.com/profile</a></div>',
            minimizedState:'<h4>${name}</h4><img src="${picture}" class="minimized" title="${name}" alt="error" />'
        };
	}
}