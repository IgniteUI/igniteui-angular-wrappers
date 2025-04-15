import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { IgniteUIModule } from 'projects/igniteui-angular-wrappers/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { GridDefaultComponent } from './grid-default/grid-default.component';
import { GridDataBindingComponent } from './grid-data-binding/grid-data-binding.component';
import { FormsModule } from '@angular/forms';
import { GridTopLevelOptionsComponent } from './grid-top-level-options/grid-top-level-options.component';
import { GridHttpClientComponent } from './grid-http-client/grid-http-client.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './shared/product-data';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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

@NgModule({ declarations: [
        AppComponent,
        GridDefaultComponent,
        GridDataBindingComponent,
        GridTopLevelOptionsComponent,
        GridHttpClientComponent,
        GridComplexOptionsComponent,
        GridApiMethodsComponent,
        EditorsComponent,
        GridExcelExportingComponent,
        HierarchicalGridComponent,
        TreeGridComponent,
        PivotGridFlatDataSourceComponent,
        PivotGridXmlaDataSourceComponent,
        ComboComponent,
        DataChartComponent,
        DialogComponent,
        HtmlEditorComponent,
        LayoutManagerComponent,
        TileManagerComponent,
        MapComponent,
        TreeComponent,
        UploadComponent,
        VideoPlayerComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        BrowserAnimationsModule,
        IgniteUIModule,
        FormsModule,
        AppRoutingModule,
        InMemoryWebApiModule.forRoot(ProductData)], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
