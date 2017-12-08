import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';


import { AppComponent } from './app.component';
import { SampleChartComponent } from './sample-chart/sample-chart.component';
import { GlobeChartComponent } from './globe-chart/globe-chart.component';
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";
import { GeoMapComponent } from './geo-map/geo-map.component';




@NgModule({
  declarations: [
    AppComponent,
    SampleChartComponent,
    GlobeChartComponent,
    GeoMapComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxEchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
