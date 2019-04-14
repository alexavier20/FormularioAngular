import { NgModule } from '@angular/core';
import { ContatosLista } from './contatos-lista.component';
import { CommonModule } from '@angular/common';
import { ContatoRoutingModule } from './contato-routing.module'
import { contatoDetalheComponent } from './contato-detalhe.component'
import { ContatoService } from './contato.service';

@NgModule({
    imports: [      
        ContatoRoutingModule,
        CommonModule
    ],
    declarations:[
        contatoDetalheComponent,
        ContatosLista
    ],
    exports: [
        ContatosLista
    ],
    providers:[
        ContatoService
    ]
})


export class ContatosModule {

}