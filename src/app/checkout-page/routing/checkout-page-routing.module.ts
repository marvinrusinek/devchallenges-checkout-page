import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContainerComponent } from '../containers/container/container.component';
import { CheckoutComponent } from '../containers/checkout/checkout.component';
import { CartComponent } from '../containers/cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'container' },
  { path: 'container', component: ContainerComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutPageRoutingModule { }
