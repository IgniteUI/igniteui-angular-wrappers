// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as Infragistics from '../../../src/main';
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
            var template = '<div><ig-combo [(widgetId)]="comboID" [(options)]="options" [(ngModel)]="combo.value1"></ig-combo></div>';
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

        it('should initialize ig-combo without ngModel', (done) => {
            var template = '<div><ig-combo [(widgetId)]="comboID" [(options)]="options"></ig-combo></div>';
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

        it('should select correctly without ngModel', (done) => {
            const template = '<div><ig-combo [(widgetId)]="comboID" [(options)]="options" [dataSource]="northwind"></ig-combo></div>';
            TestBed.overrideComponent(TestComponent, {
                set: {
                    template: template
                }
            });
            TestBed.compileComponents().then(() => {
                const fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                const elem = $("#combo1").igCombo("itemsFromIndex", 0)["element"];
                const select = () => {
                    $("#combo1").igCombo("select", elem, {}, true);
                }

                // #244 fails with 'Cannot read property 'viewToModelUpdate' of undefined'
                expect(select).not.toThrow();
                expect(fixture.componentInstance.viewChild.value()).toEqual(1);
                done();
            });
        });


        it('should be updated correctly if the ngModel value is updated', (done) => {
            var template = '<div><ig-combo [(widgetId)]="comboID" [(options)]="options" [(ngModel)]="combo.value1" [dataSource]="northwind"></ig-combo></div>';
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

        it('should be updated correctly if the ngModel value is cleared.', (done) => {
            var template = '<div><ig-combo [(widgetId)]="comboID" [(options)]="options" [(ngModel)]="combo.value1" [dataSource]="northwind"></ig-combo></div>';
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
                    //clear
                    $("#combo1").parents("ig-combo").find(".ui-igcombo-clearicon").click();
                    fixture.detectChanges();
                    setTimeout(function () {
                        expect(fixture.componentInstance.combo.value1).toBeNull();
                        done();
                    }, 10);
                }, 10);
            });
        });

        it('should be updated correctly if the ngModel value is cleared when multiple selection.', (done) => {
            var template = '<div><ig-combo [(widgetId)]="comboID" [(options)]="optionsMultipleSelection" [(ngModel)]="combo.value1" [dataSource]="northwind"></ig-combo></div>';
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
                    //clear
                    $("#combo1").parents("ig-combo").find(".ui-igcombo-clearicon").click();
                    fixture.detectChanges();
                    setTimeout(function () {
                        expect(fixture.componentInstance.combo.value1 instanceof Array && fixture.componentInstance.combo.value1.length === 0).toBeTruthy();
                        done();
                    }, 10);
                }, 10);
            });
        });

        it('should apply ngModel when multiple selection and no valueKey set.', (done) => {
            var template = '<div><ig-combo [(widgetId)]="comboID" [options]="{multiSelection: {enabled: true, showCheckboxes: true}}" [(ngModel)]="val" [dataSource]="[\'foo\', \'bar\', \'bas\']"></ig-combo></div>';
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
                expect(fixture.componentInstance.val.length).toBe(1);
                expect(fixture.componentInstance.val[0]).toBe("foo");
                done();
            });
        });

        it('the ngModel should be updated correctly if the combo selection is updated', (done) => {
            var template = '<div><ig-combo [(widgetId)]="comboID" [(options)]="options" [(ngModel)]="combo.value1" [dataSource]="northwind"></ig-combo></div>';
            TestBed.overrideComponent(TestComponent, {
                set: {
                    template: template
                }
            });
            TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                setTimeout(function () {
                    var elem = $("#combo1").igCombo("itemsFromIndex", 0)["element"];
                    $("#combo1").igCombo("select", elem, {}, true);
                    fixture.detectChanges();
                    setTimeout(function () {
                        expect(fixture.componentInstance.combo.value1).toEqual(1);
                        done();
                    }, 10);
                }, 100);
            });
        });

        it('the ngModel should be updated correctly if the combo is allowing custom values', (done) => {
            var template = '<div><ig-combo [(widgetId)]="comboID" [(options)]="options" [(ngModel)]="combo.value1" [dataSource]="northwind" [allowCustomValue]="true"></ig-combo></div>';
            TestBed.overrideComponent(TestComponent, {
                set: {
                    template: template
                }
            });
            TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                setTimeout(function () {
                    //var elem = $("#combo1").igCombo("itemsFromIndex", 0)["element"];
                    //$("#combo1").igCombo("select", elem, {}, true);
                    $(fixture.debugElement.nativeElement).find("#combo1").val("foo").trigger("input");
                    fixture.detectChanges();
                    setTimeout(function () {
                        expect(fixture.componentInstance.combo.value1).toEqual("foo");
                        done();
                    }, 10);
                }, 100);
            });
        });

        it('the ngModel should be updated correctly if the combo selection is updated and multiple items are selected', (done) => {
            var template = '<div><ig-combo [(widgetId)]="comboID" [dataSource]="northwind" [(options)]="optionsMultipleSelection" [(ngModel)]="combo.value1"></ig-combo></div>';
            TestBed.overrideComponent(TestComponent, {
                set: {
                    template: template
                }
            });
            TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                var $firstThreeItems = $(".ui-igcombo-listitem:lt(3)");

                $("#combo1").igCombo("select", $firstThreeItems, {}, true);

                fixture.detectChanges();
                setTimeout(function () {
                    expect(fixture.componentInstance.combo.value1).toEqual([1, 2, 3]);
                    done();
                }, 10);
            });
        });

        it('should reflect changes when a record in the data changes', (done) => {
            var template = '<div><ig-combo [(widgetId)]="comboID" [dataSource]="northwind" [(options)]="options" [(ngModel)]="combo.value1"></ig-combo></div>';
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
            var template = '<div><ig-combo [(widgetId)]="comboID" [valueKey]="\'ProductID\'" [textKey]="\'ProductName\'" [dataSource]="data" [(ngModel)]="combo.value1"></ig-combo></div>';
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

        it('should initialize correctly when datasource is remote', (done) => {
            $['mockjax']({
                url: "myURL/Northwind",
                contentType: 'application/json',
                dataType: 'json',
                responseText: '[{"ProductID": 1, "ProductName": "Chai"}]'
            });
            var template = '<div><ig-combo [(widgetId)]="comboID" [(options)]="options2" [(ngModel)]="combo.value1"></ig-combo></div>';
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
    });
}

@Component({
    selector: 'test-cmp',
    template: '<div></div>' //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
})
class TestComponent {
    private options: IgCombo;
    private options2: IgCombo;
    private optionsMultipleSelection: IgCombo;
    public northwind: any;
    public combo: any;
    private comboID: string
    public data: Array<any> = [];
    public val = [];
    @ViewChild(Infragistics.IgComboComponent) public viewChild: Infragistics.IgComboComponent;

    constructor() {
        this.northwind = Northwind.getData();
        this.comboID = "combo1";
        this.options = {
            valueKey: "ProductID",
            textKey: "ProductName",
            //dataSource: this.northwind,
            width: "100%"
        };

        this.options2 = {
            valueKey: "ProductID",
            textKey: "ProductName",
            dataSource: "myURL/Northwind",
            width: "100%"
        }
        this.optionsMultipleSelection = $.extend({
            multiSelection: {
                enabled: true,
                addWithKeyModifier: false,
                showCheckboxes: true,
                itemSeparator: ', '
            }
        }, this.options);

        this.combo = {
            value1: 20
        }
    }
}