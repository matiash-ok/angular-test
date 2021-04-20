import { Component, OnInit } from '@angular/core';
import { HeroesService} from '../../servicios/heroes.service';
import { Router } from '@angular/router';
import { HerosearchComponent } from '../herosearch/herosearch.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router ,private _heroeService:HeroesService) { 
  }

  ngOnInit(): void {
  }

  buscarhero(termino:string){
    console.log(this._heroeService.buscarheroes(termino));
    this.router.navigate(["herosearch",termino])
  }
}
