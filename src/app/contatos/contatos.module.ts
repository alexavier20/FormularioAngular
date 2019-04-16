import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContatosLista } from './contatos-lista.component';
import { ContatoRoutingModule } from './contato-routing.module'
import { contatoDetalheComponent } from './contato-detalhe.component'
import { ContatoService } from './contato.service';

@NgModule({
    imports: [      
        ContatoRoutingModule,
        CommonModule,
        FormsModule
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