import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TaskbarModule } from './modules/taskbar.module';
import { WindowModule } from './modules/window.module';
import { DesktopModule } from './modules/desktop.module';
import { LockscreenSaverComponent } from './components/lockscreen-saver/lockscreen-saver.component';
import { TouchKeyboardComponent } from './components/touch-keyboard/touch-keyboard.component';
import { AngularDraggableModule } from 'angular2-draggable';

@NgModule({
   imports: [
      BrowserModule,
      TaskbarModule,
      WindowModule,
      AngularDraggableModule
   ],
   providers: [],
   bootstrap: [],
   exports: [
      TaskbarModule,
      WindowModule,
      DesktopModule,
      TouchKeyboardComponent,
   ],
   declarations: [LockscreenSaverComponent, TouchKeyboardComponent],
})
export class CoreModule { }