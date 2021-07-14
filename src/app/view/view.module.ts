import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ChartComponent } from './chart/chart.component';
import { ViewComponent } from './view.component';


@NgModule({
  declarations: [ChartComponent, ViewComponent],
  imports: [
    CommonModule,
    ViewRoutingModule
  ]
})
export class ViewModule { }
