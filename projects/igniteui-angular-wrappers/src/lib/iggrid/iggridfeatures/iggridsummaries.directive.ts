import { ElementRef, Directive } from '@angular/core';
import { Feature } from '../feature';


@Directive({
    selector: 'summaries',
    inputs: ['disabled', 'create', 'type', 'dialogButtonOKText', 'dialogButtonCancelText', 'calculateRenderMode', 'featureChooserText', 'featureChooserTextHide', 'compactRenderingMode', 'defaultDecimalDisplay', 'showSummariesButton', 'summariesResponseKey', 'summaryExprUrlKey', 'callee', 'dropDownHeight', 'dropDownWidth', 'showDropDownButton', 'summaryExecution', 'dropDownDialogAnimationDuration', 'emptyCellText', 'summariesHeaderButtonTooltip', 'resultTemplate', 'isGridFormatter', 'renderSummaryCellFunc', 'columnSettings', 'inherit'],
    outputs: ['dropDownOpening', 'dropDownOpened', 'dropDownClosing', 'dropDownClosed', 'summariesCalculating', 'summariesCalculated', 'summariesMethodSelectionChanged', 'summariesToggling', 'summariesToggled', 'dropDownOKClicked', 'dropDownCancelClicked']
})
export class IgGridSummariesFeature extends Feature<IgGridSummaries> {
    constructor(el: ElementRef) {
        super(el);
    }
    /* istanbul ignore next */
    public destroy(): void { return; }

    /**
     * Returns whether summaries rows are hidden
     */
    /* istanbul ignore next */
    public isSummariesRowsHidden(): void { return; }

    /**
     * Calculate summaries
     */
    /* istanbul ignore next */
    public calculateSummaries(): void { return; }

    /**
     * Remove all summaries dropdown buttons.
     */
    /* istanbul ignore next */
    public clearAllFooterIcons(): void { return; }

    /**
     * Toggle drop down
     *
     * @param columnKey    toggle drop down for the column with the specified key
     * @param event    event object. Its data should contain current columnKey, isAnimating, buttonId
     */
    /* istanbul ignore next */
    public toggleDropDown(columnKey: string, event: object): void { return; }

    /**
     * Show/Hide dialog
     *
     * @param $dialog     jQuery object representation of dropdown div element
     */
    /* istanbul ignore next */
    public showHideDialog($dialog: object): void { return; }

    /**
     * Toggle summaries rows
     *
     * @param isToShow    Specifies whether to show or not summaries
     * @param isInternalCall    Optional parameter.Specifies whether this function is called internally by the widget.
     */
    /* istanbul ignore next */
    public toggleSummariesRows(isToShow: boolean, isInternalCall: boolean): void { return; }

    /**
     * Toggles the checkstate of a checkbox if checkboxMode is not set to off, otherwise does nothing.
     *
     * @param $checkbox     Specifies the jQuery object of the checkbox.
     */
    /* istanbul ignore next */
    public toggleCheckstate($checkbox: object): void { return; }

    /**
     * Select/Unselect specified checkbox
     *
     * @param $checkbox     Specifies the jQuery object for checkbox
     * @param isToSelect     Specify whether to select or not checkbox
     */
    /* istanbul ignore next */
    public selectCheckBox($checkbox: object, isToSelect: boolean): void { return; }

    /**
     * Summary calculate the whole data for the specified column key,
     * columnMethods and dataType (used when datasource is remote and dataType is date)
     *
     * @param ck    ColumnKey
     * @param columnMethods    Array of column methods objects
     * @param data    object which represents result represents dataType for the current column
     * @param dataType data type
     */
    /* istanbul ignore next */
    public calculateSummaryColumn(ck: string, columnMethods: any[], data: object, dataType: object): void { return; }

    /**
     * Return a JQUERY object which holds all summaries for all columns
     */
    /* istanbul ignore next */
    public summaryCollection(): void { return; }

    /**
     * Return a JQUERY object which holds all summaries for column with the specified column key
     *
     * @param columnKey column key
     */
    /* istanbul ignore next */
    public summariesFor(columnKey: object): void { return; }
}
