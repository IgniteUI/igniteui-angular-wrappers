// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { inject, addProviders, TestComponentBuilder } from '@angular/core/testing';
import { Component, ViewChild, TemplateRef } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import * as Infragistics from '../../../src/igniteui.angular2';
import { Northwind } from "../../../samples/data/northwind";

export function main() {
    describe('Infragistics Angular2 Combo', () => {

        it('should initialize correctly', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            var template = '<div><ig-combo [(widgetId)]="comboID" [(options)]="options" [changeDetectionInterval]="cdi" [(ngModel)]="combo.value1"></ig-combo></div>';
            return tcb.overrideTemplate(TestComponent, template)
                .createAsync(TestComponent)
                .then((fixture) => {
                    fixture.detectChanges();
                    expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgComboComponent)
                        .toBe(true);
                });
        }));

        it('should be updated correctly if the ngModel value is updated', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            var template = '<div><ig-combo [(widgetId)]="comboID" [(options)]="options" [changeDetectionInterval]="cdi" [(ngModel)]="combo.value1"></ig-combo></div>';
            return tcb.overrideTemplate(TestComponent, template)
                .createAsync(TestComponent)
                .then((fixture) => {
                    fixture.detectChanges();
                    fixture.componentInstance.combo.value1 = 1;
                    setTimeout(function () {
                        fixture.detectChanges();
                        expect($("#combo1").igCombo("value")).toBe(1);
                        expect($("#combo1").igCombo("text")).toBe("Chai");
                    }, 10);
                });
        }));

        it('the ngModel should be updated correctly if the combo selection is updated', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            var template = '<div><ig-combo [(widgetId)]="comboID" [(options)]="options" [changeDetectionInterval]="cdi" [(ngModel)]="combo.value1"></ig-combo></div>';
            return tcb.overrideTemplate(TestComponent, template)
                .createAsync(TestComponent)
                .then((fixture) => {
                    fixture.detectChanges();
                    var elem = $("#combo1").igCombo("itemsFromIndex", 0)["element"];

                    $("#combo1").igCombo("select", elem, {}, true);
                    setTimeout(function () {
                        fixture.detectChanges();
                        expect(fixture.componentInstance.combo.value1).toBe(1);
                    }, 10);
                });
        }));

        it('should reflect changes when a record in the data changes', (done) => {

            inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
                var template = '<div><ig-combo [(widgetId)]="comboID" [(options)]="options" [changeDetectionInterval]="cdi" [(ngModel)]="combo.value1"></ig-combo></div>';
                    return tcb.overrideTemplate(TestComponent, template)
                    .createAsync(TestComponent)
                    .then((fixture) => {
                        fixture.detectChanges();
                        fixture.componentInstance.northwind[19].ProductName = "Test";

                        setTimeout(function () {
                            fixture.detectChanges();

                            var elem = $("#combo1").igCombo("itemsFromIndex", 19)["element"];
                            expect(elem.text()).toBe("Test");
                            expect($("#combo1").igCombo("text")).toBe("Test");
                            done();
                        }, 10);
                    });
            })(); /* manually invoke the injected functions */
        });
    });
}

@Component({
    selector: 'test-cmp',
    template: '<div></div>', //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
    directives: [FORM_DIRECTIVES, Infragistics.IgComboComponent]
})
class TestComponent {
    private options: IgCombo;
    public northwind: any;
    public combo: any;
    private comboID: string
    private cdi = 10;
    @ViewChild(Infragistics.IgComboComponent) public viewChild: Infragistics.IgComboComponent;

    constructor() {
        this.northwind = Northwind.getData();
        this.comboID = "combo1";
        this.options = {
            valueKey: "ProductID",
            textKey: "ProductName",
            dataSource: this.northwind,
            width: "100%"
        };
        this.combo = {
            value1: 20
        }
    }
}