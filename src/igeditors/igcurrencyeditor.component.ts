import { Component, Renderer, ElementRef, IterableDiffers, Optional } from "@angular/core";
import { IgEditorBase } from "./igeditorbase";
import { NgModel } from "@angular/forms";

@Component({
	selector: "ig-currency-editor",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","value","tabIndex","allowNullValue","nullValue","inputName","readOnly","validatorOptions","buttonType","listItems","listWidth","listItemHoverDuration","dropDownAttachedToBody","dropDownAnimationDuration","visibleItemsCount","includeKeys","excludeKeys","textAlign","placeHolder","selectionOnFocus","textMode","spinWrapAround","isLimitedToListValues","revertIfNotValid","preventSubmitOnEnter","dropDownOrientation","maxLength","dropDownOnReadOnly","toUpper","toLower","locale","suppressNotifications","regional","negativeSign","negativePattern","decimalSeparator","groupSeparator","groups","maxDecimals","minDecimals","dataMode","minValue","maxValue","spinDelta","scientificFormat","positivePattern","currencySymbol"],
	outputs: ["rendering","rendered","mousedown","mouseup","mousemove","mouseover","mouseout","blur","focus","keydown","keypress","keyup","valueChanging","valueChanged","dropDownListOpening","dropDownListOpened","dropDownListClosing","dropDownListClosed","dropDownItemSelecting","dropDownItemSelected","textChanged"]
})
export class IgCurrencyEditorComponent extends IgEditorBase<IgCurrencyEditor> {
	 constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, @Optional() public model: NgModel) { super(el, renderer, differs, model); }

	/**
 	 * Gets/sets a string that is used as the currency symbol shown with the number in the input. The value provided as a param is propagated to the currencySymbol option and thus has the same priority as the option.
	 *
	 * @param symbol     New currency symbol.
	 */
	public currencySymbol(symbol?: Object): string { return; } ;
}