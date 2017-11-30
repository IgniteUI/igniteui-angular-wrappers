import { ElementRef, Directive } from "@angular/core";
import { Feature } from "../feature";


@Directive({
	selector: 'summaries',
	inputs: ["disabled","create","type","dialogButtonOKText","dialogButtonCancelText","calculateRenderMode","featureChooserText","featureChooserTextHide","compactRenderingMode","defaultDecimalDisplay","showSummariesButton","summariesResponseKey","summaryExprUrlKey","callee","dropDownHeight","dropDownWidth","showDropDownButton","summaryExecution","dropDownDialogAnimationDuration","emptyCellText","summariesHeaderButtonTooltip","resultTemplate","isGridFormatter","renderSummaryCellFunc","columnSettings","inherit"],
	outputs: ["dropDownOpening","dropDownOpened","dropDownClosing","dropDownClosed","summariesCalculating","summariesCalculated","summariesMethodSelectionChanged","summariesToggling","summariesToggled","dropDownOKClicked","dropDownCancelClicked"]
})
export class IgGridSummariesFeature extends Feature<IgGridSummaries> {	
	constructor(el: ElementRef) {
		super(el);
	}
	public destroy(): void { return; } ;

	/**
	 * Returns whether summaries rows are hidden
	 */
	public isSummariesRowsHidden(): void { return; } ;

	/**
	 * Calculate summaries
	 */
	public calculateSummaries(): void { return; } ;

	/**
	 * Remove all summaries dropdown buttons.
	 */
	public clearAllFooterIcons(): void { return; } ;

	/**
	 * Toggle drop down
	 *
	 * @param columnKey    toggle drop down for the column with the specified key
	 * @param event    event object. Its data should contain current columnKey, isAnimating, buttonId
	 */
	public toggleDropDown(columnKey: string, event: Object): void { return; } ;

	/**
	 * Show/Hide dialog
	 *
	 * @param $dialog     jQuery object representation of dropdown div element
	 */
	public showHideDialog($dialog: Object): void { return; } ;

	/**
	 * Toggle summaries rows
	 *
	 * @param isToShow    Specifies whether to show or not summaries
	 * @param isInternalCall    Optional parameter.Specifies whether this function is called internally by the widget.
	 */
	public toggleSummariesRows(isToShow: boolean, isInternalCall: boolean): void { return; } ;

	/**
	 * Toggles the checkstate of a checkbox if checkboxMode is not set to off, otherwise does nothing.
	 *
	 * @param $checkbox     Specifies the jQuery object of the checkbox.
	 */
	public toggleCheckstate($checkbox: Object): void { return; } ;

	/**
	 * Select/Unselect specified checkbox
	 *
	 * @param $checkbox     Specifies the jQuery object for checkbox
	 * @param isToSelect     Specify whether to select or not checkbox
	 */
	public selectCheckBox($checkbox: Object, isToSelect: boolean): void { return; } ;

	/**
	 * Summary calculate the whole data for the specified column key, columnMethods and dataType (used when datasource is remote and dataType is date)
	 *
	 * @param ck    ColumnKey
	 * @param columnMethods    Array of column methods objects
	 * @param data    Object which represents result
  represents dataType for the current column
	 * @param dataType 
	 */
	public calculateSummaryColumn(ck: string, columnMethods: any[], data: Object, dataType: Object): void { return; } ;

	/**
	 * Return a JQUERY object which holds all summaries for all columns
	 */
	public summaryCollection(): void { return; } ;

	/**
	 * Return a JQUERY object which holds all summaries for column with the specified column key
	 *
	 * @param columnKey 
	 */
	public summariesFor(columnKey: Object): void { return; } ;
}