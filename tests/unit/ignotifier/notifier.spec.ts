// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { inject, TestComponentBuilder } from '@angular/core/testing';
import { Component, ViewChild, TemplateRef } from '@angular/core';
import * as Infragistics from '../../../src/igniteui.angular2';

export function main() {
    describe('Infragistics Angular2 Notifier', () => {
        it('should initialize correctly', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            var template = '<div><ig-notifier widgetId="notifier" [(options)]="opts"></ig-notifier></div>';
            return tcb.overrideTemplate(TestComponent, template)
                .createAsync(TestComponent)
                .then((fixture) => {
                    fixture.detectChanges();
                    expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgNotifierComponent)
                        .toBe(true);
                });
        }));

        it('should initialize correctly when having a target element', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            var template = '<div><ig-notifier widgetId="successEditor" [(options)]="opts"></ig-notifier> <input id="successEditor"/></div>';
            return tcb.overrideTemplate(TestComponent, template)
                .createAsync(TestComponent)
                .then((fixture) => {
                    fixture.detectChanges();
                    expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgNotifierComponent)
                        .toBe(true);
                });
        }));

    });
}

@Component({
    selector: 'test-cmp',
    template: '<div></div>', //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
    directives: [Infragistics.IgNotifierComponent]
})
class TestComponent {
    private opts: any;

    @ViewChild(Infragistics.IgNotifierComponent) public viewChild: Infragistics.IgNotifierComponent;

    constructor() {
        this.opts = {
            contentTemplate: "<div>Test Content</div>"
        };
    }
}