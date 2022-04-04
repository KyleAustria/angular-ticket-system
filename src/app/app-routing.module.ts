import { ChildTicketComponent } from './tickets/child-ticket/child-ticket.component';
import { AppGuardGuard } from './app-guard.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'tickets',
    component: TicketsComponent,
    canActivate : [AppGuardGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate : [AppGuardGuard]
  },
  {
    path: 'tickets/:id',
    component: ChildTicketComponent,
    canActivate : [AppGuardGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
