
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Chart } from 'highcharts';
import { ChartComponent } from './chart/chart.component';
import { ViewComponent } from './view.component';

const routes: Routes = [{
  path: '',
  component: ViewComponent,
  children: [{
    path: 'chart',
    component:ChartComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
