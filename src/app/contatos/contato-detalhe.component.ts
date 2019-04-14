import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { ContatoService } from './contato.service';
import { Contato } from './contato.model';

declare var module: {
    id: string;
  }

@Component({
    moduleId: module.id,
    selector: "contato-detalhe",
    templateUrl: "contato-detalhe.component.html"
})

export class contatoDetalheComponent {

  constructor(
    private contatoService : ContatoService,
    private route : ActivatedRoute,
    private location : Location
  ) {}

  ngOnInit() : void {
      this.route.params.forEach((params: Params) => {
        let id: number = +params['id'];
        console.log(id);

        this.contatoService.getContato(id)
          .then((contato:Contato) => {
            console.log(contato);
          });
      });
  }
}