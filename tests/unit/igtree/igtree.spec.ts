// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { it, iit, describe, expect, inject, beforeEachProviders } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/compiler/testing';
import {Component, ViewChild, TemplateRef} from '@angular/core';
import * as Infragistics from '../../../src/igniteui.angular2';
import {ProductCategories} from "../../../samples/data/product-categories";

export function main() {
    describe('Infragistics Angular2 Tree', () => {
        it('should initialize correctly', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            var template = '<div><ig-tree [(widgetId)]="treeID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-tree></div>';
            return tcb.overrideTemplate(TestComponent, template)
                .createAsync(TestComponent)
                .then((fixture) => {
                    fixture.detectChanges();
                    expect(fixture.debugElement.componentInstance.viewChild).toBeAnInstanceOf(Infragistics.IgTreeComponent);
                });
        }));

        it('should reflect changes when a record in the data changes',
            inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
                var template = '<div><ig-tree [(widgetId)]="treeID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-tree></div>';
                return new Promise((resolve, reject) => {
                    tcb.overrideTemplate(TestComponent, template)
                        .createAsync(TestComponent)
                        .then((fixture) => {
                            fixture.detectChanges();
                            fixture.componentInstance.data[0].Name = "Test";
                            setTimeout(() => {
                                fixture.detectChanges();
                                expect($($("#tree1").igTree("nodeByIndex", 0)).children("a").text())
                                    .toBe("Test");
                                    resolve();
                            }, 10);
                        });
                });
            }));

        it('should reflect changes when a record is added/removed from the data',
            inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
                var template = '<div><ig-tree [(widgetId)]="treeID" [(options)]="opts" [changeDetectionInterval]="cdi"></ig-tree></div>';
                return new Promise((resolve, reject) => {
                    tcb.overrideTemplate(TestComponent, template)
                        .createAsync(TestComponent)
                        .then((fixture) => {
                            fixture.detectChanges();
                            //remove item
                            fixture.componentInstance.data.removeAt(0);

                            setTimeout(() => {
                                fixture.detectChanges();
                                expect($(fixture.debugElement.nativeElement).find("#tree1 li.ui-igtree-noderoot").length)
                                    .toBe(3);
                                //add item
                                fixture.componentInstance.data.push({ Name: "Category", ProductCategoryID: 100 });
                                setTimeout(() => {
                                    fixture.detectChanges();
                                    expect($(fixture.debugElement.nativeElement).find("#tree1 li.ui-igtree-noderoot").length)
                                        .toBe(4);
                                    expect($(fixture.debugElement.nativeElement).find("#tree1 li.ui-igtree-noderoot").last().children("a").text())
                                        .toBe("Category");
                                        resolve();
                                }, 10);
                            }, 10);
                        });
                });
            }));
    });
}

@Component({
    selector: 'test-cmp',
    template: '<div></div>', //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
    directives: [Infragistics.IgTreeComponent]
})
class TestComponent {
    private opts: any;
    private treeID: string;
    private data: Array<any>;
    private cdi: number;
    @ViewChild(Infragistics.IgTreeComponent) public viewChild: Infragistics.IgTreeComponent;

    constructor() {
        this.treeID = "tree1";
        this.cdi = 10;
        this.data = ProductCategories.getData();

        this.opts = {
            dataSource: this.data,
            bindings: {
                childDataProperty: "ProductSubcategories",
                textKey: "Name",
                valueKey: "ProductCategoryID"
            }
        };
    }
}