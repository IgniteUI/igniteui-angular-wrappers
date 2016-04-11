import { Component, Inject, ElementRef, EventEmitter, HostListener} from 'angular2/core';
import {IgHtmlEditorComponent } from "../../src/igniteui.angular2.ts";
import {bootstrap }    from 'angular2/platform/browser'

declare var jQuery: any;
@Component({
	selector: 'my-app',
	template: `
    <div class="col-md-8">
        <ig-html-editor widgetId='htmlEditor' [(options)]='options' [(ngModel)]="data">
        </ig-html-editor>
     </div>
    <div class="col-md-4">
        <textarea [(ngModel)]="data"></textarea>
     </div>
     
    `,
	directives: [IgHtmlEditorComponent]
})
export class AppComponent {
	private options: any;
    private data:any

	constructor() {
        this.data = "<p>Ignite UI controls:</p><p><ul><li>igEditors</li><li>igHtmlEditor</li><li>igGrid</li><li>igDataChart</li><li>etc.</li></ul></p>";
		this.options = {
            value: this.data,
            height: "400px",
            width:"700px"
		};
	}
}
bootstrap(AppComponent);