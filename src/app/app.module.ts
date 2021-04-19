import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContainerComponent } from './checkout-page/containers/container/container.component';
import { CheckoutComponent } from './checkout-page/containers/checkout/checkout.component';
import { CartComponent } from './checkout-page/containers/cart/cart.component';
import { CheckoutFormService } from './checkout-page/services/checkoutform.service';
import { FooterComponent } from './checkout-page/containers/footer/footer.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'checkout-page',
    pathMatch: 'full'
  },
  {
    path: 'checkout-page',
    loadChildren: () =>
      import('./checkout-page/routing/checkout-page-routing.module').then(m => m.CheckoutPageRoutingModule)
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    CheckoutComponent,
    CartComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CheckoutFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
