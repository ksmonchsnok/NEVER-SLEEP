import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NebularModule } from './nebular.module';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserMenuComponent } from './shared/components/user-menu/user-menu.component';
import { ManageBillsComponent } from './pages/manage-bills/manage-bills.component';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    UserMenuComponent,
    HomePageComponent,
    ManageBillsComponent,
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NebularModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
