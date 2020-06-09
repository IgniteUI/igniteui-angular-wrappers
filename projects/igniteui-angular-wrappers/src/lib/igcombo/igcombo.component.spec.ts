import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component, ViewChild } from '@angular/core';
import { IgComboComponent } from '../igniteui-angular-wrappers.module';
import { Northwind } from 'src/app/shared/northwind';
import { FormsModule } from '@angular/forms';

describe('Infragistics Angular Combo', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [IgComboComponent,
                TestComponent,
                TestComponentNoNgModel,
                TestComponentMultipleSelection,
                TestComponentAllowCustomValue,
                TestComponentEmptyData,
                TestComponentRemoteData
            ]
        })
            .compileComponents();
    }));

    describe('With ngModel', () => {


        beforeEach(() => {
            fixture = TestBed.createComponent(TestComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('should initialize correctly', () => {
            expect(component).toBeTruthy();
            expect(fixture.debugElement.componentInstance.viewChild instanceof IgComboComponent)
                .toBe(true);
        });

        it('should be updated correctly if the ngModel value is updated', (done) => {
            fixture.detectChanges();
            fixture.componentInstance.combo.value1 = 1;
            fixture.detectChanges();
            setTimeout(function() {
                expect($('#combo1').igCombo('value')).toBe(1);
                expect($('#combo1').igCombo('text')).toBe('Chai');
                done();
            }, 10);

        });

        it('should be updated correctly if the ngModel value is cleared.', (done) => {
            fixture.detectChanges();
            fixture.componentInstance.combo.value1 = 1;
            fixture.detectChanges();
            setTimeout(function() {
                // clear
                $('#combo1').parents('ig-combo').find('.ui-igcombo-clearicon').click();
                fixture.detectChanges();
                setTimeout(function() {
                    expect(fixture.componentInstance.combo.value1).toBeNull();
                    done();
                }, 10);
            }, 10);
        });

        it('the ngModel should be updated correctly if the combo selection is updated', (done) => {
            fixture.detectChanges();
            const elem = $('#combo1').igCombo('itemsFromIndex', 0).element;
            $('#combo1').igCombo('select', elem, {}, true);
            fixture.detectChanges();
            setTimeout(function() {
                expect(fixture.componentInstance.combo.value1).toEqual(1);
                done();
            }, 10);
        });

        it('should reflect changes when a record in the data changes', (done) => {
            fixture.detectChanges();
            fixture.componentInstance.northwind[19].ProductName = 'Test';

            setTimeout(function() {
                fixture.detectChanges();

                const elem = $('#combo1').igCombo('itemsFromIndex', 19).element;
                expect(elem.text()).toBe('Test');
                expect($('#combo1').igCombo('text')).toBe('Test');
                done();
            }, 10);
        });
    });

    describe('Without ngModel', () => {

        beforeEach(() => {
            fixture = TestBed.createComponent(TestComponentNoNgModel);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('should initialize ig-combo', () => {

            fixture.detectChanges();
            expect(fixture.debugElement.componentInstance.viewChild instanceof IgComboComponent)
                .toBe(true);
        });

        it('should select correctly without ngModel', () => {

            fixture.detectChanges();
            const elem = $('#combo1').igCombo('itemsFromIndex', 0).element;
            const select = () => {
                $('#combo1').igCombo('select', elem, {}, true);
            };

            // #244 fails with 'Cannot read property 'viewToModelUpdate' of undefined'
            expect(select).not.toThrow();
            expect(fixture.componentInstance.viewChild.value()).toEqual(1);
        });
    });

    describe('With multiple selection', () => {
        beforeEach(() => {
            fixture = TestBed.createComponent(TestComponentMultipleSelection);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('should be updated correctly if the ngModel value is cleared when multiple selection.', (done) => {
            fixture.detectChanges();
            fixture.componentInstance.combo.value1 = 1;
            fixture.detectChanges();
            setTimeout(function() {
                // clear
                $('#combo1').parents('ig-combo').find('.ui-igcombo-clearicon').click();
                fixture.detectChanges();
                setTimeout(function() {
                    expect(fixture.componentInstance.combo.value1 instanceof Array && fixture.componentInstance.combo.value1.length === 0).toBeTruthy();
                    done();
                }, 10);
            }, 10);
        });

        it('should apply ngModel when multiple selection and no valueKey set.', () => {
            fixture.componentInstance.viewChild.options = {
                multiSelection: { enabled: true, showCheckboxes: true }
            };
            fixture.componentInstance.viewChild.dataSource = ['foo', 'bar', 'bas'];
            fixture.detectChanges();
            const elem = $('#combo1').igCombo('itemsFromIndex', 0).element;
            $('#combo1').igCombo('select', elem, {}, true);
            fixture.detectChanges();
            expect(fixture.componentInstance.combo.value1.length).toBe(1);
            expect(fixture.componentInstance.combo.value1[0]).toBe('foo');
        });

        it('the ngModel should be updated correctly if the combo selection is updated and multiple items are selected', (done) => {
            fixture.detectChanges();
            const $firstThreeItems = $('.ui-igcombo-listitem:lt(3)');

            $('#combo1').igCombo('select', $firstThreeItems, {}, true);

            fixture.detectChanges();
            setTimeout(function() {
                expect(fixture.componentInstance.combo.value1).toEqual([1, 2, 3]);
                done();
            }, 10);
        });
    });

    describe('With allowed custom values', () => {
        beforeEach(() => {
            fixture = TestBed.createComponent(TestComponentAllowCustomValue);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('the ngModel should be updated correctly if the combo is allowing custom values', (done) => {
            fixture.detectChanges();
            setTimeout(function() {
                // var elem = $("#combo1").igCombo("itemsFromIndex", 0)["element"];
                // $("#combo1").igCombo("select", elem, {}, true);
                $(fixture.debugElement.nativeElement).find('#combo1').val('foo').trigger('input');
                fixture.detectChanges();
                setTimeout(function() {
                    expect(fixture.componentInstance.combo.value1).toEqual('foo');
                    // clear
                    $('#combo1').parents('ig-combo').find('.ui-igcombo-clearicon').click();
                    fixture.detectChanges();
                    setTimeout(function() {
                        expect(fixture.componentInstance.combo.value1).toBeNull();
                        done();
                    }, 10);
                }, 10);
            }, 100);
        });
    });

    describe('With empty data', () => {
        beforeEach(() => {
            fixture = TestBed.createComponent(TestComponentEmptyData);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('should apply the model if there is a new data assigned', (done) => {
            fixture.detectChanges();
            fixture.componentInstance.data = fixture.componentInstance.northwind;
            setTimeout(function() {
                fixture.detectChanges();
                expect($('#combo1').igCombo('value')).toBe(fixture.componentInstance.combo.value1);
                expect($('#combo1').val())
                    .toBe(fixture.componentInstance.northwind[fixture.componentInstance.combo.value1 - 1].ProductName);
                done();
            }, 10);
        });
    });

    describe('With remote data', () => {
        beforeEach(() => {
            $.mockjax({
                url: 'myURL/Northwind',
                contentType: 'application/json',
                dataType: 'json',
                responseText: '[{"ProductID": 1, "ProductName": "Chai"}]'
            });
            fixture = TestBed.createComponent(TestComponentRemoteData);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('should initialize correctly when datasource is remote', (done) => {
            fixture.detectChanges();
            expect(fixture.debugElement.componentInstance.viewChild instanceof IgComboComponent)
                .toBe(true);
            done();
        });
    });
});

@Component({
    selector: 'test-cmp',
    template: '<div><ig-combo [(widgetId)]="comboID" [(options)]="options" [(ngModel)]="combo.value1" [dataSource]="northwind"></ig-combo></div>'
})
class TestComponent {
    public options: IgCombo;
    public options2: IgCombo;
    public optionsMultipleSelection: IgCombo;
    public northwind: any;
    public combo: any;
    private comboID: string;
    public data: Array<any> = [];
    public val = [];
    @ViewChild(IgComboComponent, { static: true }) public viewChild: IgComboComponent;

    constructor() {
        this.northwind = Northwind.getData();
        this.comboID = 'combo1';
        this.options = {
            valueKey: 'ProductID',
            textKey: 'ProductName',
            // dataSource: this.northwind,
            width: '100%'
        };

        this.options2 = {
            valueKey: 'ProductID',
            textKey: 'ProductName',
            dataSource: 'myURL/Northwind',
            width: '100%'
        };
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
        };
    }
}

@Component({
    selector: 'test-cmp',
    template: '<div><ig-combo [(widgetId)]="comboID" [(options)]="options" [(dataSource)]="northwind"></ig-combo></div>'
})
class TestComponentNoNgModel extends TestComponent { }

@Component({
    selector: 'test-cmp',
    template: '<div><ig-combo [(widgetId)]="comboID" [(options)]="optionsMultipleSelection" [(ngModel)]="combo.value1" [(dataSource)]="northwind"></ig-combo></div>'
})
class TestComponentMultipleSelection extends TestComponent { }

@Component({
    selector: 'test-cmp',
    template: '<div><ig-combo [(widgetId)]="comboID" [(options)]="options" [(ngModel)]="combo.value1" [dataSource]="northwind" [allowCustomValue]="true"></ig-combo></div>'
})
class TestComponentAllowCustomValue extends TestComponent { }

@Component({
    selector: 'test-cmp',
    template: '<div><ig-combo [(widgetId)]="comboID" [valueKey]="\'ProductID\'" [textKey]="\'ProductName\'" [dataSource]="data" [(ngModel)]="combo.value1"></ig-combo></div>'
})
class TestComponentEmptyData extends TestComponent { }

@Component({
    selector: 'test-cmp',
    template: '<div><ig-combo [(widgetId)]="comboID" [(options)]="options2" [(ngModel)]="combo.value1"></ig-combo></div>'
})
class TestComponentRemoteData extends TestComponent { }
