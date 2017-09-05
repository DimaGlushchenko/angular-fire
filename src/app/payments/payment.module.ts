import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import { PaymentService } from './payment.service';
import { BuyNowComponent } from './buy-now/buy-now.component';
import { StripePipe } from './stripe.pipe';
import { PaymentsListComponent } from './payments-list/payments-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    MakePaymentComponent,
    BuyNowComponent,
    StripePipe,
    PaymentsListComponent
  ],
  providers: [PaymentService]
})

export class PaymentModule { }
