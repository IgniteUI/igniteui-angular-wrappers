import { ElementRef, Directive } from "@angular/core";
import { Feature } from "../feature";

@Directive({
    selector: 'resizing',
    inputs: ["disabled", "create", "allowDoubleClickToResize", "deferredResizing", "columnSettings", "handleThreshold", "inherit"],
    outputs: ["columnResizing", "columnResizingRefused", "columnResized"]
})
export class IgGridResizingFeature extends Feature<IgGridResizing> {
    constructor(el: ElementRef) {
        super(el);
    }

    /**
     * Destroys the resizing widget
     */
    /* istanbul ignore next */
    public destroy(): void { return; };

    /**
     * Resizes a column to a specified width in pixels, percents or auto if no width is specified.
     *
     * @param column    An identifier for the column. If a number is provided it will be used as a columnIndex else if a strings is provided it will be used as a columnKey.
     * @param width    Width of the column in pixels or percents. If no width or "*" is specified the column will be auto-sized to the width of the data in it (including header and footer cells).
     */
    /* istanbul ignore next */
    public resize(column: Object, width?: Object): void { return; };
}