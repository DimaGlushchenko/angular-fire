import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'multi-state',
  templateUrl: './multi-state.component.html',
  styleUrls: ['./multi-state.component.scss'],
  animations: [
    trigger('photoState', [
      state('move', style({
        transform: 'translateX(20%) translateY(100px)',
      })),
      state('enlarge', style({
        transform: 'scale(1.5)',
      })),
      state('spin', style({
        transform: 'rotateY(180deg) rotateZ(90deg)',
      })),
      transition('* => move',
        animate('2000ms', keyframes([
          style({ transform: 'translateX(0)    rotateY(0)', offset: 0 }),
          style({ transform: 'translateX(50%)  rotateY(90deg)', offset: 0.33 }),
          style({ transform: 'translateY(-75%) rotateY(180deg)', offset: 0.66 }),
          style({ transform: 'translateX(-100%)', offset: 1.0 })
        ])
        )),
      transition('spin => move', animate('2000ms ease-out')),
      transition('* => *', animate('1000ms ease')),
    ]),

    trigger('photosAnimation', [
      transition('* => *', [
        query('img', style({ transform: 'translateX(-100%)' })),
        query('img',
          stagger('600ms', [
            animate('900ms', style({ transform: 'translateX(0)' }))
          ]))
      ])
    ])
  ]
})

export class MultiStateComponent {

  constructor() { }

  position: string;
  photoUrl = 'https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?w=1260&h=750&auto=compress';

  changePosition(newPosition: string) {
    this.position = newPosition
  }

  logAnimation($event) {
    console.log(`${this.position} animation ${$event.phaseName}`)
  }

}
