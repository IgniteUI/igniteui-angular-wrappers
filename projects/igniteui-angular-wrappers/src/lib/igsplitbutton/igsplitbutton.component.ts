import { ElementRef, IterableDiffers, Component, KeyValueDiffers, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { IgControlBase } from '../igcontrolbase/igcontrolbase';

@Component({
    selector: 'ig-split-button',
    template: '<ng-content></ng-content>',
    inputs: ['widgetId', 'options', 'changeDetectionInterval', 'disabled', 'create', 'items', 'defaultItemName', 'swapDefaultEnabled'],
    outputs: ['click', 'expanded', 'expanding', 'collapsed', 'collapsing'],
    standalone: false
})
export class IgSplitButtonComponent extends IgControlBase<IgSplitButton> {
    constructor(el: ElementRef, renderer: Renderer2, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef) {
      super(el, renderer, differs, kvalDiffers, cdr);
    }


    /**
     * Switch to given igToolbar button.
     *
     * @param button . The button jQuery element.
     */
    /* istanbul ignore next */
    public switchToButton(button: object): void { return; }


    /**
     * Toggle widget state between collapsed and expanded.
     *
     * @param e The igSplitButton to be expanded/collapsed.
     */
    /* istanbul ignore next */
    public toggle(e: object): object { return; }


    /**
     * Collapse the widget.
     *
     * @param e Indicates the browser event which triggered this action (not API).
     */
    /* istanbul ignore next */
    public collapse(e?: object): object { return; }


    /**
     * Expands the widget.
     *
     * @param e Indicates the browser event which triggered this action (not API).
     */
    /* istanbul ignore next */
    public expand(e?: object): object { return; }

    /**
     * Destroy the widget.
     */
    /* istanbul ignore next */
    public destroy(): void { return; }
    /* istanbul ignore next */
    public widget(): void { return; }
}
