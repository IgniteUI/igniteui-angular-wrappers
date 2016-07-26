// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { inject, TestComponentBuilder } from '@angular/core/testing';
import { Component, ViewChild, TemplateRef } from '@angular/core';
import * as Infragistics from '../../../src/igniteui.angular2';

export function main() {
    describe('Infragistics Angular2 LayoutManager', () => {
        it('should initialize correctly', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            var template = '<div><ig-layout-manager widgetId="layoutManager1" [(options)]="opts"></ig-layout-manager></div>';
            return tcb.overrideTemplate(TestComponent, template)
                .createAsync(TestComponent)
                .then((fixture) => {
                    fixture.detectChanges();
                    expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgLayoutManagerComponent)
                        .toBe(true);
                });
        }));

    });
}

@Component({
    selector: 'test-cmp',
    template: '<div></div>', //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
    directives: [Infragistics.IgLayoutManagerComponent]
})
class TestComponent {
    private opts: any;
    private cdi = 10;

    @ViewChild(Infragistics.IgLayoutManagerComponent) public viewChild: Infragistics.IgLayoutManagerComponent;

    constructor() {
        this.opts = {
        };
    }
}