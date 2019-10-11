import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InboundComponent } from './pages/inbound/inbound.component';
import { OutboundComponent } from './pages/outbound/outbound.component';
import { HomeComponent } from './pages/home/home.component';
import { InboundNewComponent } from './pages/inbound-new/inbound-new.component';

const routes: Routes = [{
  path:"",
  component: HomeComponent
},
{
  path:"home",
  component: HomeComponent
},
{
  path:"inbound",
  component: InboundComponent
},
{
  path:"inbound/new",
  component: InboundNewComponent
},
{
  path:"outbound",
  component: OutboundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
