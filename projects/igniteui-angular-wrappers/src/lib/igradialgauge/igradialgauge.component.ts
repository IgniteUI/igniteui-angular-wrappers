import { Component, ElementRef, IterableDiffers, KeyValueDiffers, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { IgControlBase } from '../igcontrolbase/igcontrolbase';

@Component({
    selector: 'ig-radial-gauge',
    template: '<ng-content></ng-content>',
    inputs: ['widgetId', 'options', 'changeDetectionInterval', 'disabled', 'create', 'width', 'height', 'ranges', 'rangeBrushes', 'rangeOutlines', 'minimumValue', 'maximumValue', 'interval', 'centerX', 'centerY', 'value', 'scaleStartAngle', 'scaleEndAngle', 'scaleSweepDirection', 'transitionDuration', 'transitionEasingFunction', 'needleBrush', 'needleOutline', 'needleStartExtent', 'needleEndExtent', 'needleShape', 'needleStartWidthRatio', 'needleEndWidthRatio', 'needleBaseFeatureWidthRatio', 'needleBaseFeatureExtent', 'needlePointFeatureWidthRatio', 'needlePointFeatureExtent', 'needlePivotWidthRatio', 'needlePivotInnerWidthRatio', 'needlePivotShape', 'scaleStartExtent', 'needlePivotBrush', 'needlePivotOutline', 'needleStrokeThickness', 'needlePivotStrokeThickness', 'scaleEndExtent', 'labelExtent', 'labelInterval', 'tickStartExtent', 'tickEndExtent', 'tickStrokeThickness', 'tickBrush', 'fontBrush', 'minorTickStartExtent', 'minorTickEndExtent', 'minorTickStrokeThickness', 'minorTickBrush', 'minorTickCount', 'scaleBrush', 'backingBrush', 'backingOutline', 'backingStrokeThickness', 'backingOuterExtent', 'backingOversweep', 'scaleOversweep', 'scaleOversweepShape', 'backingCornerRadius', 'backingInnerExtent', 'backingShape', 'radiusMultiplier', 'duplicateLabelOmissionStrategy', 'isNeedleDraggingEnabled', 'isNeedleDraggingConstrained', 'font', 'transitionProgress', 'pixelScalingRatio'],
    outputs: ['formatLabel', 'alignLabel', 'valueChanged'],
    standalone: false
})
export class IgRadialGaugeComponent extends IgControlBase<IgRadialGauge> {
    constructor(el: ElementRef, renderer: Renderer2, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef) {
      super(el, renderer, differs, kvalDiffers, cdr);
    }

    /**
     * Returns a string containing the names of all the ranges delimited with a \n symbol.
     */
    /* istanbul ignore next */
    public getRangeNames(): string { return; }

    /**
     * Adds a new range to the radial gauge.
     *
     * @param value value
     */
    /* istanbul ignore next */
    public addRange(value: object): void { return; }

    /**
     * Removes a specified range.
     *
     * @param value value
     */
    /* istanbul ignore next */
    public removeRange(value: object): void { return; }

    /**
     * Updates the range.
     *
     * @param value value
     */
    /* istanbul ignore next */
    public updateRange(value: object): void { return; }

    /**
     * Clears the ranges in the radial gauge.
     */
    /* istanbul ignore next */
    public clearRanges(): void { return; }

    /**
     * Scales a value on the gauge's main scale to an angle around the center point of the gauge, in radians.
     *
     * @param value value
     */
    /* istanbul ignore next */
    public scaleValue(value: object): void { return; }

    /**
     * Unscales a value from an angle in radians to the represented value along the main scale of the gauge.
     *
     * @param value value
     */
    /* istanbul ignore next */
    public unscaleValue(value: object): void { return; }

    /**
     * Gets the value for the main scale of the gauge for a given point within the bounds of the gauge.
     *
     * @param x x-coordinate
     * @param y y-coordinate
     */
    /* istanbul ignore next */
    public getValueForPoint(x: object, y: object): number { return; }

    /**
     * Gets the point on the gauge for a given scale value and extent.
     *
     * @param value value
     * @param extent extent
     */
    /* istanbul ignore next */
    public getPointForValue(value: object, extent: object): void { return; }

    /**
     * Returns true if the main gauge needle bounding box contains the point provided, otherwise false.
     *
     * @param x x-coordinate
     * @param y y-coordinate
     */
    /* istanbul ignore next */
    public needleContainsPoint(x: object, y: object): void { return; }

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
