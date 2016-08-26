import { Component, Inject, ElementRef, EventEmitter, HostListener} from '@angular/core';
import { IgHtmlEditorComponent } from "../../src/igniteui.angular2.ts";
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { FORM_DIRECTIVES } from '@angular/common';

declare var jQuery: any;
@Component({
	selector: 'my-app',
	templateUrl: `../igHtmlEditor/igHtmlEditorTemplate.html`,
	directives: [FORM_DIRECTIVES, IgHtmlEditorComponent]
})
export class AppComponent {
	private options: any;
    private data: any

	constructor() {
        this.data = "<p>Ignite UI controls:</p><p><ul><li>igEditors</li><li>igHtmlEditor</li><li>igGrid</li><li>igDataChart</li><li>etc.</li></ul></p>";
		this.options = {
            value: this.data,
            height: "400px",
            width: "700px"
		};
	}
}
bootstrap(AppComponent);