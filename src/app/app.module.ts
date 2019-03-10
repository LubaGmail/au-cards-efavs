import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { CardDataService } from './card-data.service';
import { GridsComponent } from './cards/grids/grids.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    GridsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CardDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
