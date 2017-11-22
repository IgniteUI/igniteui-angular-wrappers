import { ElementRef, Directive } from "@angular/core";
import { Feature } from "../feature";

@Directive({
	selector: 'hiding',
	inputs: ["disabled","create","columnSettings","hiddenColumnIndicatorHeaderWidth","columnChooserContainment","columnChooserWidth","columnChooserHeight","dropDownAnimationDuration","columnChooserCaptionText","columnChooserDisplayText","hiddenColumnIndicatorTooltipText","columnHideText","columnChooserShowText","columnChooserHideText","columnChooserHideOnClick","columnChooserResetButtonLabel","columnChooserAnimationDuration","columnChooserButtonApplyText","columnChooserButtonCancelText","dialogWidget","inherit"],
	outputs: ["columnHiding","columnHidingRefused","columnShowingRefused","multiColumnHiding","columnHidden","columnShowing","columnShown","columnChooserOpening","columnChooserOpened","columnChooserMoving","columnChooserClosing","columnChooserClosed","columnChooserContentsRendering","columnChooserContentsRendered","columnChooserButtonApplyClick","columnChooserButtonResetClick"]
})
export class IgGridHidingFeature extends Feature<IgGridHiding> {	
	constructor(el: ElementRef) {
		super(el);
	}

	/**
	 * Destroys the hiding widget
	 */
	public destroy(): void { return; } ;

	/**
	 * Shows the Column Chooser dialog. If it is visible the method does nothing.
	 */
	public showColumnChooser(): void { return; } ;

	/**
	 * Hides the Column Chooser dialog. If it is not visible the method does nothing.
	 */
	public hideColumnChooser(): void { return; } ;

	/**
	 * Shows a hidden column. If the column is not hidden the method does nothing.
	 * 			Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
	 *
	 * @param column    An identifier for the column. If a number is provided it will be used as a column index else if a strings is provided it will be used as a column key.
	 * @param isMultiColumnHeader    If it is true then the column is of type multicolumnheader. An identifier for the column should be of type string.
	 * @param callback    Specifies a custom function to be called when the column(s) is shown(optional)
	 */
	public showColumn(column: Object, isMultiColumnHeader?: boolean, callback?: Function): void { return; } ;

	/**
	 * Hides a visible column. If the column is hidden the method does nothing.
	 * 			Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
	 *
	 * @param column    An identifier for the column. If a number is provided it will be used as a column index else if a strings is provided it will be used as a column key.
	 * @param isMultiColumnHeader    If it is true then the column is of type multicolumnheader. An identifier for the column should be of type string.
	 * @param callback    Specifies a custom function to be called when the column is hidden(optional)
	 */
	public hideColumn(column: Object, isMultiColumnHeader?: boolean, callback?: Function): void { return; } ;

	/**
	 * Hides visible columns specified by the array. If the column is hidden the method does nothing.
	 * 			Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
	 *
	 * @param columns    An array of identifiers for the columns. If a number is provided it will be used as a column index else if a strings is provided it will be used as a column key.
	 * @param callback    Specifies a custom function to be called when all columns are hidden(optional)
	 */
	public hideMultiColumns(columns: any[], callback?: Function): void { return; } ;

	/**
	 * Show visible columns specified by the array. If the column is shown the method does nothing.
	 * 			Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
	 *
	 * @param columns    An array of identifiers for the columns. If a number is provided it will be used as a column index else if a strings is provided it will be used as a column key.
	 * @param callback    Specifies a custom function to be called when all columns are shown(optional)
	 */
	public showMultiColumns(columns: any[], callback?: Function): void { return; } ;

	/**
	 * Gets whether the reset button in the column chooser dialog is to be rendered or not.
	 */
	public isToRenderButtonReset(): void { return; } ;

	/**
	 * Reset hidden/shown column to initial state of dialog(when it is opened)
	 */
	public resetHidingColumnChooser(): void { return; } ;

	/**
	 * Renders the Reset button in the Column Chooser dialog.
	 */
	public renderColumnChooserResetButton(): void { return; } ;

	/**
	 * Remove Reset button in column chooser modal dialog
	 */
	public removeColumnChooserResetButton(): void { return; } ;
}