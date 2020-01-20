import { IgEditorBase } from "./igeditorbase";
import { IterableDiffers, Optional, ElementRef, Component, KeyValueDiffers, ChangeDetectorRef, Renderer2 } from "@angular/core";
import { NgModel } from "@angular/forms";

@Component({
    selector: "ig-mask-editor",
    template: "<ng-content></ng-content>",
    inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "value", "tabIndex", "allowNullValue", "nullValue", "inputName", "readOnly", "validatorOptions", "buttonType", "listItems", "listWidth", "listItemHoverDuration", "dropDownAttachedToBody", "dropDownAnimationDuration", "visibleItemsCount", "includeKeys", "excludeKeys", "textAlign", "placeHolder", "selectionOnFocus", "textMode", "spinWrapAround", "isLimitedToListValues", "revertIfNotValid", "preventSubmitOnEnter", "dropDownOrientation", "maxLength", "dropDownOnReadOnly", "toUpper", "toLower", "locale", "suppressNotifications", "regional", "inputMask", "dataMode", "unfilledCharsPrompt", "padChar", "emptyChar"],
    outputs: ["rendering", "rendered", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "blur", "focus", "keydown", "keypress", "keyup", "valueChanging", "valueChanged", "dropDownListOpening", "dropDownListOpened", "dropDownListClosing", "dropDownListClosed", "dropDownItemSelecting", "dropDownItemSelected", "textChanged"]
})
export class IgMaskEditorComponent extends IgEditorBase<IgMaskEditor> {
    constructor(el: ElementRef, renderer: Renderer2, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef, @Optional() public model: NgModel) { super(el, renderer, differs, kvalDiffers, cdr, model); }
    /**
     * Gets/Sets mask editor value.
     *
     * @param newValue New mask editor value.
     */
    /* istanbul ignore next */
    public value(newValue?: string): string { return; };
    /* istanbul ignore next */
    public dropDownContainer(): void { return; };
    /* istanbul ignore next */
    public showDropDown(): void { return; };
    /* istanbul ignore next */
    public hideDropDown(): void { return; };
    /* istanbul ignore next */
    public dropDownButton(): void { return; };
    /* istanbul ignore next */
    public spinUpButton(): void { return; };
    /* istanbul ignore next */
    public spinDownButton(): void { return; };
    /* istanbul ignore next */
    public dropDownVisible(): void { return; };
    /* istanbul ignore next */
    public findListItemIndex(): void { return; };
    /* istanbul ignore next */
    public selectedListIndex(): void { return; };
    /* istanbul ignore next */
    public getSelectedListItem(): void { return; };
    /* istanbul ignore next */
    public spinUp(): void { return; };
    /* istanbul ignore next */
    public spinDown(): void { return; };

    /**
     * Checks if the value in the editor is valid. Note: This function will not trigger automatic notifications.
     */
    /* istanbul ignore next */
    public isValid(): boolean { return; };

    /**
     * Changes the all locales into the widget element to the language specified in [options.language](ui.igtexteditor#options:language)
     * Note that this method is for rare scenarios, see [language](ui.igtexteditor#options:language) or [locale](ui.igtexteditor#options:locale) option setter
     */
    /* istanbul ignore next */
    public changeLocale(): void { return; };

    /**
     * Gets the visible text in the editor.
     */
    /* istanbul ignore next */
    public displayValue(): string { return; };

    /**
     * Returns a reference to the clear button UI element of the editor.
     */
    /* istanbul ignore next */
    public clearButton(): string { return; };

    /**
     * Gets the selected text from the editor in edit mode. This can be done inside key event handlers, like keydown or keyup. This method can be used only when the editor is focused. If you invoke this method in display mode, when the editor input is blurred, the returned value will be an empty string.
     */
    /* istanbul ignore next */
    public getSelectedText(): string { return; };

    /**
     * Gets the start index of the selected text in the editor.
     */
    /* istanbul ignore next */
    public getSelectionStart(): number { return; };

    /**
     * Gets the end index of the selected text in the editor.
     */
    /* istanbul ignore next */
    public getSelectionEnd(): number { return; };

    /**
     * Inserts the text at the location of the caret or over the current selection. If the editor is focused the method will insert the text over the current selection. If the editor is not focused the method will set the text as value of the editor.
     * Note: The method raises [textChanged](ui.igtexteditor#events:textChanged) event.
     *
     * @param string The string to be inserted.
     */
    /* istanbul ignore next */
    public insert(string: string): void { return; };

    /**
     * Selects the text between start and end indices in the editor. If the parameters are equal, then the method sets location of caret. The method has effect only when the editor has focus.
     *
     * @param start Start of the selection.
     * @param end End of the selection.
     */
    /* istanbul ignore next */
    public select(start: number, end: number): void { return; };
}