import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InboundComponent } from './pages/inbound/inbound.component';
import { OutboundComponent } from './pages/outbound/outbound.component';
import { HomeComponent } from './pages/home/home.component';
import { InboundNewComponent } from './pages/inbound-new/inbound-new.component';
import { ScanComponent } from './pages/scan/scan.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

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
  path:"inbound/form",
  component: InboundNewComponent
},
{
  path:"outbound/form",
  component: InboundNewComponent
},
{
  path:"product/list",
  component: ProductListComponent
},
{
  path:"product/form",
  component: ProductFormComponent
},
{
  path:"product/form/:id",
  component: ProductFormComponent
},
{
  path:"scan/:page_name",
  component: ScanComponent
},
{
  path:"product",
  component: ProductComponent
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
