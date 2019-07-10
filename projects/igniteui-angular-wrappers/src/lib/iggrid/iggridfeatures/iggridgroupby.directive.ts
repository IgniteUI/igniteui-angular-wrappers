import { ElementRef, Directive } from "@angular/core";
import { Feature } from "../feature";

@Directive({
    selector: 'group-by',
    inputs: ["disabled", "create", "groupByAreaVisibility", "initialExpand", "emptyGroupByAreaContent", "emptyGroupByAreaContentSelectColumns", "expansionIndicatorVisibility", "groupByLabelWidth", "labelDragHelperOpacity", "indentation", "defaultSortingDirection", "groupedColumns", "resultResponseKey", "groupedRowTextTemplate", "type", "groupByUrlKey", "groupByUrlKeyAscValue", "groupByUrlKeyDescValue", "summarySettings", "columnSettings", "expandTooltip", "collapseTooltip", "removeButtonTooltip", "modalDialogGroupByOnClick", "modalDialogGroupByButtonText", "modalDialogCaptionButtonDesc", "modalDialogCaptionButtonAsc", "modalDialogCaptionButtonUngroup", "modalDialogCaptionText", "modalDialogDropDownLabel", "modalDialogRootLevelHierarchicalGrid", "modalDialogDropDownButtonCaption", "modalDialogClearAllButtonLabel", "emptyGroupByAreaContentSelectColumnsCaption", "modalDialogDropDownWidth", "modalDialogDropDownAreaWidth", "modalDialogAnimationDuration", "modalDialogWidth", "modalDialogHeight", "modalDialogButtonApplyText", "modalDialogButtonCancelText", "useGridColumnFormatter", "persist", "groupByDialogContainment", "dialogWidget", "inherit"],
    outputs: ["groupedColumnsChanging", "groupedColumnsChanged", "modalDialogMoving", "modalDialogClosing", "modalDialogClosed", "modalDialogOpening", "modalDialogOpened", "modalDialogContentsRendering", "modalDialogContentsRendered", "modalDialogButtonApplyClick", "modalDialogButtonResetClick", "modalDialogGroupingColumn", "modalDialogGroupColumn", "modalDialogUngroupingColumn", "modalDialogUngroupColumn", "modalDialogSortGroupedColumn"]
})
export class IgGridGroupByFeature extends Feature<IgGridGroupBy> {
    constructor(el: ElementRef) {
        super(el);
    }

    /**
     * Open groupby modal dialog
     */
    /* istanbul ignore next */
    public openGroupByDialog(): void { return; };

    /**
     * Close groupby modal dialog
     */
    /* istanbul ignore next */
    public closeGroupByDialog(): void { return; };

    /**
     * Render groupby modal dialog and its content
     */
    /* istanbul ignore next */
    public renderGroupByModalDialog(): void { return; };

    /**
     * Open layouts dropdown
     */
    /* istanbul ignore next */
    public openDropDown(): void { return; };

    /**
     * Close layouts dropdown
     */
    /* istanbul ignore next */
    public closeDropDown(): void { return; };

    /**
     * Check whether column with specified key and layout is grouped
     *
     * @param key    key of the column
     * @param layout    layout name
     */
    /* istanbul ignore next */
    public checkColumnIsGrouped(key: string, layout: string): void { return; };

    /**
     * Get grouped data by value for the specific column. NOTE: Before calling this function the data(that is passed as an argument) should be sorted by colKey.
     *
     * @param data    data (sorted by colKey) that is used to get the records from.
     * @param colKey    key of the column for which grouping will be applied.
     * @param idval    value of the column by which grouping will be applied.
     */
    /* istanbul ignore next */
    public getGroupedData(data: any[], colKey: string, idval?: string): any[] { return; };

    /**
     * Adds a column to the group by columns list, executes the group by operation and updates the view.
     */
    /* istanbul ignore next */
    public groupByColumns(): Object { return; };

    /**
     * Groups by a column
     *
     * @param key    Column Key - group by the column with the specified key
     * @param layout    layout is an optional parameter. if set it means the grouped column is not in the root level but is a child layout column
     * @param sortingDirection    if not set it is taken from option defaultSortingDirection
     */
    /* istanbul ignore next */
    public groupByColumn(key: string, layout?: string, sortingDirection?: Object): void { return; };

    /**
     * Removes the specified column from the group by columns list, executes the group by operation and updates the view.
     *
     * @param key    Column Key - ungroup by the column with the specified key
     * @param layout    Layout is an optional parameter. If set it means the grouped column is not in the root level but is a child layout column.
     */
    /* istanbul ignore next */
    public ungroupByColumn(key: string, layout?: string): void { return; };

    /**
     * Expand group row with specified id
     *
     * @param rowId    data-id attribute of the group row in the DOM
     */
    /* istanbul ignore next */
    public expand(rowId: string): void { return; };

    /**
     * Expand group row with specified id
     *
     * @param rowId    data-id attribute of the group row in the DOM
     */
    /* istanbul ignore next */
    public collapse(rowId: string): void { return; };

    /**
     * Clears the group by columns list and updates the view.
     */
    /* istanbul ignore next */
    public ungroupAll(): void { return; };

    /**
     * Destroys the group by feature object.
     */
    /* istanbul ignore next */
    public destroy(): void { return; };
}