import { ElementRef, Directive } from "@angular/core";
import { Feature } from "../feature";

@Directive({
    selector: 'sorting',
    inputs: ["disabled", "create", "type", "caseSensitive", "applySortedColumnCss", "sortUrlKey", "sortUrlKeyAscValue", "sortUrlKeyDescValue", "mode", "customSortFunction", "firstSortDirection", "sortedColumnTooltip", "modalDialogSortOnClick", "modalDialogSortByButtonText", "modalDialogResetButtonLabel", "modalDialogCaptionButtonDesc", "modalDialogCaptionButtonAsc", "modalDialogCaptionButtonUnsort", "modalDialogWidth", "modalDialogHeight", "modalDialogAnimationDuration", "featureChooserText", "unsortedColumnTooltip", "columnSettings", "modalDialogCaptionText", "modalDialogButtonApplyText", "modalDialogButtonCancelText", "featureChooserSortAsc", "featureChooserSortDesc", "persist", "sortingDialogContainment", "dialogWidget", "inherit"],
    outputs: ["columnSorting", "columnSorted", "modalDialogOpening", "modalDialogOpened", "modalDialogMoving", "modalDialogClosing", "modalDialogClosed", "modalDialogContentsRendering", "modalDialogContentsRendered", "modalDialogSortingChanged", "modalDialogButtonUnsortClick", "modalDialogSortClick", "modalDialogButtonApplyClick", "modalDialogButtonResetClick"]
})
export class IgGridSortingFeature extends Feature<IgGridSorting> {
    constructor(el: ElementRef) {
        super(el);
    }

    /**
     * Sorts the data in a grid column  and updates the UI.
     *
     * @param index     Column key (string) or index (number) - for multi-row grid only column key can be used. Specifies the column which we want to sort. If the mode is multiple, previous sorting states are not cleared.
     * @param direction     Specifies sorting direction (ascending or descending)
     * @param header     
     */
    /* istanbul ignore next */
    public sortColumn(index: Object, direction: Object, header: Object): void { return; };

    /**
     * Sorts the data in grid columns and updates the UI.\
     */
    /* istanbul ignore next */
    public sortMultiple(): void { return; };

    /**
     * Removes current sorting(for all sorted columns) and updates the UI.
     */
    /* istanbul ignore next */
    public clearSorting(): void { return; };

    /**
     * Removes sorting for the grid column with the specified columnKey/columnIndex and updates the UI.
     *
     * @param index     Column key (string) or index (number) - for multi-row grid only column key can be used. Specifies the column for which we want to remove sorting. If the mode is multiple, previous sorting states are not cleared.
     * @param header     - if specified client events should be fired
     */
    /* istanbul ignore next */
    public unsortColumn(index: Object, header: Object): void { return; };

    /**
     * Destroys the sorting feature. Unbinds events, removes added sorting elements, etc.
     */
    /* istanbul ignore next */
    public destroy(): void { return; };

    /**
     * Opens the multiple sorting dialog.
     */
    /* istanbul ignore next */
    public openMultipleSortingDialog(): void { return; };

    /**
     * Closes the multiple sorting dialog.
     */
    /* istanbul ignore next */
    public closeMultipleSortingDialog(): void { return; };

    /**
     * Renders content of multiple sorting dialog - sorted and unsorted columns.
     *
     * @param isToCallEvents 
     */
    /* istanbul ignore next */
    public renderMultipleSortingDialogContent(isToCallEvents: Object): void { return; };

    /**
     * Remove clear button for multiple sorting dialog
     */
    /* istanbul ignore next */
    public removeDialogClearButton(): void { return; };
}