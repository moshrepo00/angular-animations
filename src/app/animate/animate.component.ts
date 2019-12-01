import {Component, OnInit} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {inOut} from '../animations';

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.scss'],
  animations: [
    inOut
  ]
})

export class AnimateComponent implements OnInit {

  triggerAnimation: boolean;

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.triggerAnimation = true;
    }, 1000);
  }
}
