import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class InfiniteScroll {

  constructor(private db: AngularFireDatabase) { }

  getMovies(batch, lastKey?) {
    let query = {
      orderByKey: true,
      limitToFirst: batch,
    }

    if (lastKey) query['startAt'] = lastKey
    return this.db.list('/movies', {
      query
    })
  }

}