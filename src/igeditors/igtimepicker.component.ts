import { Component, ElementRef, Renderer, IterableDiffers, Optional, KeyValueDiffers, ChangeDetectorRef } from "@angular/core";
import { IgEditorBase } from "./igeditorbase";
import { NgModel } from "@angular/forms";


@Component({
    selector: "ig-time-picker",
    template: "<ng-content></ng-content>",
    inputs: ["widgetId", "options", "disabled", "create", "locale", "language", "regional", "width", "height", "value", "tabIndex", "allowNullValue", "nullValue", "inputName", "readOnly", "validatorOptions", "buttonType", "listItems", "listWidth", "listItemHoverDuration", "dropDownAttachedToBody", "dropDownAnimationDuration", "visibleItemsCount", "includeKeys", "excludeKeys", "textAlign", "placeHolder", "selectionOnFocus", "textMode", "spinWrapAround", "isLimitedToListValues", "revertIfNotValid", "preventSubmitOnEnter", "dropDownOrientation", "maxLength", "dropDownOnReadOnly", "toUpper", "toLower", "suppressNotifications", "suppressKeyboard", "inputMask", "dataMode", "unfilledCharsPrompt", "padChar", "emptyChar", "minValue", "maxValue", "dateDisplayFormat", "dateInputFormat", "displayTimeOffset", "spinDelta", "limitSpinToCurrentField", "enableUTCDates", "centuryThreshold", "yearShift", "itemsDelta", "timeInputFormat", "timeDisplayFormat"],
    outputs: ["rendering", "rendered", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "blur", "focus", "keydown", "keypress", "keyup", "valueChanging", "valueChanged", "dropDownListOpening", "dropDownListOpened", "dropDownListClosing", "dropDownListClosed", "dropDownItemSelecting", "dropDownItemSelected", "textChanged"]
})
export class IgTimePickerComponent extends IgEditorBase<IgTimePicker> {
    constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef, @Optional() public model: NgModel) { super(el, renderer, differs, kvalDiffers, cdr, model); }
    /**
     * Gets the selected list item.
     */
    public getSelectedListItem(): string { return; };

    /**
     * Returns the visibility state of the calendar.
     */
    public dropDownVisible(): boolean { return; };

    /**
     * Returns a reference to the drop-down button UI element of the editor.
     */
    public dropDownButton(): string { return; };

    /**
     * Gets reference to jquery object which is used as container of drop-down list.
     */
    public dropDownContainer(): string { return; };

    /**
     * Finds index of list item by text that matches with the search parameters.
     *
     * @param text The text to search for in the drop down list.
     * @param matchType The rule that is applied for searching the text.
     */
    public findListItemIndex(text: string, matchType?: Object): number { return; };

    /**
     * Gets the index of the selected list item. Sets selected item by index.
     *
     * @param index The index of the item that needs to be selected.
     */
    public selectedListIndex(index?: number): number { return; };
    public value(newValue: Object): void { return; };
    public selectDate(): void { return; };

    /**
     * Changes the the regional settings of widget element to the language specified in [options.regional](ui.igdateeditor#options:regional)
     * Note that this method is for rare scenarios, use [regional](ui.igdateeditor#options:regional) option setter
     */
    public changeRegional(): void { return; };

    /**
     * Gets selected date as a date object. This method can be used when dataMode is set as either displayModeText or editModeText.
     * In such cases the value() method will not return date object and getSelectedDate() can be used to replace that functionality.
     */
    public getSelectedDate(): Date { return; };

    /**
     * Increases the date or time period, depending on the current cursor position.
     *
     * @param delta The increase delta.
     */
    public spinUp(delta?: number): void { return; };

    /**
     * Decreases the date or time period, depending on the current cursor position.
     *
     * @param delta The decrease delta.
     */
    public spinDown(delta?: number): void { return; };

    /**
     * Returns a reference to the spin up UI element of the editor.
     */
    public spinUpButton(): string { return; };

    /**
     * Returns a reference to the spin down UI element of the editor.
     */
    public spinDownButton(): string { return; };

    /**
     * Checks if the value in the editor is valid. Note: This function will not trigger automatic notifications.
     */
    public isValid(): boolean { return; };
}