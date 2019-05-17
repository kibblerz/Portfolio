import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { SocialComponent } from './social/social.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'works', component: WorksComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'social', component: SocialComponent},
  { path: 'social/register', component: RegisterComponent},
  { path: '**', component: IndexComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
