import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatosLista } from './contatos-lista.component';
import { contatoDetalheComponent } from './contato-detalhe.component';


const contatoRoutes: Routes = [
    {
        path: 'contato',
        component: ContatosLista       
    },
    {
        path: 'contato/save',
        component: contatoDetalheComponent
    },
    {
        path: 'contato/save/:id',
        component: contatoDetalheComponent
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(contatoRoutes)
    ],
    exports:[RouterModule]
})

export class ContatoRoutingModule {

}