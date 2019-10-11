import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { InboundComponent } from './pages/inbound/inbound.component';
import { OutboundComponent } from './pages/outbound/outbound.component';
import { HomeComponent } from './pages/home/home.component';
import { InboundNewComponent } from './pages/inbound-new/inbound-new.component';
import { ProductComponent } from './pages/product/product.component';
import { ScanComponent } from './pages/scan/scan.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InboundComponent,
    OutboundComponent,
    HomeComponent,
    InboundNewComponent,
    ProductComponent,
    ScanComponent,
    ProductFormComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
