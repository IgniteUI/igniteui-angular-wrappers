import { Component, ElementRef, Renderer, IterableDiffers, Optional } from "@angular/core";
import { IgEditorBase } from "./igeditorbase";
import { NgModel } from "@angular/forms";

@Component({
	selector: "ig-text-editor",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","value","tabIndex","allowNullValue","nullValue","inputName","readOnly","validatorOptions","buttonType","listItems","listWidth","listItemHoverDuration","dropDownAttachedToBody","dropDownAnimationDuration","visibleItemsCount","includeKeys","excludeKeys","textAlign","placeHolder","selectionOnFocus","textMode","spinWrapAround","isLimitedToListValues","revertIfNotValid","preventSubmitOnEnter","dropDownOrientation","maxLength","dropDownOnReadOnly","toUpper","toLower","locale","suppressNotifications"],
	outputs: ["rendering","rendered","mousedown","mouseup","mousemove","mouseover","mouseout","blur","focus","keydown","keypress","keyup","valueChanging","valueChanged","dropDownListOpening","dropDownListOpened","dropDownListClosing","dropDownListClosed","dropDownItemSelecting","dropDownItemSelected","textChanged"]
})
export class IgTextEditorComponent extends IgEditorBase<IgTextEditor> {
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, @Optional() public model: NgModel) { super(el, renderer, differs, model); }

	/**
 	 * Gets the visible text in the editor.
	 */
	public displayValue(): string { return; } ;

	/**
 	 * Gets reference to jquery object which is used as container of drop-down list.
	 */
	public dropDownContainer(): string { return; } ;

	/**
 	 * Shows the drop down list.
	 */
	public showDropDown(): void { return; } ;

	/**
 	 * Hides the drop down list.
	 */
	public hideDropDown(): void { return; } ;

	/**
 	 * Returns a reference to the drop-down button UI element of the editor.
	 */
	public dropDownButton(): string { return; } ;

	/**
 	 * Returns if the drop-down list is visible.
	 */
	public dropDownVisible(): boolean { return; } ;

	/**
 	 * Returns a reference to the clear button UI element of the editor.
	 */
	public clearButton(): string { return; } ;

	/**
 	 * Finds index of list item by text that matches with the search parameters.
	 *
	 * @param text     The text to search for in the drop down list.
	 * @param matchType     The rule that is applied for searching the text.
	 */
	public findListItemIndex(text: string, matchType?: Object): number { return; } ;

	/**
 	 * Gets the index of the selected list item. Sets selected item by index.
	 *
	 * @param index     The index of the item that needs to be selected.
	 */
	public selectedListIndex(index?: number): number { return; } ;

	/**
 	 * Gets the selected list item.
	 */
	public getSelectedListItem(): string { return; } ;

	/**
 	 * Gets the selected text in the editor.
	 */
	public getSelectedText(): string { return; } ;

	/**
 	 * Gets the start index of the selected text in the editor.
	 */
	public getSelectionStart(): number { return; } ;

	/**
 	 * Gets the end index of the selected text in the editor.
	 */
	public getSelectionEnd(): number { return; } ;

	/**
 	 * Inserts the text at the location of the caret or over the current selection. If the editor is focused the method will insert the text over the current selection. If the editor is not focused the method will set the text as value of the editor.
	 * 				Note: The method raises [textChanged](ui.igtexteditor#events:textChanged) event.
	 *
	 * @param string     The string to be inserted.
	 */
	public insert(string: string): void { return; } ;

	/**
 	 * Selects the text between start and end indices in the editor. If the parameters are equal, then the method sets location of caret. The method has effect only when the editor has focus.
	 *
	 * @param start     Start of the selection.
	 * @param end     End of the selection.
	 */
	public select(start: number, end: number): void { return; } ;

	/**
 	 * Hovers the previous item in the drop-down list if the list is opened.
	 */
	public spinUp(): void { return; } ;

	/**
 	 * Hovers the next item in the drop-down list if the list is opened.
	 */
	public spinDown(): void { return; } ;

	/**
 	 * Returns a reference to the spin up UI element of the editor.
	 */
	public spinUpButton(): string { return; } ;

	/**
 	 * Returns a reference to the spin down UI element of the editor.
	 */
	public spinDownButton(): string { return; } ;
}