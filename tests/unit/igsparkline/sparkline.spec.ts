
// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { it, iit, describe, expect, inject, beforeEachProviders } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/compiler/testing';
import {Component, ViewChild, TemplateRef} from '@angular/core';
import * as Infragistics from '../../../src/igniteui.angular2';

export function main() {
    describe('Infragistics Angular2 Sparkline', () => {
        it('should initialize correctly', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            var template = '<div><ig-sparkline widgetId="sparkLine" [(options)]="opts"></ig-sparkline></div>';
            return tcb.overrideTemplate(TestComponent, template)
                .createAsync(TestComponent)
                .then((fixture) => {
                    fixture.detectChanges();
                    expect(fixture.debugElement.componentInstance.viewChild).toBeAnInstanceOf(Infragistics.IgSparklineComponent);
                });
        }));

    });
}

@Component({
    selector: 'test-cmp',
    template: '<div></div>', //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
    directives: [Infragistics.IgSparklineComponent]
})
class TestComponent {
    private opts: any;

    @ViewChild(Infragistics.IgSparklineComponent) public viewChild: Infragistics.IgSparklineComponent;

    constructor() {
        this.opts = {
            dataSource: [
                { "OrderDate": "\/Date(836452800000)\/", "ExtendedPrice": 168.0000, "Freight": 32.3800 },
                { "OrderDate": "\/Date(836452800000)\/", "ExtendedPrice": 98.0000, "Freight": 32.3800 },
                { "OrderDate": "\/Date(836452800000)\/", "ExtendedPrice": 174.0000, "Freight": 32.3800 }],
            height: "100px",
            width: "300px",
            valueMemberPath: 'ExtendedPrice',
            labelMemberPath: 'OrderDate'
        };
    }
}