import { Component, Renderer, IterableDiffers, ElementRef, KeyValueDiffers, ChangeDetectorRef } from "@angular/core";
import { IgControlBase } from "../igcontrolbase/igcontrolbase";

declare var jQuery: any;

@Component({
	selector: "ig-validator",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","onchange","onblur","onsubmit","required","number","date","email","lengthRange","valueRange","creditCard","pattern","messageTarget","errorMessage","successMessage","threshold","equalTo","custom","fields","notificationOptions","requiredIndication","optionalIndication"],
	outputs: ["validating","validated","success","error","errorShowing","errorHiding","errorShown","errorHidden","successShowing","successHiding","successShown","successHidden","formValidating","formValidated","formError","formSuccess"]
})
export class IgValidatorComponent extends IgControlBase<IgValidator> {
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef) { 
		super(el, renderer, differs, kvalDiffers, cdr);
	}

	ngOnInit() {
		var evtName;
		this._el = jQuery(document).find("#" + this.widgetId);
		jQuery(this._el)[this._widgetName](this.options);
		this._events = new Map<string, string>();
		//events binding
		let that = this;
		for (var propt in jQuery.ui[this._widgetName].prototype.events) {
			evtName = this._widgetName.toLowerCase() + propt.toLowerCase();
			this._events[evtName] = propt;
			jQuery(this._el).on(evtName, function (evt, ui) {
				that[that._events[evt.type]].emit({ event: evt, ui: ui });
			});
		}
	}

	/**
 	 * Trigger validation and show errors for invalid fields.
	 *
	 * @param field    Optional field object, its selector or zero-based index to check. Only has effect with fields collection and skips other fields.
	 */
	public validate(field?: Object): boolean { return; } ;

	/**
 	 * Trigger validation but do not display error messages.
	 *
	 * @param field    Optional field object, its selector or zero-based index to check. Only has effect with fields collection and skips other fields.
	 */
	public isValid(field?: Object): boolean { return; } ;

	/**
 	 * Hide any possible message(s) (either messageTarget or igNotifier).
	 * 			Note: When the validator has a fields colleciton, not passing a field will hide messages on all fields.
	 *
	 * @param field    Optional field object, its selector or zero-based index to hide message for.
	 */
	public hide(field?: Object): void { return; } ;

	/**
 	 * Gets all current error messages for invalid field(s). Note that this method does not valdiate and states and messages are only updated on validation, so
	 * 			this can be used on formValidated event or after validate/isValid method calls.
	 *
	 * @param field    Optional field object, selector or zero-based index for a single field to get error message for.
	 */
	public getErrorMessages(field?: Object): any[] { return; } ;

	/**
 	 * Check for currently displayed message(s). Takes an optional field.
	 * 			Note: When the validator has a fields colleciton, not passing a field will return a cumulative true even if just one field has a visible message.
	 *
	 * @param field    Optional field object, selector or zero-based index for a single field to get error message for.
	 */
	public isMessageDisplayed(field?: Object): boolean { return; } ;

	/**
 	 * Gets the notifier for the igValidator or for a single filed.
	 *
	 * @param field    Optional field object, its selector or zero-based index to get notifier for.
	 */
	public notifier(field?: Object): Object { return; } ;

	/**
 	 * Adds an new input to the fields collection and initializes it with the validator. Note: Additional fields are only accepted if the validator has been created with the collection.
	 *
	 * @param field    An object with the field selector and options.
	 */
	public addField(field: Object): void { return; } ;

	/**
 	 * Removes an input from the fields collection.
	 *
	 * @param field    The field object to remove, its zero-based index or selector.
	 */
	public removeField(field: Object): void { return; } ;

	/**
 	 * Updates a field in the validator collection. Used to reinitialize field in case a control has been created after the validator or to pass in new options.
	 *
	 * @param field    The field object to update, its zero-based index or selector.
	 * @param fieldOptions    New options to apply to the field.
	 */
	public updateField(field: Object, fieldOptions?: Object): void { return; } ;

	/**
 	 * Destroys the validator widget.
	 */
	public destroy(): void { return; } ;
}