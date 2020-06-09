// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import * as Infragistics from '../../public-api';
import { ProductCategories } from 'src/app/shared/product-categories';


describe('Infragistics Angular Tree', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ Infragistics.IgTreeComponent, TestComponent]
        });
    });

    it('should initialize correctly', (done) => {
        const template = '<div><ig-tree [(widgetId)]="treeID" [(options)]="opts" [dataSource]="data"></ig-tree></div>';
        TestBed.overrideComponent(TestComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgTreeComponent)
                .toBe(true);
            done();
        });
    });

    it('should reflect changes when a record in the data changes', (done) => {
            const template = '<div><ig-tree [(widgetId)]="treeID" [(options)]="opts" [dataSource]="data"></ig-tree></div>';
            TestBed.overrideComponent(TestComponent, {
            set: {
                template
            }
        });
            TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            fixture.componentInstance.data[0].Name = 'Test';
            setTimeout(() => {
                fixture.detectChanges();
                expect($($('#tree1').igTree('nodeByIndex', 0)).children('a').text())
                    .toBe('Test');
                done();
            }, 10);
        });
    });

    it('should reflect changes when a record is added/removed from the data', (done) => {
        const template = '<div><ig-tree [(widgetId)]="treeID" [(options)]="opts" [dataSource]="data"></ig-tree></div>';
        TestBed.overrideComponent(TestComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            // remove item
            fixture.componentInstance.data.splice(0, 1);

            setTimeout(() => {
                fixture.detectChanges();
                expect($(fixture.debugElement.nativeElement).find('#tree1 li.ui-igtree-noderoot').length)
                    .toBe(3);
                // add item
                fixture.componentInstance.data.push({ Name: 'Category', ProductCategoryID: 100 });
                setTimeout(() => {
                    fixture.detectChanges();
                    expect($(fixture.debugElement.nativeElement).find('#tree1 li.ui-igtree-noderoot').length)
                        .toBe(4);
                    expect($(fixture.debugElement.nativeElement).find('#tree1 li.ui-igtree-noderoot').last().children('a').text())
                        .toBe('Category');
                    done();
                }, 10);
            }, 10);
        });
    });

    it('should initialize correctly when datasource is remote', (done) => {
        $['mockjax']({
            url: 'myURL/ProductCategories',
            contentType: 'application/json',
            dataType: 'json',
            responseText: '[{"Name": "Bikes", "ProductCategoryID": 1, "ProductSubcategories": [{ "Name": "Mountain Bikes","ProductSubcategoryID": 1,"Products": null }]}]'
        });
        const template = '<div><ig-tree [(widgetId)]="treeID" [(options)]="opts2" [changeDetectionInterval]="cdi"></ig-tree></div>';
        TestBed.overrideComponent(TestComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgTreeComponent)
                .toBe(true);
            done();
        });
    });
});

@Component({
    selector: 'test-cmp',
    template: '<div></div>' // "Component 'TestComponent' must have either 'template' or 'templateUrl' set."
})
class TestComponent {
    private opts: any;
    private opts2: any;
    private treeID: string;
    public data: Array<any>;
    private cdi: number;
    @ViewChild(Infragistics.IgTreeComponent, {static: true}) public viewChild: Infragistics.IgTreeComponent;

    constructor() {
        this.treeID = 'tree1';
        this.cdi = 10;
        this.data = ProductCategories.getData();

        this.opts = {
            // dataSource: this.data,
            bindings: {
                childDataProperty: 'ProductSubcategories',
                textKey: 'Name',
                valueKey: 'ProductCategoryID'
            }
        };

        this.opts2 = {
            datasource: 'myURL/ProductCategories'
        };
    }
}
