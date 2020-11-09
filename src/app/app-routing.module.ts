import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridDefaultComponent } from './grid-default/grid-default.component';
import { GridDataBindingComponent } from './grid-data-binding/grid-data-binding.component';
import { GridTopLevelOptionsComponent } from './grid-top-level-options/grid-top-level-options.component';
import { GridHttpClientComponent } from './grid-http-client/grid-http-client.component';
import { GridComplexOptionsComponent } from './grid-complex-options/grid-complex-options.component';
import { GridApiMethodsComponent } from './grid-api-methods/grid-api-methods.component';
import { EditorsComponent } from './editors/editors.component';
import { GridExcelExportingComponent } from './grid-excel-exporting/grid-excel-exporting.component';
import { HierarchicalGridComponent } from './hierarchical-grid/hierarchical-grid.component';
import { TreeGridComponent } from './tree-grid/tree-grid.component';
import { PivotGridFlatDataSourceComponent } from './pivot-grid-flat-data-source/pivot-grid-flat-data-source.component';
import { PivotGridXmlaDataSourceComponent } from './pivot-grid-xmla-data-source/pivot-grid-xmla-data-source.component';
import { ComboComponent } from './combo/combo.component';
import { DataChartComponent } from './data-chart/data-chart.component';
import { DialogComponent } from './dialog/dialog.component';
import { HtmlEditorComponent } from './html-editor/html-editor.component';
import { LayoutManagerComponent } from './layout-manager/layout-manager.component';
import { TileManagerComponent } from './tile-manager/tile-manager.component';
import { MapComponent } from './map/map.component';
import { TreeComponent } from './tree/tree.component';
import { UploadComponent } from './upload/upload.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

const routes: Routes = [
    { path: '', component: GridDefaultComponent, pathMatch: 'full', data: {animation: 'HomePage'} },
    { path: 'grid-data-binding', component: GridDataBindingComponent, data: {animation: 'GridDataBindingPage'} },
    { path: 'grid-top-level-options', component: GridTopLevelOptionsComponent, data: {animation: 'GridTopLevelPage'} },
    { path: 'grid-http-client', component: GridHttpClientComponent, data: {animation: 'GridHttpClientPage'} },
    { path: 'grid-complex-options', component: GridComplexOptionsComponent, data: {animation: 'GridComplexOptsPage'} },
    { path: 'grid-api-methods', component: GridApiMethodsComponent, data: {animation: 'GridAPIPage'} },
    { path: 'grid-excel-exporting', component: GridExcelExportingComponent, data: {animation: 'GridExcelExportingPage'} },
    { path: 'hierarchical-grid', component: HierarchicalGridComponent, data: {animation: 'HierarchicalGridPage'} },
    { path: 'tree-grid', component: TreeGridComponent, data: {animation: 'TreeGridPage'} },
    { path: 'pivot-grid-flat-data-source', component: PivotGridFlatDataSourceComponent, data: {animation: 'FlatDsPivotGridPage'} },
    { path: 'pivot-grid-xmla-data-source', component: PivotGridXmlaDataSourceComponent, data: {animation: 'XmlaDsPivotGridPage'} },
    { path: 'combo', component: ComboComponent, data: {animation: 'ComboPage'} },
    { path: 'data-chart', component: DataChartComponent, data: {animation: 'ChartPage'} },
    { path: 'dialog', component: DialogComponent, data: {animation: 'DialogPage'} },
    { path: 'editors', component: EditorsComponent, data: {animation: 'EditorsPage'} },
    { path: 'html-editor', component: HtmlEditorComponent, data: {animation: 'HtmlEditorPage'} },
    { path: 'layout-manager', component: LayoutManagerComponent, data: {animation: 'LayoutManagerPage'} },
    { path: 'tile-manager', component: TileManagerComponent, data: {animation: 'TileManagerPage'} },
    { path: 'map', component: MapComponent, data: {animation: 'MapPage'} },
    { path: 'tree', component: TreeComponent, data: {animation: 'TreePage'} },
    { path: 'upload', component: UploadComponent, data: {animation: 'UploadPage'} },
    { path: 'video-player', component: VideoPlayerComponent, data: {animation: 'VideoPlayerPage'} }

  ];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ]
})
export class AppRoutingModule { }
