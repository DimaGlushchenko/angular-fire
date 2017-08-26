import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

// Ad default values
export class AdListing {
  title    = 'Your Title'
  content  = 'Ad Content'
  price    = 5.00
  image    = 'http://via.placeholder.com/350x150'
}

@Injectable()
export class AdService {

  constructor(private db: AngularFireDatabase) { }

  /// Creates an Ad, then returns as an object
  createAd(): FirebaseObjectObservable<AdListing> {
    const adDefault = new AdListing()
    const adKey = this.db.list('/ads').push(adDefault).key
    return this.db.object('/ads/' + adKey)
  }

  /// Updates an existing Ad
  updateAd(ad: FirebaseObjectObservable<AdListing>, data: any) {
    return ad.update(data)
  }
  
}
