import { NgModule } from '@angular/core';

import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbMenuModule,
  NbActionsModule,
  NbContextMenuModule,
  NbCardModule,
  NbButtonModule,
  NbInputModule,
  NbFormFieldModule,
  NbCheckboxModule,
  NbSelectModule,
  NbToggleModule,
  NbTooltipModule,
  NbPopoverModule,
  NbDialogModule,
  NbToastrModule,
  NbAlertModule,
  NbSpinnerModule,
  NbUserModule,
  NbIconModule,
  NbDatepickerModule,
  NbTimepickerModule,  
  NbSearchModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  imports: [
    NbThemeModule.forRoot({ name: 'default' }),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDialogModule.forRoot(),
    NbToastrModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbTimepickerModule.forRoot(),
  ],
  exports: [
    NbThemeModule,
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule,
    NbActionsModule,
    NbContextMenuModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbFormFieldModule,
    NbCheckboxModule,
    NbSelectModule,
    NbToggleModule,
    NbTooltipModule,
    NbPopoverModule,
    NbDialogModule,
    NbToastrModule,
    NbAlertModule,
    NbSpinnerModule,
    NbUserModule,
    NbIconModule,
    NbEvaIconsModule,
    NbDatepickerModule,
    NbTimepickerModule,
    NbSearchModule
  ],
})
export class NebularModule {}
