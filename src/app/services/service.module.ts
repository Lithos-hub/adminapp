import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SettingsService, SidebarService, SharedService } from './service.index';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [SettingsService, SidebarService, SharedService ]

})
export class ServiceModule { }
