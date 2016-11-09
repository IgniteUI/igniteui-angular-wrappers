// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as Infragistics from '../../../src/igniteui.angular2';
import { Northwind } from "../../../samples/data/northwind";

export function main() {
    describe('Infragistics Angular2 Combo', () => {

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [FormsModule],
                declarations: [Infragistics.IgComboComponent, TestComponent]
            });
        });

        it('should initialize correctly', (done) => {
            var template = '<div><ig-combo [(widgetId)]="comboID" [(options)]="options" [changeDetectionInterval]="cdi" [(ngModel)]="combo.value1"></ig-combo></div>';
            TestBed.overrideComponent(TestComponent, {
                set: {
                    template: template
                }
            });
            TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgComboComponent)
                    .toBe(true);
                done();
            });
        });

        it('should be updated correctly if the ngModel value is updated', (done) => {
            var template = '<div><ig-combo [(widgetId)]="comboID" [(options)]="options" [changeDetectionInterval]="cdi" [(ngModel)]="combo.value1"></ig-combo></div>';
            TestBed.overrideComponent(TestComponent, {
                set: {
                    template: template
                }
            });
            TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                fixture.componentInstance.combo.value1 = 1;
                fixture.detectChanges();
                setTimeout(function () {
                    expect($("#combo1").igCombo("value")).toBe(1);
                    expect($("#combo1").igCombo("text")).toBe("Chai");
                    done();
                }, 10);
            });
        });

        it('the ngModel should be updated correctly if the combo selection is updated', (done) => {
            var template = '<div><ig-combo [(widgetId)]="comboID" [(options)]="options" [changeDetectionInterval]="cdi" [(ngModel)]="combo.value1"></ig-combo></div>';
            TestBed.overrideComponent(TestComponent, {
                set: {
                    template: template
                }
            });
            TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                var elem = $("#combo1").igCombo("itemsFromIndex", 0)["element"];

                $("#combo1").igCombo("select", elem, {}, true);
                fixture.detectChanges();
                setTimeout(function () {
                    expect(fixture.componentInstance.combo.value1).toBe(1);
                    done();
                }, 10);
            });
        });

        it('should reflect changes when a record in the data changes', (done) => {
            var template = '<div><ig-combo [(widgetId)]="comboID" [(options)]="options" [changeDetectionInterval]="cdi" [(ngModel)]="combo.value1"></ig-combo></div>';
            TestBed.overrideComponent(TestComponent, {
                set: {
                    template: template
                }
            });
            TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(TestComponent);
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
        });

        it('should apply the model if there is a new data assigned', (done) => {
            var template = '<div><ig-combo [(widgetId)]="comboID" [valueKey]="\'ProductID\'" [textKey]="\'ProductName\'" [changeDetectionInterval]="cdi" [(dataSource)]="data" [(ngModel)]="combo.value1"></ig-combo></div>';
            TestBed.overrideComponent(TestComponent, {
                set: {
                    template: template
                }
            });
            TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                fixture.componentInstance.data = fixture.componentInstance.northwind;

                setTimeout(function () {
                    fixture.detectChanges();

                    expect($("#combo1").igCombo("value")).toBe(fixture.componentInstance.combo.value1);
                    expect($("#combo1").val())
                    .toBe(fixture.componentInstance.northwind[fixture.componentInstance.combo.value1 - 1].ProductName);
                    done();
                }, 10);
            });
        });
    });
}

@Component({
    selector: 'test-cmp',
    template: '<div></div>' //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
})
class TestComponent {
    private options: IgCombo;
    public northwind: any;
    public combo: any;
    private comboID: string
    private cdi = 10;
    public data: Array<any> = [];
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