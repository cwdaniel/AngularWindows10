import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings.component';
@NgModule({
   declarations: [
      SettingsComponent,
   ],
   exports: [SettingsComponent],
})
export class SettingsAppModule { }