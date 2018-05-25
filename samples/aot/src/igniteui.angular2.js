"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var column_directive_1 = require("./iggrid/column.directive");
exports.Column = column_directive_1.Column;
var iggridmulticolumnheaders_directive_1 = require("./iggrid/iggridfeatures/iggridmulticolumnheaders.directive");
exports.IgGridMultiColumnHeadersFeature = iggridmulticolumnheaders_directive_1.IgGridMultiColumnHeadersFeature;
var iggridsorting_directive_1 = require("./iggrid/iggridfeatures/iggridsorting.directive");
exports.IgGridSortingFeature = iggridsorting_directive_1.IgGridSortingFeature;
var iggridfiltering_directive_1 = require("./iggrid/iggridfeatures/iggridfiltering.directive");
exports.IgGridFilteringFeature = iggridfiltering_directive_1.IgGridFilteringFeature;
var iggridpaging_directive_1 = require("./iggrid/iggridfeatures/iggridpaging.directive");
exports.IgGridPagingFeature = iggridpaging_directive_1.IgGridPagingFeature;
var iggridupdating_directive_1 = require("./iggrid/iggridfeatures/iggridupdating.directive");
exports.IgGridUpdatingFeature = iggridupdating_directive_1.IgGridUpdatingFeature;
var iggridgroupby_directive_1 = require("./iggrid/iggridfeatures/iggridgroupby.directive");
exports.IgGridGroupByFeature = iggridgroupby_directive_1.IgGridGroupByFeature;
var iggridcolumnmoving_1 = require("./iggrid/iggridfeatures/iggridcolumnmoving");
exports.IgGridColumnMovingFeature = iggridcolumnmoving_1.IgGridColumnMovingFeature;
var iggridhiding_directive_1 = require("./iggrid/iggridfeatures/iggridhiding.directive");
exports.IgGridHidingFeature = iggridhiding_directive_1.IgGridHidingFeature;
var iggridcellmerging_directive_1 = require("./iggrid/iggridfeatures/iggridcellmerging.directive");
exports.IgGridCellMergingFeature = iggridcellmerging_directive_1.IgGridCellMergingFeature;
var iggridresponsive_directive_1 = require("./iggrid/iggridfeatures/iggridresponsive.directive");
exports.IgGridResponsiveFeature = iggridresponsive_directive_1.IgGridResponsiveFeature;
var iggridresizing_directive_1 = require("./iggrid/iggridfeatures/iggridresizing.directive");
exports.IgGridResizingFeature = iggridresizing_directive_1.IgGridResizingFeature;
var iggridselection_directive_1 = require("./iggrid/iggridfeatures/iggridselection.directive");
exports.IgGridSelectionFeature = iggridselection_directive_1.IgGridSelectionFeature;
var iggridrowselectors_directive_1 = require("./iggrid/iggridfeatures/iggridrowselectors.directive");
exports.IgGridRowSelectorsFeature = iggridrowselectors_directive_1.IgGridRowSelectorsFeature;
var iggridsummaries_directive_1 = require("./iggrid/iggridfeatures/iggridsummaries.directive");
exports.IgGridSummariesFeature = iggridsummaries_directive_1.IgGridSummariesFeature;
var iggridcolumnfixing_directive_1 = require("./iggrid/iggridfeatures/iggridcolumnfixing.directive");
exports.IgGridColumnFixingFeature = iggridcolumnfixing_directive_1.IgGridColumnFixingFeature;
var iggridtooltips_directive_1 = require("./iggrid/iggridfeatures/iggridtooltips.directive");
exports.IgGridTooltipsFeature = iggridtooltips_directive_1.IgGridTooltipsFeature;
var iggridappendrowsondemand_directive_1 = require("./iggrid/iggridfeatures/iggridappendrowsondemand.directive");
exports.IgGridAppendRowsOnDemandFeature = iggridappendrowsondemand_directive_1.IgGridAppendRowsOnDemandFeature;
var features_directive_1 = require("./iggrid/features.directive");
exports.Features = features_directive_1.Features;
var iggrid_component_1 = require("./iggrid/iggrid.component");
exports.IgGridComponent = iggrid_component_1.IgGridComponent;
var igtreegrid_component_1 = require("./igtreegrid/igtreegrid.component");
exports.IgTreeGridComponent = igtreegrid_component_1.IgTreeGridComponent;
var ighierarchicalgrid_component_1 = require("./ighierarchicalgrid/ighierarchicalgrid.component");
exports.IgHierarchicalGridComponent = ighierarchicalgrid_component_1.IgHierarchicalGridComponent;
var igcombo_component_1 = require("./igcombo/igcombo.component");
exports.IgComboComponent = igcombo_component_1.IgComboComponent;
var igcheckboxeditor_component_1 = require("./igeditors/igcheckboxeditor.component");
exports.IgCheckboxEditorComponent = igcheckboxeditor_component_1.IgCheckboxEditorComponent;
var igcurrencyeditor_component_1 = require("./igeditors/igcurrencyeditor.component");
exports.IgCurrencyEditorComponent = igcurrencyeditor_component_1.IgCurrencyEditorComponent;
var igdateeditor_component_1 = require("./igeditors/igdateeditor.component");
exports.IgDateEditorComponent = igdateeditor_component_1.IgDateEditorComponent;
var igdatepicker_component_1 = require("./igeditors/igdatepicker.component");
exports.IgDatePickerComponent = igdatepicker_component_1.IgDatePickerComponent;
var igmaskeditor_component_1 = require("./igeditors/igmaskeditor.component");
exports.IgMaskEditorComponent = igmaskeditor_component_1.IgMaskEditorComponent;
var ignumericeditor_component_1 = require("./igeditors/ignumericeditor.component");
exports.IgNumericEditorComponent = ignumericeditor_component_1.IgNumericEditorComponent;
var igpercenteditor_component_1 = require("./igeditors/igpercenteditor.component");
exports.IgPercentEditorComponent = igpercenteditor_component_1.IgPercentEditorComponent;
var igtexteditor_component_1 = require("./igeditors/igtexteditor.component");
exports.IgTextEditorComponent = igtexteditor_component_1.IgTextEditorComponent;
var igtree_component_1 = require("./igtree/igtree.component");
exports.IgTreeComponent = igtree_component_1.IgTreeComponent;
var igdialog_component_1 = require("./igdialog/igdialog.component");
exports.IgDialogComponent = igdialog_component_1.IgDialogComponent;
var igsplitter_component_1 = require("./igsplitter/igsplitter.component");
exports.IgSplitterComponent = igsplitter_component_1.IgSplitterComponent;
var iglayoutmanager_component_1 = require("./iglayoutmanager/iglayoutmanager.component");
exports.IgLayoutManagerComponent = iglayoutmanager_component_1.IgLayoutManagerComponent;
var igtilemanager_component_1 = require("./igtilemanager/igtilemanager.component");
exports.IgTileManagerComponent = igtilemanager_component_1.IgTileManagerComponent;
var ightmleditor_component_1 = require("./ightmleditor/ightmleditor.component");
exports.IgHtmlEditorComponent = ightmleditor_component_1.IgHtmlEditorComponent;
var igvalidator_component_1 = require("./igvalidator/igvalidator.component");
exports.IgValidatorComponent = igvalidator_component_1.IgValidatorComponent;
var igpivotdataselector_component_1 = require("./igpivotdataselector/igpivotdataselector.component");
exports.IgPivotDataSelectorComponent = igpivotdataselector_component_1.IgPivotDataSelectorComponent;
var igpivotgrid_component_1 = require("./igpivotgrid/igpivotgrid.component");
exports.IgPivotGridComponent = igpivotgrid_component_1.IgPivotGridComponent;
var igdatachart_component_1 = require("./igdatachart/igdatachart.component");
exports.IgDataChartComponent = igdatachart_component_1.IgDataChartComponent;
var igpiechart_component_1 = require("./igpiechart/igpiechart.component");
exports.IgPieChartComponent = igpiechart_component_1.IgPieChartComponent;
var igdoughnutchart_component_1 = require("./igdoughnutchart/igdoughnutchart.component");
exports.IgDoughnutChartComponent = igdoughnutchart_component_1.IgDoughnutChartComponent;
var igfunnelchart_component_1 = require("./igfunnelchart/igfunnelchart.component");
exports.IgFunnelChartComponent = igfunnelchart_component_1.IgFunnelChartComponent;
var igradialgauge_component_1 = require("./igradialgauge/igradialgauge.component");
exports.IgRadialGaugeComponent = igradialgauge_component_1.IgRadialGaugeComponent;
var igzoombar_component_1 = require("./igzoombar/igzoombar.component");
exports.IgZoombarComponent = igzoombar_component_1.IgZoombarComponent;
var igmap_component_1 = require("./igmap/igmap.component");
exports.IgMapComponent = igmap_component_1.IgMapComponent;
var igsparkline_component_1 = require("./igsparkline/igsparkline.component");
exports.IgSparklineComponent = igsparkline_component_1.IgSparklineComponent;
var igbulletgraph_component_1 = require("./igbulletgraph/igbulletgraph.component");
exports.IgBulletGraphComponent = igbulletgraph_component_1.IgBulletGraphComponent;
var iglineargauge_component_1 = require("./iglineargauge/iglineargauge.component");
exports.IgLinearGaugeComponent = iglineargauge_component_1.IgLinearGaugeComponent;
var igqrcodebarcode_component_1 = require("./igqrcodebarcode/igqrcodebarcode.component");
exports.IgQRCodeBarcodeComponent = igqrcodebarcode_component_1.IgQRCodeBarcodeComponent;
var igupload_component_1 = require("./igupload/igupload.component");
exports.IgUploadComponent = igupload_component_1.IgUploadComponent;
var igpopover_component_1 = require("./igpopover/igpopover.component");
exports.IgPopoverComponent = igpopover_component_1.IgPopoverComponent;
var ignotifier_component_1 = require("./ignotifier/ignotifier.component");
exports.IgNotifierComponent = ignotifier_component_1.IgNotifierComponent;
var igrating_component_1 = require("./igrating/igrating.component");
exports.IgRatingComponent = igrating_component_1.IgRatingComponent;
var igvideoplayer_component_1 = require("./igvideoplayer/igvideoplayer.component");
exports.IgVideoPlayerComponent = igvideoplayer_component_1.IgVideoPlayerComponent;
var igradialmenu_component_1 = require("./igradialmenu/igradialmenu.component");
exports.IgRadialMenuComponent = igradialmenu_component_1.IgRadialMenuComponent;
var igsplitbutton_component_1 = require("./igsplitbutton/igsplitbutton.component");
exports.IgSplitButtonComponent = igsplitbutton_component_1.IgSplitButtonComponent;
var igspreadsheet_component_1 = require("./igspreadsheet/igspreadsheet.component");
exports.IgSpreadsheetComponent = igspreadsheet_component_1.IgSpreadsheetComponent;
var igscheduler_component_1 = require("./igscheduler/igscheduler.component");
exports.IgSchedulerComponent = igscheduler_component_1.IgSchedulerComponent;
var IgniteUIModule = /** @class */ (function () {
    function IgniteUIModule() {
    }
    IgniteUIModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [column_directive_1.Column, iggridmulticolumnheaders_directive_1.IgGridMultiColumnHeadersFeature, iggridsorting_directive_1.IgGridSortingFeature, iggridfiltering_directive_1.IgGridFilteringFeature, iggridpaging_directive_1.IgGridPagingFeature, iggridupdating_directive_1.IgGridUpdatingFeature, iggridgroupby_directive_1.IgGridGroupByFeature, iggridcolumnmoving_1.IgGridColumnMovingFeature, iggridhiding_directive_1.IgGridHidingFeature, iggridcellmerging_directive_1.IgGridCellMergingFeature, iggridresponsive_directive_1.IgGridResponsiveFeature, iggridresizing_directive_1.IgGridResizingFeature, iggridselection_directive_1.IgGridSelectionFeature, iggridrowselectors_directive_1.IgGridRowSelectorsFeature, iggridsummaries_directive_1.IgGridSummariesFeature, iggridcolumnfixing_directive_1.IgGridColumnFixingFeature, iggridtooltips_directive_1.IgGridTooltipsFeature, iggridappendrowsondemand_directive_1.IgGridAppendRowsOnDemandFeature, features_directive_1.Features, iggrid_component_1.IgGridComponent, igtreegrid_component_1.IgTreeGridComponent, ighierarchicalgrid_component_1.IgHierarchicalGridComponent, igcombo_component_1.IgComboComponent, igcheckboxeditor_component_1.IgCheckboxEditorComponent, igcurrencyeditor_component_1.IgCurrencyEditorComponent, igdateeditor_component_1.IgDateEditorComponent, igdatepicker_component_1.IgDatePickerComponent, igmaskeditor_component_1.IgMaskEditorComponent, ignumericeditor_component_1.IgNumericEditorComponent, igpercenteditor_component_1.IgPercentEditorComponent, igtexteditor_component_1.IgTextEditorComponent, igtree_component_1.IgTreeComponent, igdialog_component_1.IgDialogComponent, igsplitter_component_1.IgSplitterComponent, iglayoutmanager_component_1.IgLayoutManagerComponent, igtilemanager_component_1.IgTileManagerComponent, ightmleditor_component_1.IgHtmlEditorComponent, igvalidator_component_1.IgValidatorComponent, igpivotdataselector_component_1.IgPivotDataSelectorComponent, igpivotgrid_component_1.IgPivotGridComponent, igdatachart_component_1.IgDataChartComponent, igpiechart_component_1.IgPieChartComponent, igdoughnutchart_component_1.IgDoughnutChartComponent, igfunnelchart_component_1.IgFunnelChartComponent, igradialgauge_component_1.IgRadialGaugeComponent, igzoombar_component_1.IgZoombarComponent, igmap_component_1.IgMapComponent, igsparkline_component_1.IgSparklineComponent, igbulletgraph_component_1.IgBulletGraphComponent, iglineargauge_component_1.IgLinearGaugeComponent, igqrcodebarcode_component_1.IgQRCodeBarcodeComponent, igupload_component_1.IgUploadComponent, igpopover_component_1.IgPopoverComponent, ignotifier_component_1.IgNotifierComponent, igrating_component_1.IgRatingComponent, igvideoplayer_component_1.IgVideoPlayerComponent, igradialmenu_component_1.IgRadialMenuComponent, igsplitbutton_component_1.IgSplitButtonComponent, igspreadsheet_component_1.IgSpreadsheetComponent, igscheduler_component_1.IgSchedulerComponent],
                    exports: [column_directive_1.Column, iggridmulticolumnheaders_directive_1.IgGridMultiColumnHeadersFeature, iggridsorting_directive_1.IgGridSortingFeature, iggridfiltering_directive_1.IgGridFilteringFeature, iggridpaging_directive_1.IgGridPagingFeature, iggridupdating_directive_1.IgGridUpdatingFeature, iggridgroupby_directive_1.IgGridGroupByFeature, iggridcolumnmoving_1.IgGridColumnMovingFeature, iggridhiding_directive_1.IgGridHidingFeature, iggridcellmerging_directive_1.IgGridCellMergingFeature, iggridresponsive_directive_1.IgGridResponsiveFeature, iggridresizing_directive_1.IgGridResizingFeature, iggridselection_directive_1.IgGridSelectionFeature, iggridrowselectors_directive_1.IgGridRowSelectorsFeature, iggridsummaries_directive_1.IgGridSummariesFeature, iggridcolumnfixing_directive_1.IgGridColumnFixingFeature, iggridtooltips_directive_1.IgGridTooltipsFeature, iggridappendrowsondemand_directive_1.IgGridAppendRowsOnDemandFeature, features_directive_1.Features, iggrid_component_1.IgGridComponent, igtreegrid_component_1.IgTreeGridComponent, ighierarchicalgrid_component_1.IgHierarchicalGridComponent, igcombo_component_1.IgComboComponent, igcheckboxeditor_component_1.IgCheckboxEditorComponent, igcurrencyeditor_component_1.IgCurrencyEditorComponent, igdateeditor_component_1.IgDateEditorComponent, igdatepicker_component_1.IgDatePickerComponent, igmaskeditor_component_1.IgMaskEditorComponent, ignumericeditor_component_1.IgNumericEditorComponent, igpercenteditor_component_1.IgPercentEditorComponent, igtexteditor_component_1.IgTextEditorComponent, igtree_component_1.IgTreeComponent, igdialog_component_1.IgDialogComponent, igsplitter_component_1.IgSplitterComponent, iglayoutmanager_component_1.IgLayoutManagerComponent, igtilemanager_component_1.IgTileManagerComponent, ightmleditor_component_1.IgHtmlEditorComponent, igvalidator_component_1.IgValidatorComponent, igpivotdataselector_component_1.IgPivotDataSelectorComponent, igpivotgrid_component_1.IgPivotGridComponent, igdatachart_component_1.IgDataChartComponent, igpiechart_component_1.IgPieChartComponent, igdoughnutchart_component_1.IgDoughnutChartComponent, igfunnelchart_component_1.IgFunnelChartComponent, igradialgauge_component_1.IgRadialGaugeComponent, igzoombar_component_1.IgZoombarComponent, igmap_component_1.IgMapComponent, igsparkline_component_1.IgSparklineComponent, igbulletgraph_component_1.IgBulletGraphComponent, iglineargauge_component_1.IgLinearGaugeComponent, igqrcodebarcode_component_1.IgQRCodeBarcodeComponent, igupload_component_1.IgUploadComponent, igpopover_component_1.IgPopoverComponent, ignotifier_component_1.IgNotifierComponent, igrating_component_1.IgRatingComponent, igvideoplayer_component_1.IgVideoPlayerComponent, igradialmenu_component_1.IgRadialMenuComponent, igsplitbutton_component_1.IgSplitButtonComponent, igspreadsheet_component_1.IgSpreadsheetComponent, igscheduler_component_1.IgSchedulerComponent]
                },] },
    ];
    return IgniteUIModule;
}());
exports.IgniteUIModule = IgniteUIModule;
//# sourceMappingURL=igniteui.angular2.js.map