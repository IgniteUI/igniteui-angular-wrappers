import { ElementRef, Directive } from '@angular/core';
import { Feature } from '../feature';

@Directive({
    selector: 'filtering',
    inputs: ['disabled', 'create', 'caseSensitive', 'filterSummaryAlwaysVisible', 'renderFC', 'filterSummaryTemplate', 'filterDropDownAnimations', 'filterDropDownAnimationDuration', 'filterDropDownWidth', 'filterDropDownHeight', 'filterExprUrlKey', 'filterDropDownItemIcons', 'columnSettings', 'type', 'filterDelay', 'mode', 'advancedModeEditorsVisible', 'advancedModeHeaderButtonLocation', 'filterDialogWidth', 'filterDialogHeight', 'filterDialogFilterDropDownDefaultWidth', 'filterDialogExprInputDefaultWidth', 'filterDialogColumnDropDownDefaultWidth', 'renderFilterButton', 'filterButtonLocation', 'nullTexts', 'labels', 'tooltipTemplate', 'filterDialogAddConditionTemplate', 'filterDialogAddConditionDropDownTemplate', 'filterDialogFilterTemplate', 'filterDialogFilterConditionTemplate', 'filterDialogAddButtonWidth', 'filterDialogOkCancelButtonWidth', 'filterDialogMaxFilterCount', 'filterDialogContainment', 'showEmptyConditions', 'showNullConditions', 'featureChooserText', 'featureChooserTextHide', 'featureChooserTextAdvancedFilter', 'dialogWidget', 'persist', 'inherit'],
    outputs: ['dataFiltering', 'dataFiltered', 'dropDownOpening', 'dropDownOpened', 'dropDownClosing', 'dropDownClosed', 'filterDialogOpening', 'filterDialogOpened', 'filterDialogMoving', 'filterDialogFilterAdding', 'filterDialogFilterAdded', 'filterDialogClosing', 'filterDialogClosed', 'filterDialogContentsRendering', 'filterDialogContentsRendered', 'filterDialogFiltering']
})
export class IgGridFilteringFeature extends Feature<IgGridFiltering> {
    constructor(el: ElementRef) {
        super(el);
    }

    /**
     * Destroys the filtering widget - remove fitler row, unbinds events, returns the grid to its previous state.
     */
    /* istanbul ignore next */
    public destroy(): void { return; }

    /**
     * Returns the count of data records that match filtering conditions
     */
    /* istanbul ignore next */
    public getFilteringMatchesCount(): number { return; }

    /**
     * Toggle filter row when mode is simple or [advancedModeEditorsVisible](ui.iggridfiltering#options:advancedModeEditorsVisible) is true. Otherwise show/hide advanced dialog.
     *
     * @param event     Column key
     */
    /* istanbul ignore next */
    public toggleFilterRowByFeatureChooser(event: string): void { return; }

    /**
     * Applies filtering programmatically and updates the UI by default.
     *
     * @param expressions     An array of filtering expressions, each one having the format {fieldName: , expr: , cond: , logic: } where  fieldName is the key of the column, expr is the actual expression string with which we would like to filter, logic is 'AND' or 'OR', and cond is one of the following strings: "equals", "doesNotEqual", "contains", "doesNotContain", "greaterThan", "lessThan", "greaterThanOrEqualTo", "lessThanOrEqualTo", "true", "false", "null", "notNull", "empty", "notEmpty", "startsWith", "endsWith", "today", "yesterday", "on", "notOn", "thisMonth", "lastMonth", "nextMonth", "before", "after", "thisYear", "lastYear", "nextYear". The difference between the empty and null filtering conditions is that empty includes null, NaN, and undefined, as well as the empty string.
     * @param updateUI     specifies whether the filter row should be also updated once the grid is filtered
     * @param addedFromAdvanced
     */
    /* istanbul ignore next */
    public filter(expressions: any[], updateUI?: boolean, addedFromAdvanced?: boolean): void { return; }

    /**
     * Check whether filterCondition requires or not filtering expression - e.g. if filterCondition is "lastMonth", "thisMonth", "null", "notNull", "true", "false", etc. then filtering expression is NOT required
     *
     * @param filterCondition    filtering condition - e.g. "true", "false",  "yesterday", "empty", "null", etc.
     */
    /* istanbul ignore next */
    public requiresFilteringExpression(filterCondition: string): boolean { return; }
}
