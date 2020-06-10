import { Component, ElementRef, IterableDiffers, Optional, KeyValueDiffers, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { IgEditorBase } from './igeditorbase';
import { NgModel } from '@angular/forms';

@Component({
    selector: 'ig-text-editor',
    template: '<ng-content></ng-content>',
    inputs: ['widgetId', 'options', 'changeDetectionInterval', 'disabled', 'create', 'width', 'height', 'value', 'tabIndex', 'allowNullValue', 'nullValue', 'inputName', 'readOnly', 'validatorOptions', 'buttonType', 'listItems', 'listWidth', 'listItemHoverDuration', 'dropDownAttachedToBody', 'dropDownAnimationDuration', 'visibleItemsCount', 'includeKeys', 'excludeKeys', 'textAlign', 'placeHolder', 'selectionOnFocus', 'textMode', 'spinWrapAround', 'isLimitedToListValues', 'revertIfNotValid', 'preventSubmitOnEnter', 'dropDownOrientation', 'maxLength', 'dropDownOnReadOnly', 'toUpper', 'toLower', 'locale', 'suppressNotifications'],
    outputs: ['rendering', 'rendered', 'mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout', 'blur', 'focus', 'keydown', 'keypress', 'keyup', 'valueChanging', 'valueChanged', 'dropDownListOpening', 'dropDownListOpened', 'dropDownListClosing', 'dropDownListClosed', 'dropDownItemSelecting', 'dropDownItemSelected', 'textChanged']
})
export class IgTextEditorComponent extends IgEditorBase<IgTextEditor> {
    constructor(el: ElementRef, renderer: Renderer2, differs: IterableDiffers, kvalDiffers: KeyValueDiffers,
                cdr: ChangeDetectorRef, @Optional() public model: NgModel) {
      super(el, renderer, differs, kvalDiffers, cdr, model);
    }

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

    /**
     * Gets the selected list item.
     */
    /* istanbul ignore next */
    public getSelectedListItem(): string { return; }

    /**
     * Gets the selected text from the editor in edit mode. This can be done inside key event handlers, like keydown or keyup.
     * This method can be used only when the editor is focused.
     * If you invoke this method in display mode, when the editor input is blurred, the returned value will be an empty string.
     */
    /* istanbul ignore next */
    public getSelectedText(): string { return; }

    /**
     * Gets the start index of the selected text in the editor.
     */
    /* istanbul ignore next */
    public getSelectionStart(): number { return; }

    /**
     * Gets the end index of the selected text in the editor.
     */
    /* istanbul ignore next */
    public getSelectionEnd(): number { return; }

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
     * Selects the previous item from the drop-down list.
     */
    /* istanbul ignore next */
    public spinUp(): void { return; }

    /**
     * Selects the next item from the drop-down list.
     */
    /* istanbul ignore next */
    public spinDown(): void { return; }

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
     * Gets/Sets name attribute applied to the editor element.
     *
     * @param newValue The new input name.
     */
    /* istanbul ignore next */
    public inputName(newValue?: string): string { return; }

    public value(newValue: object): void { return; }

    /**
     * Gets the input element of the editor.
     */
    /* istanbul ignore next */
    public field(): string { return; }

    /**
     * Gets a reference to the jQuery element that wraps the editor.
     */
    /* istanbul ignore next */
    public editorContainer(): string { return; }

    /**
     * Gets whether the editor has focus.
     */
    /* istanbul ignore next */
    public hasFocus(): boolean { return; }

    /**
     * Sets focus to the editor after the specified delay.
     *
     * @param delay The delay before focusing the editor.
     */
    /* istanbul ignore next */
    public setFocus(delay?: number): void { return; }

    /**
     * Hides the editor.
     */
    /* istanbul ignore next */
    public hide(): void { return; }

    /**
     * Shows the editor.
     */
    /* istanbul ignore next */
    public show(): void { return; }

    /**
     * Gets a reference to [igValidator](ui.igvalidator) used by the editor.
     */
    /* istanbul ignore next */
    public validator(): object { return; }

    /**
     * Checks if the value in the editor is valid. Note: This function will not trigger automatic notifications.
     */
    /* istanbul ignore next */
    public isValid(): boolean { return; }

    /**
     * Triggers validation for the editor. If validatorOptions are set will also call validate on the [igValidator](ui.igvalidator).
     */
    /* istanbul ignore next */
    public validate(): boolean { return; }

    /**
     * Destroys the widget
     */
    /* istanbul ignore next */
    public destroy(): void { return; }
}
