import {animate, style, transition, trigger} from '@angular/animations';


export const inOut = trigger('inOutAnimation', [
  transition(':enter', [
    style({opacity: 0, transform: 'translateY(-20px)'}),
    animate('1s ease-out', style({opacity: 1, transform: 'translateY(0)'}))
  ]),
  transition(':leave', [
    style({height: 300, opacity: 1}),
    animate('1s ease-in', style({height: 0, opacity: 0}))
  ])
])
