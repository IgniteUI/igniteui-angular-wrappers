import { Component, ElementRef, IterableDiffers, KeyValueDiffers, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { IgControlBase } from '../igcontrolbase/igcontrolbase';

@Component({
    selector: 'ig-spreadsheet',
    template: '<ng-content></ng-content>',
    inputs: ['widgetId', 'options', 'changeDetectionInterval', 'disabled', 'create', 'width', 'height', 'activeCell', 'isScrollLocked', 'activeWorksheet', 'allowAddWorksheet', 'allowDeleteWorksheet', 'areGridlinesVisible', 'areHeadersVisible', 'enterKeyNavigationDirection', 'isEnterKeyNavigationEnabled', 'isFormulaBarVisible', 'isInEndMode', 'isUndoEnabled', 'nameBoxWidth', 'selectionMode', 'selectedWorksheets', 'validationInputMessagePosition', 'workbook', 'zoomLevel'],
    outputs: ['actionExecuted', 'actionExecuting', 'activeCellChanged', 'activePaneChanged', 'activeWorksheetChanged', 'editRangePasswordNeeded', 'hyperlinkExecuting', 'selectionChanged', 'userPromptDisplaying', 'workbookDirtied']
})
export class IgSpreadsheetComponent extends IgControlBase<IgSpreadsheet> {
    constructor(el: ElementRef, renderer: Renderer2, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef) {
        super(el, renderer, differs, kvalDiffers, cdr);
    }
    /**
     * Returns an object that represents the pane with the focus.
     */
    /* istanbul ignore next */
    public getActivePane(): object { return; }

    /**
     * Returns an object that represents the current selection of the active pane.
     */
    /* istanbul ignore next */
    public getActiveSelection(): object { return; }

    /*
     * Returns an object used to get the formatting of the activeCell and where modifications are applied to the entire active selection.
     * Any changes made to this object will affect all the objects in the selection. So for example, the
     * Font.Name may return "Arial" because the active cell has that as its resolved font name even though the other
     * cells are using a different font but if you set the Font.Name of this object to "Arial" then all the objects
     * affected by the selection will have their Font.Name updated to that value.
    */
    /* istanbul ignore next */
    public getActiveSelectionCellRangeFormat(): object { return; }

    /**
     * Returns a boolean indicating if the user is currently editing the name of the active worksheet.
     */
    /* istanbul ignore next */
    public getIsRenamingWorksheet(): boolean { return; }

    /*
     * Returns an array of the panes for the activeWorksheet.
     *
     *				 returnType="ig.spreadsheet.SpreadsheetPane[]"
    */
    /* istanbul ignore next */
    public getPanes(): void { return; }

    /**
     * Executes the action associated with the specified id.
     *
     * @param action An [enumeration](ig.spreadsheet.SpreadsheetAction) or string that identifies the action to execute.
     */
    /* istanbul ignore next */
    public executeAction(action: object): boolean { return; }

    /**
     * Forces any pending deferred work to render on the spreadsheet before continuing
     */
    /* istanbul ignore next */
    public flush(): void { return; }

    /**
     * Destroys the widget.
     */
    /* istanbul ignore next */
    public destroy(): void { return; }

    /**
     * Notify the spreadsheet that style information used for rendering the spreadsheet may have been updated.
     */
    /* istanbul ignore next */
    public styleUpdated(): void { return; }
}
