import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Heroe } from '../../services/heroes.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})

export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:Heroe;
  @Input() index:number;

/*   @Output() heroSelected:EventEmitter<number>; */

  constructor( private router:Router ) {
    /* this.heroSelected = new EventEmitter(); */
  }

  ngOnInit() {
  }

  verHeroe(){
    this.router.navigate( ['/heroe', this.heroe.idx | this.index] ); 
    /* this.heroSelected.emit(this.index); */
  }

}
