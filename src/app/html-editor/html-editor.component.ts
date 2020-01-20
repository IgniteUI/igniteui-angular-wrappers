import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-html-editor',
    templateUrl: './html-editor.component.html',
    styleUrls: ['./html-editor.component.css']
})
export class HtmlEditorComponent {

    public options: any;
    public data: any

    constructor() {
        this.data = "<p>Ignite UI controls:</p><p><ul><li>igEditors</li><li>igHtmlEditor</li><li>igGrid</li><li>igDataChart</li><li>etc.</li></ul></p>";
        this.options = {
            value: this.data,
            height: "400px",
            width: "700px"
        };
    }
}
