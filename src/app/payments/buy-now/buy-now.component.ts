import { Component, OnInit, Input } from '@angular/core';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'buy-now',
  templateUrl: './buy-now.component.html',
  styleUrls: ['./buy-now.component.scss']
})

export class BuyNowComponent implements OnInit {

  // unique Id for any product
  @Input() buyableId;
  @Input() price;

  showModal = false;
  balance;
  hasPurchased;

  constructor(private paymentSvc: PaymentService) { }

  ngOnInit() {
    this.balance = this.paymentSvc.getUserBalance()
    this.hasPurchased = this.paymentSvc.hasPurchased(this.buyableId)
  }

  toggleModal() {
    this.showModal = !this.showModal
  }

  confirmPurchase() {
    this.paymentSvc.buyDigitalContent(this.buyableId, this.price)
      .then(() => {
        this.showModal = false;
      })
  }

}
