import { Component, IterableDiffers, ElementRef, KeyValueDiffers, ChangeDetectorRef, Renderer2, OnInit } from '@angular/core';
import { IgControlBase } from '../igcontrolbase/igcontrolbase';

declare var jQuery: any;

@Component({
    selector: 'ig-validator',
    template: '<ng-content></ng-content>',
    inputs: [
        'widgetId',
        'options',
        'changeDetectionInterval',
        'disabled',
        'create',
        'onchange',
        'onblur',
        'onsubmit',
        'required',
        'number',
        'date',
        'email',
        'lengthRange',
        'valueRange',
        'creditCard',
        'pattern',
        'messageTarget',
        'errorMessage',
        'successMessage',
        'threshold',
        'equalTo',
        'custom',
        'fields',
        'notificationOptions',
        'requiredIndication',
        'optionalIndication'
    ],
    outputs: [
        'validating',
        'validated',
        'success',
        'error',
        'errorShowing',
        'errorHiding',
        'errorShown',
        'errorHidden',
        'successShowing',
        'successHiding',
        'successShown',
        'successHidden',
        'formValidating',
        'formValidated',
        'formError',
        'formSuccess'
    ],
    standalone: false
})
export class IgValidatorComponent extends IgControlBase<IgValidator> implements OnInit {
    constructor(el: ElementRef, renderer: Renderer2, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef) {
        super(el, renderer, differs, kvalDiffers, cdr);
    }

    ngOnInit() {
        let evtName;
        this._el = jQuery(document).find('#' + this.widgetId);
        jQuery(this._el)[this._widgetName](this.options);
        this._events = new Map<string, string>();

        for (const propt in jQuery.ui[this._widgetName].prototype.events) {
          if (jQuery.ui[this._widgetName].prototype.events.hasOwnProperty(prompt)) {
            evtName = this._widgetName.toLowerCase() + propt.toLowerCase();
            this._events[evtName] = propt;
            jQuery(this._el).on(evtName, (evt, ui) => {
                this[this._events[evt.type]].emit({ event: evt, ui });
            });
          }
        }
    }

    /**
     * Trigger validation and show errors for invalid fields.
     *
     * @param field    Optional field object, its selector or zero-based index to check.
     *  Only has effect with fields collection and skips other fields.
     */
    /* istanbul ignore next */
    public validate(field?: object): boolean { return; }

    /**
     * Trigger validation but do not display error messages.
     *
     * @param field    Optional field object, its selector or zero-based index to check.
     * Only has effect with fields collection and skips other fields.
     */
    /* istanbul ignore next */
    public isValid(field?: object): boolean { return; }

    /**
     * Hide any possible message(s) (either messageTarget or igNotifier).
     * 			Note: When the validator has a fields colleciton, not passing a field will hide messages on all fields.
     *
     * @param field    Optional field object, its selector or zero-based index to hide message for.
     */
    /* istanbul ignore next */
    public hide(field?: object): void { return; }

    /**
     * Gets all current error messages for invalid field(s).
     * Note that this method does not valdiate and states and messages are only updated on validation, so
     * this can be used on formValidated event or after validate/isValid method calls.
     *
     * @param field    Optional field object, selector or zero-based index for a single field to get error message for.
     */
    /* istanbul ignore next */
    public getErrorMessages(field?: object): any[] { return; }

    /**
     * Check for currently displayed message(s). Takes an optional field.
     * 			Note: When the validator has a fields colleciton, not passing a
     *      field will return a cumulative true even if just one field has a visible message.
     *
     * @param field    Optional field object, selector or zero-based index for a single field to get error message for.
     */
    /* istanbul ignore next */
    public isMessageDisplayed(field?: object): boolean { return; }

    /**
     * Gets the notifier for the igValidator or for a single filed.
     *
     * @param field    Optional field object, its selector or zero-based index to get notifier for.
     */
    /* istanbul ignore next */
    public notifier(field?: object): object { return; }

    /**
     * Adds an new input to the fields collection and initializes it with the validator.
     * Note: Additional fields are only accepted if the validator has been created with the collection.
     *
     * @param field    An object with the field selector and options.
     */
    /* istanbul ignore next */
    public addField(field: object): void { return; }

    /**
     * Removes an input from the fields collection.
     *
     * @param field    The field object to remove, its zero-based index or selector.
     */
    /* istanbul ignore next */
    public removeField(field: object): void { return; }

    /**
     * Updates a field in the validator collection.
     * Used to reinitialize field in case a control has been created after the validator or to pass in new options.
     *
     * @param field    The field object to update, its zero-based index or selector.
     * @param fieldOptions    New options to apply to the field.
     */
    /* istanbul ignore next */
    public updateField(field: object, fieldOptions?: object): void { return; }

    /**
     * Destroys the validator widget.
     */
    /* istanbul ignore next */
    public destroy(): void { return; }
}
