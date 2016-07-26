// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { inject, TestComponentBuilder } from '@angular/core/testing';
import { Component, ViewChild, TemplateRef } from '@angular/core';
import * as Infragistics from '../../../src/igniteui.angular2';

export function main() {
    describe('Infragistics Angular2 HtmlEditor', () => {
        it('should initialize correctly', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            var template = '<div><ig-html-editor widgetId="htmlEditor" [(options)]="opts" [changeDetectionInterval]="cdi" [(ngModel)]="data"></ig-html-editor></div>';
            return tcb.overrideTemplate(TestComponent, template)
                .createAsync(TestComponent)
                .then((fixture) => {
                    fixture.detectChanges();
                    expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgHtmlEditorComponent)
                        .toBe(true);
                });
        }));

        it('should update its content if data model changes', (done) => {
            inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
                var template = '<div><ig-html-editor widgetId="htmlEditor" [(options)]="opts" [changeDetectionInterval]="cdi" [(ngModel)]="data"></ig-html-editor></div>';
                return tcb.overrideTemplate(TestComponent, template)
                    .createAsync(TestComponent)
                    .then((fixture) => {
                        fixture.detectChanges();
                        fixture.componentInstance.data = "<span>Test Update</span>";
                        fixture.detectChanges();
                        setTimeout(function () {
                            expect($("#htmlEditor").igHtmlEditor("getContent", "html")).toBe("<span>Test Update</span>");
                            done();
                        }, 10);
                    });
            })();
        });

        it('should update its content if html editor content changes', (done) => {
            inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
                var template = '<div><ig-html-editor widgetId="htmlEditor" [(options)]="opts" [changeDetectionInterval]="cdi" [(ngModel)]="data"></ig-html-editor></div>';
                return tcb.overrideTemplate(TestComponent, template)
                    .createAsync(TestComponent)
                    .then((fixture) => {
                        fixture.detectChanges();
                        $("#htmlEditor").igHtmlEditor("setContent", "<h1>Test</h1>", "html");
                        //simulate keyup
                        $($("#htmlEditor").find("iframe")[0]["contentWindow"].document).find("body[contenteditable=true]").trigger("keyup");
                        fixture.detectChanges();
                        setTimeout(function () {
                            expect(fixture.componentInstance.data).toBe("<h1>Test</h1>");
                            done();
                        }, 10);
                    });
            })();
        });


    });
}

@Component({
    selector: 'test-cmp',
    template: '<div></div>', //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
    directives: [Infragistics.IgHtmlEditorComponent]
})
class TestComponent {
    private opts: any;
    private cdi: number;
    private data: string;

    @ViewChild(Infragistics.IgHtmlEditorComponent) public viewChild: Infragistics.IgHtmlEditorComponent;

    constructor() {
        this.cdi = 10;
        this.data = "<p>Ignite UI controls:</p><p><ul><li>igEditors</li><li>igHtmlEditor</li><li>igGrid</li><li>igDataChart</li><li>etc.</li></ul></p>";
        this.opts = {
            value: this.data,
            height: "400px",
            width: "700px"
        };
    }
}