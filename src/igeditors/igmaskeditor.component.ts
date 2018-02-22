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
	 * @param newValue     New mask editor value.
	 */
	public value(newValue?: string): string { return; } ;
	public dropDownContainer(): void { return; } ;
	public showDropDown(): void { return; } ;
	public hideDropDown(): void { return; } ;
	public dropDownButton(): void { return; } ;
	public spinUpButton(): void { return; } ;
	public spinDownButton(): void { return; } ;
	public dropDownVisible(): void { return; } ;
	public findListItemIndex(): void { return; } ;
	public selectedListIndex(): void { return; } ;
	public getSelectedListItem(): void { return; } ;
	public spinUp(): void { return; } ;
	public spinDown(): void { return; } ;

	/**
 	 * Checks if the value in the editor is valid. Note: This function will not trigger automatic notifications.
	 */
	public isValid(): boolean { return; } ;
}