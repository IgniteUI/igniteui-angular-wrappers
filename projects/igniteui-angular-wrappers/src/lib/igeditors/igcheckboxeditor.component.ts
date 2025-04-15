import { Component, ElementRef, IterableDiffers, Optional, KeyValueDiffers, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { IgEditorBase } from './igeditorbase';
import { NgModel } from '@angular/forms';

@Component({
    selector: 'ig-checkbox-editor',
    template: '<ng-content></ng-content>',
    inputs: ['widgetId', 'options', 'changeDetectionInterval', 'disabled', 'create', 'width', 'height', 'value', 'tabIndex', 'allowNullValue', 'nullValue', 'inputName', 'readOnly', 'validatorOptions', 'checked', 'size', 'iconClass'],
    outputs: ['rendering', 'rendered', 'mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout', 'blur', 'focus', 'keydown', 'keypress', 'keyup', 'valueChanging', 'valueChanged'],
    standalone: false
})
export class IgCheckboxEditorComponent extends IgEditorBase<IgCheckboxEditor> {
    constructor(el: ElementRef, renderer: Renderer2, differs: IterableDiffers, kvalDiffers: KeyValueDiffers,
                cdr: ChangeDetectorRef, @Optional() public model: NgModel) {
      super(el, renderer, differs, kvalDiffers, cdr, model);
    }

    /**
     * Checks if the value in the editor is valid. Note: This function will not trigger automatic notifications.
     */
    /* istanbul ignore next */
    public isValid(): boolean { return; }

    /**
     * Gets/Sets Current checked state/Value of the igCheckboxEditor that will be submitted by the HTML form.
     * 1. If the [value](ui.igcheckboxeditor#options:value) option IS NOT defined,
     * then 'value' method will match the checked state of the editor.
     * This option is used when the checkbox is intended to operate as a Boolean editor. In that case the return type is bool.
     * 2. If the [value](ui.igcheckboxeditor#options:value) option IS defined,
     * then 'value' method will return the value that will be submitted when the editor is checked and the form is submitted.
     * To get checked state regardless of the 'value' option, use $(".selector").igCheckboxEditor("option", "checked");
     *
     * @param newValue new value
     */
    /* istanbul ignore next */
    public value(newValue: object): string { return; }

    /**
     * Toggles the state of the checkbox.
     */
    /* istanbul ignore next */
    public toggle(): void { return; }

    /**
     * Gets/Sets name attribute applied to the editor element.
     *
     * @param newValue The new input name.
     */
    /* istanbul ignore next */
    public inputName(newValue?: string): string { return; }

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
