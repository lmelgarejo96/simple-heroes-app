import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router'

import { HeroesService, Heroe } from '../../services/heroes.service'

import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  private heroes:Heroe[] = [];
  private cantidad:number;

  constructor( private activatedRoute:ActivatedRoute,
               private _heroeService:HeroesService, 
               private router:Router ) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.heroes = this._heroeService.buscarHeroe(params['termino']); 
      this.cantidad = this.heroes.length;
    });
  }

  verHeroe(index:number){
    this.router.navigate( ['/heroe', index] );
  }


}
