import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CoreModule } from './core/core.module';
import { AppsModule } from './apps/apps.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { NotificationMenuService } from './core/services/notificationMenu.service';
import { DateTimeService } from './core/services/datetime.service';
import { AngularDraggableModule } from 'angular2-draggable';
import { RouterModule } from '@angular/router';
import { LockscreenSaverComponent } from '../app/core/components/lockscreen-saver/lockscreen-saver.component';
import { HomeComponent } from './home.component';
import { BingBackgroundService } from './core/services/bingBackground.service';
import { reducers } from './store/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { AuthEffects } from './auth/store/auth.effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
   ],
   imports: [
      RouterModule.forRoot([
         {
            path: 'login',
            component: LockscreenSaverComponent
         },
         {
            path: '',
            component: HomeComponent,
         }
      ]),
      BrowserModule,
      CommonModule,
      FormsModule,
      HttpModule,
      CoreModule,
      AppsModule,
      AngularDraggableModule,
      AuthModule,
      SharedModule,
      StoreModule.forRoot(reducers),
      EffectsModule.forRoot([AuthEffects]),
      StoreDevtoolsModule.instrument({
         maxAge: 20
       })
   ],
   providers: [NotificationMenuService, DateTimeService, BingBackgroundService],
   bootstrap: [AppComponent]
})
export class AppModule { }
