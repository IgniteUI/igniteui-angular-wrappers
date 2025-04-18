import { ElementRef, Directive } from '@angular/core';
import { Feature } from '../feature';

@Directive({
    selector: 'row-selectors',
    inputs: ['disabled', 'create', 'enableRowNumbering', 'enableCheckBoxes', 'rowNumberingSeed', 'rowSelectorColumnWidth', 'requireSelection', 'showCheckBoxesOnFocus', 'inherit', 'enableSelectAllForPaging', 'selectAllForPagingTemplate', 'deselectAllForPagingTemplate'],
    outputs: ['rowSelectorClicked', 'checkBoxStateChanging', 'checkBoxStateChanged'],
    standalone: false
})
export class IgGridRowSelectorsFeature extends Feature<IgGridRowSelectors> {
    constructor(el: ElementRef) {
        super(el);
    }
    /* istanbul ignore next */
    public destroy(): void { return; }
}
