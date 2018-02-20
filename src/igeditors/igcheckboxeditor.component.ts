import { Component, ElementRef, Renderer, IterableDiffers, Optional, KeyValueDiffers, ChangeDetectorRef } from "@angular/core";
import { IgEditorBase } from "./igeditorbase";
import { NgModel } from "@angular/forms";

@Component({
	selector: "ig-checkbox-editor",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","value","tabIndex","allowNullValue","nullValue","inputName","readOnly","validatorOptions","checked","size","iconClass"],
	outputs: ["rendering","rendered","mousedown","mouseup","mousemove","mouseover","mouseout","blur","focus","keydown","keypress","keyup","valueChanging","valueChanged"]
})
export class IgCheckboxEditorComponent extends IgEditorBase<IgCheckboxEditor> {
	 constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef, @Optional() public model: NgModel) { super(el, renderer, differs, kvalDiffers, cdr, model); }

	/**
 	 * Checks if the value in the editor is valid. Note: This function will not trigger automatic notifications.
	 */
	public isValid(): boolean { return; } ;

	/**
 	 * Gets/Sets Current checked state/Value of the igCheckboxEditor that will be submitted by the HTML form.
	 * 				1. If the [value](ui.igcheckboxeditor#options:value) option IS NOT defined, then 'value' method will match the checked state of the editor.
	 * 				This option is used when the checkbox is intended to operate as a Boolean editor. In that case the return type is bool.
	 * 				2. If the [value](ui.igcheckboxeditor#options:value) option IS defined, then 'value' method will return the value that will be submitted when the editor is checked and the form is submitted.
	 * 				To get checked state regardless of the 'value' option, use $(".selector").igCheckboxEditor("option", "checked");
	 *
	 * @param newValue 
	 */
	public value(newValue: Object): string { return; } ;

	/**
 	 * Toggles the state of the checkbox.
	 */
	public toggle(): void { return; } ;
}