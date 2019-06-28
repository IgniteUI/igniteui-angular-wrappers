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
    { path: 'grid-data-binding', component: GridDataBindingComponent, data: {animation: 'SamplePage'} },
    { path: 'grid-top-level-options', component: GridTopLevelOptionsComponent, data: {animation: 'SamplePage'} },
    { path: 'grid-http-client', component: GridHttpClientComponent, data: {animation: 'SamplePage'} },
    { path: 'grid-complex-options', component: GridComplexOptionsComponent, data: {animation: 'SamplePage'} },
    { path: 'grid-api-methods', component: GridApiMethodsComponent, data: {animation: 'SamplePage'} },
    { path: 'grid-excel-exporting', component: GridExcelExportingComponent, data: {animation: 'SamplePage'} },
    { path: 'hierarchical-grid', component: HierarchicalGridComponent, data: {animation: 'SamplePage'} },
    { path: 'tree-grid', component: TreeGridComponent, data: {animation: 'SamplePage'} },
    { path: 'pivot-grid-flat-data-source', component: PivotGridFlatDataSourceComponent, data: {animation: 'SamplePage'} },
    { path: 'pivot-grid-xmla-data-source', component: PivotGridXmlaDataSourceComponent, data: {animation: 'SamplePage'} },
    { path: 'combo', component: ComboComponent, data: {animation: 'SamplePage'} },
    { path: 'data-chart', component: DataChartComponent, data: {animation: 'SamplePage'} },
    { path: 'dialog', component: DialogComponent, data: {animation: 'SamplePage'} },
    { path: 'editors', component: EditorsComponent, data: {animation: 'SamplePage'} },
    { path: 'html-editor', component: HtmlEditorComponent, data: {animation: 'SamplePage'} },
    { path: 'layout-manager', component: LayoutManagerComponent, data: {animation: 'SamplePage'} },
    { path: 'tile-manager', component: TileManagerComponent, data: {animation: 'SamplePage'} },
    { path: 'map', component: MapComponent, data: {animation: 'SamplePage'} },
    { path: 'tree', component: TreeComponent, data: {animation: 'SamplePage'} },
    { path: 'tree', component: UploadComponent, data: {animation: 'SamplePage'} },
    { path: 'tree', component: VideoPlayerComponent, data: {animation: 'SamplePage'} }
    
  ];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
