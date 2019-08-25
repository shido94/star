import {Routes} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {VideosComponent} from './videos/videos.component';
import {EmailsComponent} from './emails/emails.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {TemplatesComponent} from './templates/templates.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuard} from './guard/auth.guard';
import {CallActionComponent} from './call-action/call-action.component';

export const myRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/videos',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard] ,
    children : [
      {
        path: 'videos',
        component: VideosComponent
      },
      {
        path: 'actions',
        component: CallActionComponent
      },
      {
        path: 'email',
        component: EmailsComponent
      },
      {
        path: 'notifications',
        component: NotificationsComponent
      },
      {
        path: 'templates',
        component: TemplatesComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
