import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



//rutas//
import { AppRoutingModule } from './app-routing.module';


//servicios //

import { HeroesService } from './servicios/heroes.service';

//componentes//
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroComponent } from './components/hero/hero.component';
import { HerosearchComponent } from './components/herosearch/herosearch.component';
import { HeroTarjetaComponent } from './components/hero-tarjeta/hero-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroComponent,
    HerosearchComponent,
    HeroTarjetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }