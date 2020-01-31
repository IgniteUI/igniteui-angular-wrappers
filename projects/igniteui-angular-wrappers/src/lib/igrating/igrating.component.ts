import { Component, ElementRef, IterableDiffers, KeyValueDiffers, ChangeDetectorRef, Renderer2 } from "@angular/core";
import { IgControlBase } from "../igcontrolbase/igcontrolbase";

@Component({
    selector: "ig-rating",
    template: "<ng-content></ng-content>",
    inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","vertical","value","valueHover","voteCount","voteWidth","voteHeight","swapDirection","valueAsPercent","focusable","precision","precisionZeroVote","roundedDecimalPlaces","theme","validatorOptions","cssVotes"],
    outputs: ["hoverChange","valueChange"]
})
export class IgRatingComponent extends IgControlBase<IgRating> { 
    constructor(el: ElementRef, renderer: Renderer2, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef) { 
        super(el, renderer, differs, kvalDiffers, cdr);
    }	

    /**
     * Gets reference to [igValidator](ui.igvalidator) used by igRating.
     *
     * @param destroy     Request to destroy validator.
     */
    /* istanbul ignore next */
    public validator(destroy?: boolean): Object { return; } ;

    /**
     * Triggers validation.
     */
    /* istanbul ignore next */
    public validate(): boolean { return; } ;

    /**
     * Gets/Sets (selected) value.
     *
     * @param val     New value which is rendered with selected css.
     * @return number|object     If parameter is not 'number', then exact value rendered with selected css is returned. Otherwise, reference to igRating is returned.
     */
    /* istanbul ignore next */
    public value(val: number): number|Object { return; } ;

    /**
     * Gets/Sets hover value.
     *
     * @param val     New value which will be rendered with hover css when rating gets mouse.
     * @return number|object     If parameter is not "number", then last value which was rendered with hover css is returned. Otherwise, reference to igRating is returned.
     */
    /* istanbul ignore next */
    public valueHover(val?: number): number|Object { return; } ;

    /**
     * Checks if igRating has focus.
     */
    /* istanbul ignore next */
    public hasFocus(): boolean { return; } ;

    /**
     * Sets focus to igRating. That has effect only when options.focusable is enabled.
     */
    /* istanbul ignore next */
    public focus(): Object { return; } ;

    /**
     * Destroys igRating widget.
     */
    /* istanbul ignore next */
    public destroy(): Object { return; } ;
}