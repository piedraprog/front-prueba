import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  NbButtonModule,
  NbCardModule, 
  NbDatepickerModule, 
  NbInputModule, 
  NbLayoutModule,
  NbMenuModule, 
  NbSelectModule, 
  NbSidebarModule, 
  NbSpinnerModule, 
  NbTabsetModule 
} from '@nebular/theme';
import { NbIconModule } from '@nebular/theme';

@NgModule({
  declarations: [

  ],
  exports: [
    CommonModule,
    NbLayoutModule,
    NbSidebarModule,
    NbIconModule,
    NbIconModule,
    NbCardModule,
    NbMenuModule,
    NbTabsetModule,
    NbDatepickerModule,
    NbInputModule,
    NbSelectModule,
    NbButtonModule,
    NbSpinnerModule,
  ]
})
export class NebularmodModule { }
