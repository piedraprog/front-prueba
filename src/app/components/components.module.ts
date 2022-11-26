import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorComponent } from './selector/selector.component';
import { TableComponent } from './table/table.component';
import { NavbarComponent } from './navbar/navbar.component';

import { PizzaChartComponent } from './charts/pizza-chart/pizza-chart.component';
import { ChartBarsComponent } from './charts/chart-bars/chart-bars.component';
import { NebularmodModule } from '../nebularmod.module';
import { SidebarnavComponent } from './sidebarnav/sidebarnav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SelectorComponent,
    TableComponent,
    NavbarComponent,
    PizzaChartComponent,
    ChartBarsComponent,
    SidebarnavComponent
  ],
  imports: [
    CommonModule,
    NebularmodModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    SelectorComponent,
    TableComponent,
    NavbarComponent,
    PizzaChartComponent,
    ChartBarsComponent,
    SidebarnavComponent
  ]
})
export class ComponentsModule { }
