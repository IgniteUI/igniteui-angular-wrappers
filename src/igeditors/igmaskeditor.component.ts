import { IgEditorBase } from "./igeditorbase";
import { Renderer, IterableDiffers, Optional, ElementRef, Component, KeyValueDiffers, ChangeDetectorRef } from "@angular/core";
import { NgModel } from "@angular/forms";

@Component({
	selector: "ig-mask-editor",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","value","tabIndex","allowNullValue","nullValue","inputName","readOnly","validatorOptions","buttonType","listItems","listWidth","listItemHoverDuration","dropDownAttachedToBody","dropDownAnimationDuration","visibleItemsCount","includeKeys","excludeKeys","textAlign","placeHolder","selectionOnFocus","textMode","spinWrapAround","isLimitedToListValues","revertIfNotValid","preventSubmitOnEnter","dropDownOrientation","maxLength","dropDownOnReadOnly","toUpper","toLower","locale","suppressNotifications","regional","inputMask","dataMode","unfilledCharsPrompt","padChar","emptyChar"],
	outputs: ["rendering","rendered","mousedown","mouseup","mousemove","mouseover","mouseout","blur","focus","keydown","keypress","keyup","valueChanging","valueChanged","dropDownListOpening","dropDownListOpened","dropDownListClosing","dropDownListClosed","dropDownItemSelecting","dropDownItemSelected","textChanged"]
})
export class IgMaskEditorComponent extends IgEditorBase<IgMaskEditor> { 
	 constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef, @Optional() public model: NgModel) { super(el, renderer, differs, kvalDiffers, cdr, model); }
	/**
	 * Gets/Sets mask editor value.
	 *
	 * @param newValue New mask editor value.
	 */
	public value(newValue?: string): string{ return; };
	public dropDownContainer(): void { return; };
	public showDropDown(): void { return; };
	public hideDropDown(): void { return; };
	public dropDownButton(): void { return; };
	public spinUpButton(): void { return; };
	public spinDownButton(): void { return; };
	public dropDownVisible(): void { return; };
	public findListItemIndex(): void { return; };
	public selectedListIndex(): void { return; };
	public getSelectedListItem(): void { return; };
	public spinUp(): void { return; };
	public spinDown(): void { return; };

	/**
	 * Checks if the value in the editor is valid. Note: This function will not trigger automatic notifications.
	 */
	public isValid(): boolean { return; };

	/**
	 * Changes the all locales into the widget element to the language specified in [options.language](ui.igtexteditor#options:language)
	 * Note that this method is for rare scenarios, see [language](ui.igtexteditor#options:language) or [locale](ui.igtexteditor#options:locale) option setter
	 */
	public changeLocale(): void { return; };

	/**
	 * Gets the visible text in the editor.
	 */
	public displayValue(): string{ return; };

	/**
	 * Returns a reference to the clear button UI element of the editor.
	 */
	public clearButton(): string{ return; };

	/**
	 * Gets the selected text from the editor in edit mode. This can be done inside key event handlers, like keydown or keyup. This method can be used only when the editor is focused. If you invoke this method in display mode, when the editor input is blurred, the returned value will be an empty string.
	 */
	public getSelectedText(): string{ return; };

	/**
	 * Gets the start index of the selected text in the editor.
	 */
	public getSelectionStart(): number { return; };

	/**
	 * Gets the end index of the selected text in the editor.
	 */
	public getSelectionEnd(): number { return; };

	/**
	 * Inserts the text at the location of the caret or over the current selection. If the editor is focused the method will insert the text over the current selection. If the editor is not focused the method will set the text as value of the editor.
	 * Note: The method raises [textChanged](ui.igtexteditor#events:textChanged) event.
	 *
	 * @param string The string to be inserted.
	 */
	public insert(string: string): void { return; };

	/**
	 * Selects the text between start and end indices in the editor. If the parameters are equal, then the method sets location of caret. The method has effect only when the editor has focus.
	 *
	 * @param start Start of the selection.
	 * @param end End of the selection.
	 */
	public select(start: number, end: number): void { return; };
}