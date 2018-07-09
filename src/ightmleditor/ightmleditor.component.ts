import { Component, ElementRef, Renderer, IterableDiffers, Optional, NgZone, KeyValueDiffers, ChangeDetectorRef } from "@angular/core";
import { IgControlBase } from "../igcontrolbase/igcontrolbase";
import { ControlValueAccessor, NgModel } from "@angular/forms";

declare var jQuery: any;

@Component({
	selector: "ig-html-editor",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","showFormattingToolbar","showTextToolbar","showInsertObjectToolbar","showCopyPasteToolbar","width","height","toolbarSettings","customToolbars","inputName","value"],
	outputs: ["rendered","rendering","actionExecuting","actionExecuted","toolbarCollapsing","toolbarCollapsed","toolbarExpanding","toolbarExpanded","cut","copy","paste","undo","redo","workspaceResized"]
})
export class IgHtmlEditorComponent extends IgControlBase<IgHtmlEditor> implements ControlValueAccessor {
	protected _model: any;
	protected _zone: any;
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, @Optional() public model: NgModel, private zone: NgZone, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef) {
		super(el, renderer, differs, kvalDiffers, cdr);
		if (model) {
			model.valueAccessor = this;
			this._zone = zone;
			this._model = model;
		}
	}
	ngOnInit() {
		super.ngOnInit();
		let that = this;
		if (this._model) {
			var iframe = jQuery(this._el).find("iframe")[0].contentWindow.document;
			jQuery(iframe).find("body[contenteditable=true]").on("keyup", function (evt, ui) {
				that._model.viewToModelUpdate(jQuery(evt.target).html());
				that._zone.run(() => {
					that._model.viewToModelUpdate(jQuery(evt.target).html());
				});
			});
		}

	}
	writeValue(value: any) {
		if (!!jQuery(this._el).data(this._widgetName) && value !== null && value !== jQuery(this._el)[this._widgetName]("getContent", "html")) {
			jQuery(this._el)[this._widgetName]("setContent", value, "html");
		}
	}

	onChange = (_: any) => {
	};
	onTouched = () => {
	};

	registerOnChange(fn: (_: any) => {}): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => {}): void {
		this.onTouched = fn;
	}

	/**
 	 * Returns the element on which the widget was instantiated
	 */
	public widget(): void { return; } ;

	/**
 	 * Resizes the height of the workspace
	 */
	public resizeWorkspace(): void { return; } ;

	/**
 	 * Gets the content of the html editor.
	 *
	 * @param format Returns the content as html or plain text. Values can be "text" or "html".
	 */
	public getContent(format: string): string { return; } ;

	/**
 	 * Sets the content of the html editor.
	 *
	 * @param content The content which will be set.
	 * @param format The content type: "text" or "html".
	 */
	public setContent(content: string, format: string): void { return; } ;

	/**
 	 * Destroys the widget.
	 */
	public destroy(): void { return; } ;

	/**
 	 * Executes htmleditor commands.
	 *
	 * @param actionName The command name.
	 * @param args Additional parameter for the command.
	 */
	public executeAction(actionName: string, args?: Object): void { return; } ;

	/**
 	 * Returns true/false if the editor contents were modified or not.
	 */
	public isDirty(): Object { return; } ;

	/**
 	 * Returns the window object associated with the Html Editor's content editable area
	 */
	public contentWindow(): Object { return; } ;

	/**
 	 * Returns the document object associated with the Html Editor's content editable area
	 */
	public contentDocument(): Object { return; } ;

	/**
 	 * Returns the content editable associated with this Html Editor
	 */
	public contentEditable(): Object { return; } ;

	/**
 	 * Returns Selection object that represent the current selection in the content editable
	 */
	public selection(): Object { return; } ;

	/**
 	 * Returns Range object that represent the current range in the content editable
	 */
	public range(): Object { return; } ;

	/**
 	 * Inserts the provided content at the position of the caret.
	 *
	 * @param element Accepts html string, DOM element or a jQuery object.
	 */
	public insertAtCaret(element: Object): void { return; } ;
}