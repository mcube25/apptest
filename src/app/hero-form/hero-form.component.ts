import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})


export class FigFormComponent {

  
 powers = ['Really smart', 'Flexible','Super hot', 'Weather changer'];

 model = new Hero (18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

 submitted = false;
  heroForm: string;

 onSubmit() {this.submitted = true; }

 newHero() {
  this.model = new Hero(42, '', '', '');
}


reset() {
  this.heroForm = ''
}
}
