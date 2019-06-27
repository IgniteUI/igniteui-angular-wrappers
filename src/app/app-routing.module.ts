import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridDefaultComponent } from './grid-default/grid-default.component';
import { GridDataBindingComponent } from './grid-data-binding/grid-data-binding.component';
import { GridTopLevelOptionsComponent } from './grid-top-level-options/grid-top-level-options.component';
import { GridHttpClientComponent } from './grid-http-client/grid-http-client.component';

const routes: Routes = [
    { path: '', component: GridDefaultComponent, pathMatch: 'full', data: {animation: 'HomePage'} },
    { path: 'grid-data-binding', component: GridDataBindingComponent, data: {animation: 'SamplePage'} },
    { path: 'grid-top-level-options', component: GridTopLevelOptionsComponent, data: {animation: 'SamplePage'} },
    { path: 'grid-http-client', component: GridHttpClientComponent, data: {animation: 'SamplePage'} }
  ];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
