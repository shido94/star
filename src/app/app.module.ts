import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import {ImgCaptionComponent} from './img-caption/img-caption.component';
import {LoginComponent, serverUrlToken} from './login/login.component';
import { FiveStartComponent } from './five-start/five-start.component';
import { StarComponent } from './star/star.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatInputModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSnackBarModule
} from '@angular/material';
import { SignupComponent } from './signup/signup.component';
import {RouterModule} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import {myRoutes} from './routes';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AlertService} from './services/alert.service';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './services/api.service';
import {EventBus} from './services/event-bus';
import { VideosComponent } from './videos/videos.component';
import { EmailsComponent } from './emails/emails.component';
import { TemplatesComponent } from './templates/templates.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { DisplayVideosComponent } from './display-videos/display-videos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AuthGuard} from './guard/auth.guard';
import { SearchComponent } from './search/search.component';
import { SpinnerComponent } from './spinner/spinner.component';
import {FlexAlignmentHackDirective} from './directives/flex-alignment-hack';
import {TruncatePipe} from './pipes/truncate';
import {StoreModule} from '@ngrx/store';
import {environment} from '../environments/environment.prod';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {reducers} from './state';
import { CallActionComponent } from './call-action/call-action.component';
import { SettingsComponent } from './settings/settings.component';
import {VideoManager} from './managers/managers.component';
import { ImagePipe } from './pipe/image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ImgCaptionComponent,
    LoginComponent,
    FiveStartComponent,
    StarComponent,
    SignupComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    VideosComponent,
    EmailsComponent,
    TemplatesComponent,
    NotificationsComponent,
    DisplayVideosComponent,
    DashboardComponent,
    SearchComponent,
    SpinnerComponent,
    FlexAlignmentHackDirective,
    TruncatePipe,
    CallActionComponent,
    SettingsComponent,
    ImagePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(myRoutes),
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatGridListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    // StoreModule.forRoot(reducers),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ],
  providers: [
    {provide: AlertService, useClass: AlertService},
    {provide: serverUrlToken, useValue: 'https://codekamp.in'},
    ApiService,
    EventBus,
    AuthGuard,
    VideoManager
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
