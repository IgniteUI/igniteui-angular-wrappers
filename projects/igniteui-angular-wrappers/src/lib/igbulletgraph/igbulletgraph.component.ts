import { Component, IterableDiffers, ElementRef, KeyValueDiffers, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { IgControlBase } from '../igcontrolbase/igcontrolbase';


@Component({
    selector: 'ig-bullet-graph',
    template: '<ng-content></ng-content>',
    inputs: ['widgetId', 'options', 'changeDetectionInterval', 'disabled', 'create', 'width', 'height', 'ranges', 'rangeToolTipTemplate', 'valueToolTipTemplate', 'targetValueToolTipTemplate', 'orientation', 'rangeBrushes', 'rangeOutlines', 'minimumValue', 'maximumValue', 'targetValue', 'targetValueName', 'value', 'valueName', 'rangeInnerExtent', 'rangeOuterExtent', 'valueInnerExtent', 'valueOuterExtent', 'interval', 'ticksPostInitial', 'ticksPreTerminal', 'labelInterval', 'labelExtent', 'labelsPostInitial', 'labelsPreTerminal', 'minorTickCount', 'tickStartExtent', 'tickEndExtent', 'tickStrokeThickness', 'tickBrush', 'fontBrush', 'valueBrush', 'valueOutline', 'valueStrokeThickness', 'minorTickStartExtent', 'minorTickEndExtent', 'minorTickStrokeThickness', 'minorTickBrush', 'isScaleInverted', 'backingBrush', 'backingOutline', 'backingStrokeThickness', 'backingInnerExtent', 'backingOuterExtent', 'scaleStartExtent', 'scaleEndExtent', 'targetValueBrush', 'targetValueBreadth', 'targetValueInnerExtent', 'targetValueOuterExtent', 'targetValueOutline', 'targetValueStrokeThickness', 'transitionDuration', 'showToolTipTimeout', 'showToolTip', 'font', 'pixelScalingRatio'],
    outputs: ['formatLabel', 'alignLabel'],
    standalone: false
})
export class IgBulletGraphComponent extends IgControlBase<IgBulletGraph> {
    constructor(el: ElementRef, renderer: Renderer2, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef) {
      super(el, renderer, differs, kvalDiffers, cdr);
    }


    /**
     * Returns a string containing the names of all the ranges delimited with a \n symbol.
     */
    /* istanbul ignore next */
    public getRangeNames(): void { return; }

    /**
     * Adds a new range to the bullet graph.
     *
     * @param value     The range object to be added.
     */
    /* istanbul ignore next */
    public addRange(value: object): void { return; }

    /**
     * Removes a range from the bullet graph.
     *
     * @param value     A JS object with properties set as follows: name: nameOfTheRangeToRemove, remove: true
     */
    /* istanbul ignore next */
    public removeRange(value: object): void { return; }

    /**
     * Updates the specified range of the bullet graph.
     *
     * @param value     The range object to be updated.
     */
    /* istanbul ignore next */
    public updateRange(value: object): void { return; }

    /**
     * Returns information about how the bullet graph is rendered.
     */
    /* istanbul ignore next */
    public exportVisualData(): object { return; }

    /**
     * Causes all pending changes of the bullet graph e.g. by changed property values to be rendered immediately.
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
