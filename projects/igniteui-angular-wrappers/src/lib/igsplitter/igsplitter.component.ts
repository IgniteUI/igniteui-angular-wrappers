import { ElementRef, IterableDiffers, Component, KeyValueDiffers, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { IgContentControlBase } from '../igcontrolbase/igcontentcontrolbase';

@Component({
    selector: 'ig-splitter',
    template: '<ng-content></ng-content>',
    inputs: [
      'widgetId',
      'options',
      'changeDetectionInterval',
      'disabled',
      'create',
      'width',
      'height',
      'orientation',
      'panels',
      'dragDelta',
      'resizeOtherSplitters'
    ],
    outputs: ['collapsed', 'expanded', 'resizeStarted', 'resizing', 'resizeEnded', 'layoutRefreshing', 'layoutRefreshed']
})
export class IgSplitterComponent extends IgContentControlBase<IgSplitter> {
    constructor(el: ElementRef, renderer: Renderer2, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef) {
      super(el, renderer, differs, kvalDiffers, cdr);
    }


    /**
     * Returns the element that represents this widget.
     */
    /* istanbul ignore next */
    public widget(): object { return; }


    /**
     * Expand the specified panel by index.
     *
     * @param index Specifies the index of the panel to expand.
     */
    /* istanbul ignore next */
    public expandAt(index: object): void { return; }


    /**
     * Collapse the specified panel.
     *
     * @param index Specifies the index of the panel to collapse.
     */
    /* istanbul ignore next */
    public collapseAt(index: object): void { return; }


    /**
     * Retrieves the jQuery element of the first panel.
     */
    /* istanbul ignore next */
    public firstPanel(): object { return; }


    /**
     * Retrieves the jQuery element of the second panel.
     */
    /* istanbul ignore next */
    public secondPanel(): object { return; }


    /**
     * Refresh splitter layout, use this method to re-render the splitter if some changes to the layout are applied.
     */
    /* istanbul ignore next */
    public refreshLayout(): void { return; }


    /**
     * You can set new size of the first panel after the splitter is rendered.
     *
     * @param size Specifies the new size of the first panel.
     */
    /* istanbul ignore next */
    public setFirstPanelSize(size: object): void { return; }


    /**
     * You can set new size of the second panel after the splitter is rendered.
     *
     * @param size Specifies the new size of the second panel.
     */
    /* istanbul ignore next */
    public setSecondPanelSize(size: object): void { return; }

    /**
     * Destroys the igSplitter widget
     */
    /* istanbul ignore next */
    public destroy(): void { return; }
}
