// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { it, iit, describe, expect, inject, injectAsync, beforeEachProviders, fakeAsync, tick, TestComponentBuilder, AsyncTestCompleter } from 'angular2/testing_internal';
import {Component, ViewChild, TemplateRef} from 'angular2/core';
import * as Infragistics from '../../../src/igniteui.angular2';
import {Northwind} from "../../../samples/data/northwind";

export function main() {
    describe('Infragistics Angular2 Combo', () => {
		it('should initialize correctly', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
           var template = '<div><ig-combo [(widgetId)]="comboID" [(options)]="options" [changeDetectionInterval]="cdi" [(ngModel)]="combo.value1"></ig-combo></div>';
           tcb.overrideTemplate(TestComponent, template)
               .createAsync(TestComponent)
               .then((fixture) => {
					fixture.detectChanges();
					expect(fixture.debugElement.componentInstance.viewChild).toBeAnInstanceOf(Infragistics.IgComboComponent);
					async.done();
               });
         }));
         
         it('should be updated correctly if the ngModel value is updated', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
           var template = '<div><ig-combo [(widgetId)]="comboID" [(options)]="options" [changeDetectionInterval]="cdi" [(ngModel)]="combo.value1"></ig-combo></div>';
           tcb.overrideTemplate(TestComponent, template)
               .createAsync(TestComponent)
               .then((fixture) => {
					fixture.detectChanges();
				    fixture.componentInstance.combo.value1= 1;
                    setTimeout(function(){
                        fixture.detectChanges();
                        expect( $("#combo1").igCombo("value")).toBe(1);
                        expect($("#combo1").igCombo("text")).toBe("Chai");
					    async.done();
                    },10);
               });
         }));
         
         it('the ngModel should be updated correctly if the combo selection is updated', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
           var template = '<div><ig-combo [(widgetId)]="comboID" [(options)]="options" [changeDetectionInterval]="cdi" [(ngModel)]="combo.value1"></ig-combo></div>';
           tcb.overrideTemplate(TestComponent, template)
               .createAsync(TestComponent)
               .then((fixture) => {
					fixture.detectChanges();
                    var elem = $("#combo1").igCombo("itemsFromIndex", 0)["element"];

				   $("#combo1").igCombo("select", elem, {}, true);
                    setTimeout(function(){
                        fixture.detectChanges();
                        expect(fixture.componentInstance.combo.value1).toBe(1);
					    async.done();
                    },10);
               });
         }));
         
          it('should reflect changes when a record in the data changes', injectAsync([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
           var template = '<div><ig-combo [(widgetId)]="comboID" [(options)]="options" [changeDetectionInterval]="cdi" [(ngModel)]="combo.value1"></ig-combo></div>';
           tcb.overrideTemplate(TestComponent, template)
               .createAsync(TestComponent)
               .then((fixture) => {
					fixture.detectChanges();
                     fixture.componentInstance.northwind[19].ProductName = "Test";
                    setTimeout(function(){
                        fixture.detectChanges();
                        var elem = $("#combo1").igCombo("itemsFromIndex", 19)["element"];
                        expect(elem.text()).toBe("Test");
                         expect($("#combo1").igCombo("text")).toBe("Test");
					    async.done();
                    },10);
               });
         }));
         
    });
}

@Component({
    selector: 'test-cmp',
    template: '<div></div>', //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
    directives: [Infragistics.IgComboComponent]
})
class TestComponent {
	private options: IgCombo;
	private northwind: any;
	private combo: any;
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