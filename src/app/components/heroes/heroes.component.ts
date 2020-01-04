import { Component, OnInit } from '@angular/core';

import { HeroesService, Heroe } from '../../services/heroes.service';

import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  private heroes:Heroe[] = [];

  constructor( private _heroesService:HeroesService,
               private router:Router ) {

  }

  ngOnInit() {
    this.verHeroes();
  }

  verHeroes(){
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe(index:number){
    this.router.navigate( ['/heroe', index] );
  }

  saveHero(){
    let cadena = document.forms["addForm"].elements[0].value
    let nombre = (document.forms["addForm"].elements[0].value).substring(11, (cadena.length)-4);
    let img =  document.forms["addForm"].elements[0].value;
    let aparicion =  document.forms["addForm"].elements[1].value;
    let casa =  document.forms["addForm"].elements[2].value;
    let bio =  document.forms["addForm"].elements[3].value;
    console.log(nombre, img, aparicion, casa, bio);

    let heroe:Heroe = {
      nombre: nombre,
      bio: bio,
      img: img,
      aparicion: aparicion,
      casa: casa
    }
    this._heroesService.newHeroe(heroe);
    this.verHeroes();
    Swal.fire(
      'Saved successfully!',
      'The hero was saved correctly!',
      'success'
    )
  }
}
