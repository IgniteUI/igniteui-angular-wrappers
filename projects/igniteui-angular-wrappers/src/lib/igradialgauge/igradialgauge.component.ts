import { Component, ElementRef, IterableDiffers, KeyValueDiffers, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { IgControlBase } from '../igcontrolbase/igcontrolbase';

@Component({
    selector: 'ig-radial-gauge',
    template: '<ng-content></ng-content>',
    inputs: ['widgetId', 'options', 'changeDetectionInterval', 'disabled', 'create', 'width', 'height', 'ranges', 'rangeBrushes', 'rangeOutlines', 'minimumValue', 'maximumValue', 'interval', 'centerX', 'centerY', 'value', 'scaleStartAngle', 'scaleEndAngle', 'scaleSweepDirection', 'transitionDuration', 'transitionEasingFunction', 'needleBrush', 'needleOutline', 'needleStartExtent', 'needleEndExtent', 'needleShape', 'needleStartWidthRatio', 'needleEndWidthRatio', 'needleBaseFeatureWidthRatio', 'needleBaseFeatureExtent', 'needlePointFeatureWidthRatio', 'needlePointFeatureExtent', 'needlePivotWidthRatio', 'needlePivotInnerWidthRatio', 'needlePivotShape', 'scaleStartExtent', 'needlePivotBrush', 'needlePivotOutline', 'needleStrokeThickness', 'needlePivotStrokeThickness', 'scaleEndExtent', 'labelExtent', 'labelInterval', 'tickStartExtent', 'tickEndExtent', 'tickStrokeThickness', 'tickBrush', 'fontBrush', 'minorTickStartExtent', 'minorTickEndExtent', 'minorTickStrokeThickness', 'minorTickBrush', 'minorTickCount', 'scaleBrush', 'backingBrush', 'backingOutline', 'backingStrokeThickness', 'backingOuterExtent', 'backingOversweep', 'scaleOversweep', 'scaleOversweepShape', 'backingCornerRadius', 'backingInnerExtent', 'backingShape', 'radiusMultiplier', 'duplicateLabelOmissionStrategy', 'isNeedleDraggingEnabled', 'isNeedleDraggingConstrained', 'font', 'transitionProgress', 'pixelScalingRatio'],
    outputs: ['formatLabel', 'alignLabel', 'valueChanged']
})
export class IgRadialGaugeComponent extends IgControlBase<IgRadialGauge> {
    constructor(el: ElementRef, renderer: Renderer2, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef) { super(el, renderer, differs, kvalDiffers, cdr); }

    /**
     * Returns a string containing the names of all the ranges delimited with a \n symbol.
     */
    /* istanbul ignore next */
    public getRangeNames(): string { return; }

    /**
     * Adds a new range to the radial gauge.
     *
     * @param value
     */
    /* istanbul ignore next */
    public addRange(value: Object): void { return; }

    /**
     * Removes a specified range.
     *
     * @param value
     */
    /* istanbul ignore next */
    public removeRange(value: Object): void { return; }

    /**
     * Updates the range.
     *
     * @param value
     */
    /* istanbul ignore next */
    public updateRange(value: Object): void { return; }

    /**
     * Clears the ranges in the radial gauge.
     */
    /* istanbul ignore next */
    public clearRanges(): void { return; }

    /**
     * Scales a value on the gauge's main scale to an angle around the center point of the gauge, in radians.
     *
     * @param value
     */
    /* istanbul ignore next */
    public scaleValue(value: Object): void { return; }

    /**
     * Unscales a value from an angle in radians to the represented value along the main scale of the gauge.
     *
     * @param value
     */
    /* istanbul ignore next */
    public unscaleValue(value: Object): void { return; }

    /**
     * Gets the value for the main scale of the gauge for a given point within the bounds of the gauge.
     *
     * @param x
     * @param y
     */
    /* istanbul ignore next */
    public getValueForPoint(x: Object, y: Object): number { return; }

    /**
     * Gets the point on the gauge for a given scale value and extent.
     *
     * @param value
     * @param extent
     */
    /* istanbul ignore next */
    public getPointForValue(value: Object, extent: Object): void { return; }

    /**
     * Returns true if the main gauge needle bounding box contains the point provided, otherwise false.
     *
     * @param x
     * @param y
     */
    /* istanbul ignore next */
    public needleContainsPoint(x: Object, y: Object): void { return; }

    /**
     * Exports the visual data for the radial gauge.
     */
    /* istanbul ignore next */
    public exportVisualData(): void { return; }

    /**
     * Flushes the gauge.
     */
    /* istanbul ignore next */
    public flush(): void { return; }

    /**
     * Destroys widget.
     */
    /* istanbul ignore next */
    public destroy(): void { return; }

    /**
     * Returns true if the style was updated for the radial gauge.
     */
    /* istanbul ignore next */
    public styleUpdated(): void { return; }
}
