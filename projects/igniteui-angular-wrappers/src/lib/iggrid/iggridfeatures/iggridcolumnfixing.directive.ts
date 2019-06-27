import { ElementRef, Directive } from "@angular/core";
import { Feature } from "../feature";


@Directive({
	selector: 'column-fixing',
	inputs: ["disabled","create","headerFixButtonText","headerUnfixButtonText","showFixButtons","syncRowHeights","scrollDelta","fixingDirection","columnSettings","featureChooserTextFixedColumn","featureChooserTextUnfixedColumn","minimalVisibleAreaWidth","fixNondataColumns","populateDataRowsAttributes"],
	outputs: ["columnFixing","columnFixed","columnUnfixing","columnUnfixed","columnFixingRefused","columnUnfixingRefused"]
})
export class IgGridColumnFixingFeature extends Feature<IgGridColumnFixing> {	
	constructor(el: ElementRef) {
		super(el);
	}

	/**
	 * Unfixes a column by specified column identifier - column key or column index.
	 *
	 * @param colIdentifier    An identifier of the column to be unfixed - column index or column key.
	 * @param target    Key of the column where the unfixed column should move to.
	 * @param after    Specifies where the unfixed column should be rendered after or before the target column. This parameter is disregarded if there is no target column specified.
	 */
	public unfixColumn(colIdentifier: Object, target?: string, after?: boolean): Object { return; } ;

	/**
	 * Checks whether the heights of fixed and unfixed tables are equal - if not sync them. Similar check is made for heights of table rows.
	 */
	public checkAndSyncHeights(): void { return; } ;

	/**
	 * If the 'check' argument is set to true, checks whether the heights of fixed and unfixed tables are equal, if not sync them. Similar check is made for heights of table rows. If the clearRowsHeights argument is set to true, clears rows heights before syncing them.
	 *
	 * @param check    If set to true, checks whether the heights of fixed and unfixed tables are equal, if not sync them. If this argument is set to false sync is performed regardless of the current heights.
	 * @param clearRowsHeights    Clears row heigths for all visible rows.
	 */
	public syncHeights(check?: boolean, clearRowsHeights?: boolean): void { return; } ;

	/**
	 * Returns whether the column with the specified key is a column group header, when the [multi-column headers](http://www.igniteui.com/help/iggrid-multicolumnheaders-landingpage) feature is used.
	 *
	 * @param colKey    The key of the column to perform the check for.
	 */
	public isGroupHeader(colKey: string): boolean { return; } ;

	/**
	 * Checks whether column fixing is allowed for the specified columns. It should not be allowed if there is only one visible column in the unfixed area.
	 *
	 * @param columns    Array of columns and/or column identifiers - could be column indexes, column keys, column object or mixed.
	 */
	public checkFixingAllowed(columns: any[]): boolean { return; } ;

	/**
	 * Checks whether unfixing is allowed for the specified columns. It should not be allowed if there is only one visible column in the fixed area.
	 *
	 * @param columns    Array of columns and/or column identifiers - could be column indexes, column keys, column object or mixed.
	 */
	public checkUnfixingAllowed(columns: any[]): boolean { return; } ;

	/**
	 * Fixes non-data columns (such as the row numbering column of row selectors) if any and if [fixingDirection](ui.iggridcolumnfixing#options:fixingDirection) is left. Does nothing if the non-data columns are already fixed.
	 */
	public fixNonDataColumns(): void { return; } ;

	/**
	 * This function is deprecated - use function fixNonDataColumns.
	 */
	public fixDataSkippedColumns(): void { return; } ;

	/**
	 * Unfixes non-data columns (such as the row numbering column of row selectors) if any and if [fixingDirection](ui.iggridcolumnfixing#options:fixingDirection) is left. Does nothing if the non-data columns are already fixed.
	 */
	public unfixNonDataColumns(): void { return; } ;

	/**
	 * This function is deprecated - use function unfixNonDataColumns.
	 */
	public unfixDataSkippedColumns(): void { return; } ;

	/**
	 * Unfixes all fixed columns.
	 */
	public unfixAllColumns(): void { return; } ;

	/**
	 * Syncs rows heights between two collections of rows.
	 *
	 * @param $trs    An array of rows of the first(fixed/unfixed) container.
	 * @param $anotherRows    An array of rows of the second(fixed/unfixed) container.
	 */
	public syncRowsHeights($trs: any[], $anotherRows: any[]): void { return; } ;

	/**
	 * Calculates widths of the fixed columns.
	 *
	 * @param fCols    Array of grid columns. If not set then the total width of the fixed columns are returned.
	 * @param excludeNonDataColumns    If set to true do not calculate the width of non-data fixed columns (like the row selector row numbering column).
	 * @param includeHidden    If set to true calculates width of the hidden fixed columns (their initial width before hiding).
	 */
	public getWidthOfFixedColumns(fCols?: any[], excludeNonDataColumns?: boolean, includeHidden?: boolean): number { return; } ;

	/**
	 * Destroys the column fixing widget
	 */
	public destroy(): void { return; } ;
}