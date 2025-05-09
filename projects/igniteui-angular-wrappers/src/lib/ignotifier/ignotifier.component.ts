import { Component, ElementRef, IterableDiffers, KeyValueDiffers, ChangeDetectorRef, Renderer2, OnInit } from '@angular/core';
import { IgControlBase } from '../igcontrolbase/igcontrolbase';

declare var jQuery;

@Component({
    selector: 'ig-notifier',
    template: '<ng-content></ng-content>',
    inputs: ['widgetId', 'options', 'changeDetectionInterval', 'disabled', 'create', 'closeOnBlur', 'direction', 'position', 'width', 'height', 'minWidth', 'maxWidth', 'maxHeight', 'animationDuration', 'contentTemplate', 'selectors', 'headerTemplate', 'showOn', 'containment', 'appendTo', 'state', 'notifyLevel', 'mode', 'allowCSSOnTarget', 'messages', 'showIcon', 'animationSlideDistance'],
    outputs: ['showing', 'shown', 'hiding', 'hidden'],
    standalone: false
})
// TODO: change the model from any to IgNotifier when added to igniteui typescript definitions
export class IgNotifierComponent extends IgControlBase<IgNotifier> implements OnInit {
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
     * Triggers a notification with a certain state and optional message.
     * The [notifyLevel](ui.ignotifier#options:notifyLevel) option determines if the notification will be displayed.
     *
     * @param state    The state to show notification for.
     * @param message    Optional message to show, overrides defaults.
     */
    /* istanbul ignore next */
    public notify(state: object, message?: string): void { return; }

    /**
     * Returns true if the notification is currently visible
     */
    /* istanbul ignore next */
    public isVisible(): void { return; }

    /**
     * Destroys the widget.
     */
    /* istanbul ignore next */
    public destroy(): void { return; }
}
