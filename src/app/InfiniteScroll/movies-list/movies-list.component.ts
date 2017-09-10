import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Scroll } from "../../services/scroll.service";
import * as _ from 'lodash'

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  providers: [Scroll]
})

export class MoviesListComponent implements OnInit {

  movies = new BehaviorSubject([]);

  batch = 2         // size of each query
  lastKey = ''      // key to offset next query from
  finished = false  // boolean when end of database is reached

  constructor(private movieService: Scroll) { }

  ngOnInit() {
    this.getMovies()
  }

  onScroll() {
    console.log('scrolled!!')
    this.getMovies()
  }

  private getMovies(key?) {
    if (this.finished) return
    this.movieService
      .getMovies(this.batch + 1, this.lastKey)
      .do(movies => {
       
        /// set the lastKey in preparation for next query
        this.lastKey = _.last(movies)['$key']
        const newMovies = _.slice(movies, 0, this.batch)
       
        /// Get current movies in BehaviorSubject
        const currentMovies = this.movies.getValue()
        
        /// If data is identical, stop making queries
        if (this.lastKey == _.last(newMovies)['$key']) {
          this.finished = true
        }
        
        /// Concatenate new movies to current movies
        this.movies.next(_.concat(currentMovies, newMovies))
      })
      .take(1)
      .subscribe()
  }
}
