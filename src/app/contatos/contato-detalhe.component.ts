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

  contato: Contato;

  constructor(
    private contatoService : ContatoService,
    private route : ActivatedRoute,
    private location : Location
  ) {}

  ngOnInit() : void {
      this.contato = new Contato(1,'','','');

      this.route.params.forEach((params: Params) => {
        let id: number = +params['id'];
        console.log(id);

        this.contatoService.getContato(id)
          .then((contato:Contato) => {
            this.contato = contato;
          });
      });
  }

  getFormGroupClass(isValid: boolean, isPristine: boolean):{}{
      return {
          'is-invalid' : !isValid && !isPristine,
          'is-valid' : isValid && !isPristine
      };
  }
}