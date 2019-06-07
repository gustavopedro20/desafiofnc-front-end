import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ServiceService } from 'src/app/Service/service';
import { Exame } from 'src/app/Modelo/Exame';

@Component({
  selector: 'app-add-exame',
  templateUrl: './add-exame.component.html',
  styleUrls: ['./add-exame.component.css']
})
export class AddExameComponent implements OnInit {

  exame: Exame;

  constructor(private route: ActivatedRoute, private router: Router, private service: ServiceService) {
    this.exame = new Exame();
  }

  ngOnInit() {
  }

  CadastrarExame(){
    this.service.createExame(this.exame).subscribe(resposta => this.ListarExames())
  }

  ListarExames(){
    this.router.navigate(['/listar-exames']);
  }

}
