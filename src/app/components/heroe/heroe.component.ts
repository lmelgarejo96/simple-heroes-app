import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HeroesService, Heroe } from '../../services/heroes.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  private heroe:Heroe;

  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService,
               private router: Router) { 
      this.activatedRoute.params.subscribe( params => {
        this.heroe = this._heroesService.getHeroe( params['id'] );
        console.log(this.heroe);
      });
  }

  ngOnInit() {
  }

  deleteHero(){
    this.activatedRoute.params.subscribe( params => {
      this._heroesService.deleteHero( params['id'] )
      console.log(params['id']);
    });
    this.router.navigate( ['/heroes'] );
    Swal.fire(
      'Deleted successfully!',
      'The hero was deleted correctly!',
      'success'
    )
  }

}
