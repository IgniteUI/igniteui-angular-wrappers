import { Component, ElementRef, IterableDiffers, Optional, KeyValueDiffers, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { IgEditorBase } from './igeditorbase';
import { NgModel } from '@angular/forms';

@Component({
    selector: 'ig-currency-editor',
    template: '<ng-content></ng-content>',
    inputs: ['widgetId', 'options', 'changeDetectionInterval', 'disabled', 'create', 'width', 'height', 'value', 'tabIndex', 'allowNullValue', 'nullValue', 'inputName', 'readOnly', 'validatorOptions', 'buttonType', 'listItems', 'listWidth', 'listItemHoverDuration', 'dropDownAttachedToBody', 'dropDownAnimationDuration', 'visibleItemsCount', 'includeKeys', 'excludeKeys', 'textAlign', 'placeHolder', 'selectionOnFocus', 'textMode', 'spinWrapAround', 'isLimitedToListValues', 'revertIfNotValid', 'preventSubmitOnEnter', 'dropDownOrientation', 'maxLength', 'dropDownOnReadOnly', 'toUpper', 'toLower', 'locale', 'suppressNotifications', 'regional', 'negativeSign', 'negativePattern', 'decimalSeparator', 'groupSeparator', 'groups', 'maxDecimals', 'minDecimals', 'dataMode', 'minValue', 'maxValue', 'spinDelta', 'scientificFormat', 'positivePattern', 'currencySymbol'],
    outputs: ['rendering', 'rendered', 'mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout', 'blur', 'focus', 'keydown', 'keypress', 'keyup', 'valueChanging', 'valueChanged', 'dropDownListOpening', 'dropDownListOpened', 'dropDownListClosing', 'dropDownListClosed', 'dropDownItemSelecting', 'dropDownItemSelected', 'textChanged']
})
export class IgCurrencyEditorComponent extends IgEditorBase<IgCurrencyEditor> {
    constructor(el: ElementRef, renderer: Renderer2, differs: IterableDiffers, kvalDiffers: KeyValueDiffers,
                cdr: ChangeDetectorRef, @Optional() public model: NgModel) {
      super(el, renderer, differs, kvalDiffers, cdr, model);
    }

    /**
     * Gets/sets a string that is used as the currency symbol shown with the number in the input.
     * The value provided as a param is propagated to the currencySymbol option and thus has the same priority as the option.
     *
     * @param symbol New currency symbol.
     */
    /* istanbul ignore next */
    public currencySymbol(symbol?: object): string { return; }

    /**
     * Gets/Sets editor value.
     *
     * @param newValue New editor value.
     */
    /* istanbul ignore next */
    public value(newValue?: number): number { return; }

    /**
     * Finds index of list item by text that matches with the search parameters.
     *
     * @param value The text to search for.
     */
    /* istanbul ignore next */
    public findListItemIndex(value: number): number { return; }
    /* istanbul ignore next */
    public getSelectedText(): void { return; }
    /* istanbul ignore next */
    public getSelectionStart(): void { return; }
    /* istanbul ignore next */
    public getSelectionEnd(): void { return; }

    /**
     * Increments value in editor according to the parameter or selects the previous item from the drop-down list if
     * [isLimitedToListValues](ui.%%WidgetNameLowered%%#options:isLimitedToListValues) is enabled.
     *
     * @param delta Increments value.
     */
    /* istanbul ignore next */
    public spinUp(delta?: number): void { return; }

    /**
     * Decrements value in editor according to the parameter selects the next item from the drop-down list if
     * [isLimitedToListValues](ui.%%WidgetNameLowered%%#options:isLimitedToListValues) is enabled.
     *
     * @param delta Decrement value.
     */
    /* istanbul ignore next */
    public spinDown(delta?: number): void { return; }

    /**
     * This method is deprecated in favor of [spinUp](ui.%%WidgetNameLowered%%#options:spinUp).
     */
    /* istanbul ignore next */
    public selectListIndexUp(): void { return; }

    /**
     * This method is deprecated in favor of [spinDown](ui.%%WidgetNameLowered%%#options:spinDown).
     */
    /* istanbul ignore next */
    public selectListIndexDown(): void { return; }

    /**
     * Gets current regional.
     */
    /* istanbul ignore next */
    public getRegionalOption(): string { return; }

    /**
     * Changes the the regional settings of widget element to the language specified in
     * [options.regional](ui.ignumericeditor#options:regional)
     * Note that this method is for rare scenarios, use [regional](ui.ignumericeditor#options:regional) option setter
     */
    /* istanbul ignore next */
    public changeRegional(): void { return; }
}
