import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Post } from '../post.model';
import * as postActions from '../post.actions';

interface AppState {
  post: Post;
}

@Component({
  selector: 'reduce',
  templateUrl: './reduce.component.html',
  styleUrls: ['./reduce.component.scss']
})

export class ReduceComponent {

  post$: Observable<Post>;

  constructor(private store: Store<AppState>) {
    this.post$ = this.store.select('post');
  }

  getPost() {
    this.store.dispatch(new postActions.GetPost('/posts/testPost'));
  }

  vote(post: Post, val: number) {
    this.store.dispatch(new postActions.VoteUpdate({ post, val }));
  }

}
