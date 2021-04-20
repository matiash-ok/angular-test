import { Component, OnInit, Input } from '@angular/core';
import { HeroesService , Heroe} from '../../servicios/heroes.service';

@Component({
  selector: 'app-hero-tarjeta',
  templateUrl: './hero-tarjeta.component.html',
  styleUrls: ['./hero-tarjeta.component.css']
})


export class HeroTarjetaComponent implements OnInit {

  @Input() heroe:any={};
  @Input() i:any={};

  constructor() { }

  ngOnInit(): void {
  }

}
