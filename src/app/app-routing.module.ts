import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewsComponent } from './news/news.component';
import { ActivitiesComponent } from './activities/activities.component';
import { MediaComponent } from './media/media.component';
import { ContactComponent } from './contact/contact.component';
import { CareerComponent } from './career/career.component';
import { PubDataComponent } from './pub-data/pub-data.component';
import { CustomerServiceComponent } from './customer-service/customer-service.component';
import { LegalComponent } from './legal/legal.component';
import { AuthoritiesComponent } from './authorities/authorities.component';
import { PermitsComponent } from './permits/permits.component';
import { ArchivesComponent } from './archives/archives.component';
import { AdminComponent } from './admin/admin.component';
import { UserformComponent } from './userform/userform.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  
  { path: 'admin', component: AdminComponent },
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'media', component: MediaComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'career', component: CareerComponent },
  { path: 'pub-data', component: PubDataComponent },
  { path: 'customer-service', component: CustomerServiceComponent },
  { path: 'legal', component: LegalComponent },
  { path: 'authorities', component: AuthoritiesComponent },
  { path: 'permits', component: PermitsComponent },
  { path: 'archives', component: ArchivesComponent },
  { path: 'userform', component: UserformComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
