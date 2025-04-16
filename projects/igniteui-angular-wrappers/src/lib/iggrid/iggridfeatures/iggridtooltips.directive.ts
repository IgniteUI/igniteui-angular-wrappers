import { Feature } from '../feature';
import { ElementRef, Directive } from '@angular/core';

@Directive({
    selector: 'tooltips',
    inputs: ['disabled', 'create', 'visibility', 'style', 'showDelay', 'hideDelay', 'columnSettings', 'fadeTimespan', 'cursorLeftOffset', 'cursorTopOffset', 'inherit'],
    outputs: ['tooltipShowing', 'tooltipShown', 'tooltipHiding', 'tooltipHidden'],
    standalone: false
})
export class IgGridTooltipsFeature extends Feature<IgGridTooltips> {
    constructor(el: ElementRef) {
        super(el);
    }

    /**
     * Destroys the tooltip widget.
     */
    /* istanbul ignore next */
    public destroy(): void { return; }

    /**
     * Returns the ID of the parent div element bounding the ruler and the tooltip container
     */
    /* istanbul ignore next */
    public id(): string { return; }
}
