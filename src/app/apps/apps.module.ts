import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SettingsAppModule } from './settings/settings.module';

@NgModule({
   imports: [SettingsAppModule],
   providers: [],
   bootstrap: [],
   exports: [
      SettingsAppModule ],
})
export class AppsModule { }