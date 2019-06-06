// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as Infragistics from '../../../src/main';

export function main() {
    describe('Infragistics Angular2 HtmlEditor', () => {

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [FormsModule],
                declarations: [Infragistics.IgHtmlEditorComponent, TestComponent]
            });
        });

        it('should initialize correctly', (done) => {
            var template = '<div><ig-html-editor widgetId="htmlEditor" [(options)]="opts" [changeDetectionInterval]="cdi" [(ngModel)]="data"></ig-html-editor></div>';
            TestBed.overrideComponent(TestComponent, {
                set: {
                    template: template
                }
            });
            TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgHtmlEditorComponent)
                    .toBe(true);
                done();
            });
        });

        it('should update its content if data model changes', (done) => {
                var template = '<div><ig-html-editor widgetId="htmlEditor" [(options)]="opts" [changeDetectionInterval]="cdi" [(ngModel)]="data"></ig-html-editor></div>';
                TestBed.overrideComponent(TestComponent, {
                set: {
                    template: template
                }
            });
            TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                fixture.componentInstance.data = "<span>Test Update</span>";
                fixture.detectChanges();
                setTimeout(function () {
                    expect($("#htmlEditor").igHtmlEditor("getContent", "html")).toBe("<span>Test Update</span>");
                    done();
                }, 10);
            });
        });

        it('should update its content if html editor content changes', (done) => {
                var template = '<div><ig-html-editor widgetId="htmlEditor" [(options)]="opts" [changeDetectionInterval]="cdi" [(ngModel)]="data"></ig-html-editor></div>';
                TestBed.overrideComponent(TestComponent, {
                set: {
                    template: template
                }
            });
            TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(TestComponent);
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
        });


    });
}

@Component({
    selector: 'test-cmp',
    template: '<div></div>' //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
})
class TestComponent {
    private opts: any;
    private cdi: number;
    public data: string;

    @ViewChild(Infragistics.IgHtmlEditorComponent, {static: true}) public viewChild: Infragistics.IgHtmlEditorComponent;

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