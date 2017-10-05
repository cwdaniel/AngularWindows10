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
import { SignupComponent } from './core/auth/signup/signup.component';
import { SigninComponent } from './core/auth/signin/signin.component';
import { AuthService } from './core/auth/auth.service';
import { AuthGuard } from './core/auth/auth-guard.service';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      SignupComponent,
      SigninComponent
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
            canActivate: [AuthGuard]
         },
         {
            path: 'signup',
            component: SignupComponent
         },
         {
            path: 'signin',
            component: SigninComponent
         },
      ]),
      BrowserModule,
      CommonModule,
      FormsModule,
      HttpModule,
      CoreModule,
      AppsModule,
      AngularDraggableModule
   ],
   providers: [NotificationMenuService, DateTimeService, BingBackgroundService, AuthService, AuthGuard],
   bootstrap: [AppComponent]
})
export class AppModule { }
