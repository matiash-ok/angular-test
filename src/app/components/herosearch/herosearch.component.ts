import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeroesService , Heroe} from '../../servicios/heroes.service';

@Component({
  selector: 'app-herosearch',
  templateUrl: './herosearch.component.html',
  styleUrls: ['./herosearch.component.css']
})
export class HerosearchComponent implements OnInit {

  heroes:Heroe[]
  termino:any={};
  
  

  constructor(private _heroservice:HeroesService,private activatedroute:ActivatedRoute) { 
    this.activatedroute.params.subscribe(params => this.termino=params["termino"])
    this.activatedroute.params.subscribe(params => this.heroes=this._heroservice.buscarheroes(params["termino"]))
  }

  ngOnInit(): void {
  }

}
