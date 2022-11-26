import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComercialPerformanceComponent } from './comercial-performance/comercial-performance.component';
import { NebularmodModule } from '../nebularmod.module';
import { ComponentsModule } from '../components/components.module';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ComercialPerformanceComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    NebularmodModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    ComercialPerformanceComponent
  ]
})
export class PagesModule { }
