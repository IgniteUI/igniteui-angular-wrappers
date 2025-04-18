import { Component, ElementRef, IterableDiffers, KeyValueDiffers, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { IgControlBase } from '../igcontrolbase/igcontrolbase';

@Component({
    selector: 'ig-linear-gauge',
    template: '<ng-content></ng-content>',
    inputs: ['widgetId', 'options', 'changeDetectionInterval', 'disabled', 'create', 'width', 'height', 'ranges', 'rangeToolTipTemplate', 'needleToolTipTemplate', 'orientation', 'rangeBrushes', 'rangeOutlines', 'minimumValue', 'maximumValue', 'value', 'needleShape', 'needleName', 'rangeInnerExtent', 'scaleInnerExtent', 'rangeOuterExtent', 'scaleOuterExtent', 'needleInnerExtent', 'needleOuterExtent', 'needleInnerBaseWidth', 'needleOuterBaseWidth', 'needleInnerPointWidth', 'needleOuterPointWidth', 'needleInnerPointExtent', 'needleOuterPointExtent', 'interval', 'ticksPostInitial', 'ticksPreTerminal', 'labelInterval', 'labelExtent', 'labelsPostInitial', 'labelsPreTerminal', 'minorTickCount', 'tickStartExtent', 'tickEndExtent', 'tickStrokeThickness', 'tickBrush', 'fontBrush', 'needleBreadth', 'needleBrush', 'needleOutline', 'needleStrokeThickness', 'minorTickStartExtent', 'minorTickEndExtent', 'minorTickStrokeThickness', 'minorTickBrush', 'isScaleInverted', 'backingBrush', 'backingOutline', 'backingStrokeThickness', 'backingInnerExtent', 'backingOuterExtent', 'scaleStartExtent', 'scaleEndExtent', 'scaleBrush', 'scaleOutline', 'scaleStrokeThickness', 'isNeedleDraggingEnabled', 'transitionDuration', 'showToolTipTimeout', 'showToolTip', 'font', 'pixelScalingRatio'],
    outputs: ['formatLabel', 'alignLabel', 'valueChanged'],
    standalone: false
})
export class IgLinearGaugeComponent extends IgControlBase<IgLinearGauge> {
    constructor(el: ElementRef, renderer: Renderer2, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef) {
      super(el, renderer, differs, kvalDiffers, cdr);
    }

    /**
     * Returns a string containing the names of all the ranges delimited with a \n symbol.
     */
    /* istanbul ignore next */
    public getRangeNames(): string { return; }

    /**
     * Adds a new range to the linear gauge.
     *
     * @param value     The range object to be added.
     */
    /* istanbul ignore next */
    public addRange(value: object): void { return; }

    /**
     * Removes a range from the linear gauge.
     *
     * @param value     A JS object with properties set as follows: name: nameOfTheRangeToRemove, remove: true
     */
    /* istanbul ignore next */
    public removeRange(value: object): void { return; }

    /**
     * Updates the specified range of the linear gauge.
     *
     * @param value     The range object to be updated.
     */
    /* istanbul ignore next */
    public updateRange(value: object): void { return; }

    /**
     * Gets the value for the main scale of the gauge for a given point within the bounds of the gauge.
     *
     * @param x x-coordinate
     * @param y y-coordiante
     */
    /* istanbul ignore next */
    public getValueForPoint(x: object, y: object): number { return; }

    /**
     * Returns true if the main gauge needle bounding box contains the point provided, otherwise false.
     *
     * @param x The x coordinate of the point.
     * @param y The y coordinate of the point.
     */
    /* istanbul ignore next */
    public needleContainsPoint(x: number, y: number): void { return; }

    /**
     * Returns information about how the linear gauge is rendered.
     */
    /* istanbul ignore next */
    public exportVisualData(): object { return; }

    /**
     * Causes all pending changes of the linear gauge e.g. by changed property values to be rendered immediately.
     */
    /* istanbul ignore next */
    public flush(): void { return; }

    /**
     * Destroys widget.
     */
    /* istanbul ignore next */
    public destroy(): void { return; }

    /**
     * Re-polls the css styles for the widget. Use this method when the css styles have been modified.
     */
    /* istanbul ignore next */
    public styleUpdated(): void { return; }
}
