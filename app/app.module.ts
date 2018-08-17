import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './samples';
import { IgGridComponent } from "../src/main";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, IgGridComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}