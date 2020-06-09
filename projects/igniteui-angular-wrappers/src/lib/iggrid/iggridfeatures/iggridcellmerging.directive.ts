import { ElementRef, Directive } from '@angular/core';
import { Feature } from '../feature';

@Directive({
    selector: 'cell-merging',
    inputs: ['disabled', 'create', 'initialState', 'inherit'],
    outputs: ['cellsMerging', 'cellsMerged']
})
export class IgGridCellMergingFeature extends Feature<IgGridCellMerging> {
    constructor(el: ElementRef) {
        super(el);
    }
    /* istanbul ignore next */
    public destroy(): void { return; }
}
