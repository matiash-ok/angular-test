import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  x:string="que onda puto";
  constructor() {console.log(this.x) }

  ngOnInit(): void {
    
  }

}
