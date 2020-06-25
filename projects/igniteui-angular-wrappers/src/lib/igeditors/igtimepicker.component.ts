import { Component, ElementRef, IterableDiffers, Optional, KeyValueDiffers, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { IgEditorBase } from './igeditorbase';
import { NgModel } from '@angular/forms';


@Component({
    selector: 'ig-time-picker',
    template: '<ng-content></ng-content>',
    inputs: ['widgetId', 'options', 'disabled', 'create', 'locale', 'language', 'regional', 'width', 'height', 'value', 'tabIndex', 'allowNullValue', 'nullValue', 'inputName', 'readOnly', 'validatorOptions', 'buttonType', 'listItems', 'listWidth', 'listItemHoverDuration', 'dropDownAttachedToBody', 'dropDownAnimationDuration', 'visibleItemsCount', 'includeKeys', 'excludeKeys', 'textAlign', 'placeHolder', 'selectionOnFocus', 'textMode', 'spinWrapAround', 'isLimitedToListValues', 'revertIfNotValid', 'preventSubmitOnEnter', 'dropDownOrientation', 'maxLength', 'dropDownOnReadOnly', 'toUpper', 'toLower', 'suppressNotifications', 'suppressKeyboard', 'inputMask', 'dataMode', 'unfilledCharsPrompt', 'padChar', 'emptyChar', 'minValue', 'maxValue', 'dateDisplayFormat', 'dateInputFormat', 'displayTimeOffset', 'spinDelta', 'limitSpinToCurrentField', 'enableUTCDates', 'centuryThreshold', 'yearShift', 'itemsDelta', 'timeInputFormat', 'timeDisplayFormat'],
    outputs: ['rendering', 'rendered', 'mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout', 'blur', 'focus', 'keydown', 'keypress', 'keyup', 'valueChanging', 'valueChanged', 'dropDownListOpening', 'dropDownListOpened', 'dropDownListClosing', 'dropDownListClosed', 'dropDownItemSelecting', 'dropDownItemSelected', 'textChanged']
})
export class IgTimePickerComponent extends IgEditorBase<IgTimePicker> {
    constructor(el: ElementRef, renderer: Renderer2, differs: IterableDiffers, kvalDiffers: KeyValueDiffers,
                cdr: ChangeDetectorRef, @Optional() public model: NgModel) {
      super(el, renderer, differs, kvalDiffers, cdr, model);
    }
    /**
     * Gets the selected list item.
     */
    /* istanbul ignore next */
    public getSelectedListItem(): string { return; }

    /**
     * Returns the visibility state of the calendar.
     */
    /* istanbul ignore next */
    public dropDownVisible(): boolean { return; }

    /**
     * Returns a reference to the drop-down button UI element of the editor.
     */
    /* istanbul ignore next */
    public dropDownButton(): string { return; }

    /**
     * Gets reference to jquery object which is used as container of drop-down list.
     */
    /* istanbul ignore next */
    public dropDownContainer(): string { return; }

    /**
     * Finds index of list item by text that matches with the search parameters.
     *
     * @param text The text to search for in the drop down list.
     * @param matchType The rule that is applied for searching the text.
     */
    /* istanbul ignore next */
    public findListItemIndex(text: string, matchType?: object): number { return; }

    /**
     * Gets the index of the selected list item. Sets selected item by index.
     *
     * @param index The index of the item that needs to be selected.
     */
    /* istanbul ignore next */
    public selectedListIndex(index?: number): number { return; }
    /* istanbul ignore next */
    public value(newValue: object): void { return; }
    /* istanbul ignore next */
    public selectDate(): void { return; }

    /**
     * Changes the the regional settings of widget element to the language specified in [options.regional](ui.igdateeditor#options:regional)
     * Note that this method is for rare scenarios, use [regional](ui.igdateeditor#options:regional) option setter
     */
    /* istanbul ignore next */
    public changeRegional(): void { return; }

    /**
     * Gets selected date as a date object. This method can be used when dataMode is set as either displayModeText or editModeText.
     * In such cases the value() method will not return date object and getSelectedDate() can be used to replace that functionality.
     */
    /* istanbul ignore next */
    public getSelectedDate(): Date { return; }

    /**
     * Increases the date or time period, depending on the current cursor position.
     *
     * @param delta The increase delta.
     */
    /* istanbul ignore next */
    public spinUp(delta?: number): void { return; }

    /**
     * Decreases the date or time period, depending on the current cursor position.
     *
     * @param delta The decrease delta.
     */
    /* istanbul ignore next */
    public spinDown(delta?: number): void { return; }

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

    /**
     * Checks if the value in the editor is valid. Note: This function will not trigger automatic notifications.
     */
    /* istanbul ignore next */
    public isValid(): boolean { return; }
}
