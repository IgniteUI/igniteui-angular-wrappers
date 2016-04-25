// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { it, iit, describe, expect, inject, injectAsync, beforeEachProviders, fakeAsync, tick, TestComponentBuilder, AsyncTestCompleter } from 'angular2/testing_internal';
import {Component, ViewChild, TemplateRef} from 'angular2/core';
import * as Infragistics from '../../../src/igniteui.angular2';

export function main() {
    describe('Infragistics Angular2 Dialog', () => {
        it('should initialize correctly', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
        var template = '<div><ig-dialog widgetId="dialog" [(options)]="opts"><div>Test Content</div></ig-dialog></div>';
        tcb.overrideTemplate(TestComponent, template)
            .createAsync(TestComponent)
            .then((fixture) => {
                    fixture.detectChanges();
                    expect(fixture.debugElement.componentInstance.viewChild).toBeAnInstanceOf(Infragistics.IgDialogComponent);
                    expect($(fixture.debugElement.nativeElement).find("#dialog").igDialog("content")[0].innerHTML)
                    .toBe("<div>Test Content</div>");
                    async.done();
            });
        }));
        
    });
}

@Component({
    selector: 'test-cmp',
    template: '<div></div>', //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
    directives: [Infragistics.IgDialogComponent]
})
class TestComponent {
    private opts: any;
    
    @ViewChild(Infragistics.IgDialogComponent) public viewChild: Infragistics.IgDialogComponent;
    
    constructor() {
        this.opts = {
            headerText : "Header Text",
            height: "500px"
        };
    }
}