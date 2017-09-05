import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class PaymentService {

  userId: string;
  balance: number;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.getUserBalance()
      .subscribe(balance => this.balance = balance)
  }

  getUserBalance() {
    return this.afAuth.authState.switchMap(auth => {
      this.userId = auth.uid
      return this.db.object(`/users/${this.userId}/balance`)
        .map(balance => balance.$value)
    })
  }

  hasPurchased(buyableId) {
    return this.db.object(`/purchases/${this.userId}/${buyableId}`)
      .map(purchase => !!purchase.timestamp)
  }

  buyDigitalContent(buyableKey: any, amount: number) {
    const timestamp = firebase.database.ServerValue.TIMESTAMP
    const purchase = { timestamp, amount }
    let updates = {}
    
    const newBalance = this.balance - amount
   
    updates[`/purchases/${this.userId}/${buyableKey}`] = purchase
    updates[`/users/${this.userId}/balance`] = newBalance
    
    return this.db.object('/').update(updates)
  }

  processPayment(token: any, amount: number) {
    const payment = { token, amount }
    return this.db.list(`/payments/${this.userId}`).push(payment)
  }

}
