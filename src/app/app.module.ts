import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NebularModule } from './nebular.module';

import { MainLayoutsComponent } from './layouts/main-layouts/main-layouts.component';
import { NavDropdownComponent } from './shared/components/nav-dropdown/nav-dropdown.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HomePageComponent } from './layouts/home-page/home-page.component';
import { ManageBillsComponent } from './layouts/manage-bills/manage-bills.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutsComponent,
    NavDropdownComponent,
    SidebarComponent,
    HomePageComponent,
    ManageBillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NebularModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
