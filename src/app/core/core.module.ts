import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TaskbarModule } from './modules/taskbar.module';
import { WindowModule } from './modules/window.module';
import { DesktopModule } from './modules/desktop.module';
import { LockscreenSaverComponent } from './components/lockscreen-saver/lockscreen-saver.component';

@NgModule({
   imports: [
      BrowserModule,
      TaskbarModule,
      WindowModule
   ],
   providers: [],
   bootstrap: [],
   exports: [
      TaskbarModule,
      WindowModule,
      DesktopModule
   ],
   declarations: [LockscreenSaverComponent],
})
export class CoreModule { }