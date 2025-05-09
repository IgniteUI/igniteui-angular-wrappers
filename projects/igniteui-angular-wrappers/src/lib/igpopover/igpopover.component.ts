import { Component, ElementRef, IterableDiffers, KeyValueDiffers, ChangeDetectorRef, Renderer2, OnInit } from '@angular/core';
import { IgControlBase } from '../igcontrolbase/igcontrolbase';

declare var jQuery: any;

@Component({
    selector: 'ig-popover',
    template: '<ng-content></ng-content>',
    inputs: ['widgetId', 'options', 'changeDetectionInterval', 'disabled', 'create', 'closeOnBlur', 'direction', 'position', 'width', 'height', 'minWidth', 'maxWidth', 'maxHeight', 'animationDuration', 'contentTemplate', 'selectors', 'headerTemplate', 'showOn', 'containment', 'appendTo'],
    outputs: ['showing', 'shown', 'hiding', 'hidden'],
    standalone: false
})
export class IgPopoverComponent extends IgControlBase<IgPopover> implements OnInit {
    constructor(el: ElementRef, renderer: Renderer2, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef) {
      super(el, renderer, differs, kvalDiffers, cdr);
    }
    public option(): void { return; }

    ngOnInit() {
        const elem = jQuery(document).find('#' + this.widgetId);
        if (elem.length === 1) {
            this._el = elem;
            this._events = new Map<string, string>();
            // events binding
            let evtName;
            for (const propt in jQuery.ui[this._widgetName].prototype.events) {
              if (jQuery.ui[this._widgetName].prototype.events.hasOwnProperty(propt)) {
                evtName = this._widgetName.toLowerCase() + propt.toLowerCase();
                this._events[evtName] = propt;
                jQuery(this._el).on(evtName, (evt, ui) => {
                    this[this._events[evt.type]].emit({ event: evt, ui });
                });
              }
            }

            jQuery(this._el)[this._widgetName](this.options);
        } else {
            super.ngOnInit();
        }

    }

    /**
     * Destroys the popover widget.
     */
    /* istanbul ignore next */
    public destroy(): void { return; }

    /**
     * Returns the ID of the element the popover is attached to
     */
    /* istanbul ignore next */
    public id(): string { return; }

    /**
     * Returns the container for the popover contents
     */
    /* istanbul ignore next */
    public container(): object { return; }

    /**
     * Shows the popover for the specified target
     *
     * @param trg     The element to show popover for.
     * @param content     The string to set for the popover to show.
     */
    /* istanbul ignore next */
    public show(trg?: Element, content?: string): void { return; }

    /**
     * Hides the popover for the specified target
     */
    /* istanbul ignore next */
    public hide(): void { return; }

    /**
     * Gets the currently set content for the popover container
     */
    /* istanbul ignore next */
    public getContent(): string { return; }

    /**
     * Sets the content for the popover container
     *
     * @param newCnt     The popover content to set.
     */
    /* istanbul ignore next */
    public setContent(newCnt: string): void { return; }

    /**
     * Gets the popover current target
     */
    /* istanbul ignore next */
    public target(): object { return; }

    /**
     * Gets the current coordinates of the popover
     */
    /* istanbul ignore next */
    public getCoordinates(): object { return; }

    /**
     * Sets the popover to specific coordinates.
     *
     * @param pos     The popover coordinates in pixels.
     */
    /* istanbul ignore next */
    public setCoordinates(pos: object): void { return; }
}
