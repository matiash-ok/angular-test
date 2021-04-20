import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeroesService , Heroe} from '../../servicios/heroes.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero:Heroe;

  constructor(private activatedRoute:ActivatedRoute,private _heroeService:HeroesService) { 


    this.activatedRoute.params.subscribe( params => this.hero= this._heroeService.get_Heroe(params["id"]))

  }

  ngOnInit(): void {
  }

}
