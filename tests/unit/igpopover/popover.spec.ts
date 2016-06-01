// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { it, iit, describe, expect, inject, beforeEachProviders } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/compiler/testing';
import {Component, ViewChild, TemplateRef} from '@angular/core';
import * as Infragistics from '../../../src/igniteui.angular2';

export function main() {
    describe('Infragistics Angular2 Popover', () => {
        it('should initialize correctly', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            var template = '<div><ig-popover [widgetId]="\'popover\'" [(options)]="opts"></ig-popover></div>';
            return tcb.overrideTemplate(TestComponent, template)
                .createAsync(TestComponent)
                .then((fixture) => {
                    fixture.detectChanges();
                    expect(fixture.debugElement.componentInstance.viewChild).toBeAnInstanceOf(Infragistics.IgPopoverComponent);
                });
        }));

        it('should initialize correctly when having a target element', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            var template = '<div><ig-popover [widgetId]="\'popover\'" [(options)]="opts"></ig-popover><input id="popover"/></div>';
            return tcb.overrideTemplate(TestComponent, template)
                .createAsync(TestComponent)
                .then((fixture) => {
                    fixture.detectChanges();
                    expect(fixture.debugElement.componentInstance.viewChild).toBeAnInstanceOf(Infragistics.IgPopoverComponent);
                });
        }));

    });
}

@Component({
    selector: 'test-cmp',
    template: '<div></div>', //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
    directives: [Infragistics.IgPopoverComponent]
})
class TestComponent {
    private opts: any;

    @ViewChild(Infragistics.IgPopoverComponent) public viewChild: Infragistics.IgPopoverComponent;

    constructor() {
        this.opts = {
            contentTemplate: "<div>Test Content</div>"
        };
    }
}