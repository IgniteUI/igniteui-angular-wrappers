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
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GridDefaultComponent,
    GridDataBindingComponent,
    GridTopLevelOptionsComponent,
    GridHttpClientComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IgniteUIModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(ProductData)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
