import { Component, ElementRef, IterableDiffers, Optional, KeyValueDiffers, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { IgEditorBase } from './igeditorbase';
import { NgModel } from '@angular/forms';

@Component({
    selector: 'ig-numeric-editor',
    template: '<ng-content></ng-content>',
    inputs: ['widgetId', 'options', 'changeDetectionInterval', 'disabled', 'create', 'width', 'height', 'value', 'tabIndex', 'allowNullValue', 'nullValue', 'inputName', 'readOnly', 'validatorOptions', 'buttonType', 'listItems', 'listWidth', 'listItemHoverDuration', 'dropDownAttachedToBody', 'dropDownAnimationDuration', 'visibleItemsCount', 'includeKeys', 'excludeKeys', 'textAlign', 'placeHolder', 'selectionOnFocus', 'textMode', 'spinWrapAround', 'isLimitedToListValues', 'revertIfNotValid', 'preventSubmitOnEnter', 'dropDownOrientation', 'maxLength', 'dropDownOnReadOnly', 'toUpper', 'toLower', 'locale', 'suppressNotifications', 'regional', 'negativeSign', 'negativePattern', 'decimalSeparator', 'groupSeparator', 'groups', 'maxDecimals', 'minDecimals', 'dataMode', 'minValue', 'maxValue', 'spinDelta', 'scientificFormat'],
    outputs: ['rendering', 'rendered', 'mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout', 'blur', 'focus', 'keydown', 'keypress', 'keyup', 'valueChanging', 'valueChanged', 'dropDownListOpening', 'dropDownListOpened', 'dropDownListClosing', 'dropDownListClosed', 'dropDownItemSelecting', 'dropDownItemSelected', 'textChanged'],
    standalone: false
})
export class IgNumericEditorComponent extends IgEditorBase<IgNumericEditor> {
    constructor(el: ElementRef, renderer: Renderer2, differs: IterableDiffers, kvalDiffers: KeyValueDiffers,
                cdr: ChangeDetectorRef, @Optional() public model: NgModel) {
      super(el, renderer, differs, kvalDiffers, cdr, model);
    }

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

    /**
     * Changes the all locales into the widget element to the language specified in [options.language](ui.igtexteditor#options:language)
     * Note that this method is for rare scenarios, see [language](ui.igtexteditor#options:language) or
     * [locale](ui.igtexteditor#options:locale) option setter
     */
    /* istanbul ignore next */
    public changeLocale(): void { return; }

    /**
     * Gets the visible text in the editor.
     */
    /* istanbul ignore next */
    public displayValue(): string { return; }

    /**
     * Gets reference to jquery object which is used as container of drop-down list.
     */
    /* istanbul ignore next */
    public dropDownContainer(): string { return; }

    /**
     * Shows the drop down list.
     */
    /* istanbul ignore next */
    public showDropDown(): void { return; }

    /**
     * Hides the drop down list.
     */
    /* istanbul ignore next */
    public hideDropDown(): void { return; }

    /**
     * Returns a reference to the drop-down button UI element of the editor.
     */
    /* istanbul ignore next */
    public dropDownButton(): string { return; }

    /**
     * Returns if the drop-down list is visible.
     */
    /* istanbul ignore next */
    public dropDownVisible(): boolean { return; }

    /**
     * Returns a reference to the clear button UI element of the editor.
     */
    /* istanbul ignore next */
    public clearButton(): string { return; }

    /**
     * Gets the index of the selected list item. Sets selected item by index.
     *
     * @param index The index of the item that needs to be selected.
     */
    /* istanbul ignore next */
    public selectedListIndex(index?: number): number { return; }

    /**
     * Gets the selected list item.
     */
    /* istanbul ignore next */
    public getSelectedListItem(): string { return; }

    /**
     * Inserts the text at the location of the caret or over the current selection.
     * If the editor is focused the method will insert the text over the current selection.
     * If the editor is not focused the method will set the text as value of the editor.
     * Note: The method raises [textChanged](ui.igtexteditor#events:textChanged) event.
     *
     * @param value The string to be inserted.
     */
    /* istanbul ignore next */
    public insert(value: string): void { return; }

    /**
     * Selects the text between start and end indices in the editor.
     * If the parameters are equal, then the method sets location of caret. The method has effect only when the editor has focus.
     *
     * @param start Start of the selection.
     * @param end End of the selection.
     */
    /* istanbul ignore next */
    public select(start: number, end: number): void { return; }

    /**
     * Returns a reference to the spin up UI element of the editor.
     */
    /* istanbul ignore next */
    public spinUpButton(): string { return; }

    /**
     * Returns a reference to the spin down UI element of the editor.
     */
    /* istanbul ignore next */
    public spinDownButton(): string { return; }
}
