import { Directive, ElementRef } from '@angular/core';
import { Feature } from '../feature';

@Directive({
    selector: 'column-moving',
    inputs: ['disabled', 'create', 'columnSettings', 'mode', 'moveType', 'addMovingDropdown', 'movingDialogWidth', 'movingDialogHeight', 'movingDialogAnimationDuration', 'movingAcceptanceTolerance', 'movingScrollTolerance', 'scrollSpeedMultiplier', 'scrollDelta', 'hideHeaderContentsDuringDrag', 'dragHelperOpacity', 'movingDialogCaptionButtonDesc', 'movingDialogCaptionButtonAsc', 'movingDialogCaptionText', 'movingDialogDisplayText', 'movingDialogDropTooltipText', 'movingDialogDropTooltipMarkup', 'dropDownMoveLeftText', 'dropDownMoveRightText', 'dropDownMoveFirstText', 'dropDownMoveLastText', 'movingToolTipMove', 'featureChooserSubmenuText', 'columnMovingDialogContainment', 'dialogWidget', 'inherit'],
    outputs: ['columnDragStart', 'columnDragEnd', 'columnDragCanceled', 'columnMoving', 'columnMoved', 'movingDialogOpening', 'movingDialogOpened', 'movingDialogDragged', 'movingDialogClosing', 'movingDialogClosed', 'movingDialogContentsRendering', 'movingDialogContentsRendered', 'movingDialogMoveUpButtonPressed', 'movingDialogMoveDownButtonPressed', 'movingDialogDragColumnMoving', 'movingDialogDragColumnMoved'],
    standalone: false
})
export class IgGridColumnMovingFeature extends Feature<IgGridColumnMoving> {
    constructor(el: ElementRef) {
        super(el);
    }

    /**
     * Restoring overwritten functions
     */
    /* istanbul ignore next */
    public destroy(): void { return; }

    /**
     * Moves a visible column at a specified place, in front or behind a target column or at a target index
     * Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel.
     * This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
     *
     * @param column    An identifier of the column to be moved.
     * It can be a key, a Multi-Column Header identificator, or an index in a number format.
     * The latter is not supported when the grid contains multi-column headers.
     * @param target An identifier of a column where the moved column should move to or an index at which the moved column should
     * be moved to. In the case of a column identifier the column will be moved after it by default.
     * @param after    Specifies whether the column moved should be moved after or before the target column.
     * @param inDom    Specifies whether the column moving will be enacted through DOM manipulation or through rerendering of the grid.
     * @param callback    Specifies a custom function to be called when the column is moved.
     */
    /* istanbul ignore next */
    public moveColumn(column: object, target: object, after?: boolean, inDom?: boolean, callback?: () => void): void { return; }
}
