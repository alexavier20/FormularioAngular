import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';

import { AppComponent } from './app.component';
import { ContatosModule } from './contatos/contatos.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ContatosModule,
    Observable,
// tslint:disable-next-line: deprecation
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
