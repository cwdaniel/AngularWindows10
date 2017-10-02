import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TaskbarModule } from './taskbar/taskbar.module';
import { WindowModule } from './window/window.module';
@NgModule({
   imports: [
      BrowserModule,
      TaskbarModule,
      WindowModule,
   ],
   providers: [],
   bootstrap: [],
   exports: [
      TaskbarModule,
      WindowModule
   ],
})
export class CoreModule { }