import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service'
import { Router } from '@angular/router';
import { Exame } from 'src/app/Modelo/Exame';

@Component({
  selector: 'app-listar-exames',
  templateUrl: './listar-exames.component.html',
  styleUrls: ['./listar-exames.component.css']
})
export class ListarExamesComponent implements OnInit {

  exames: Exame[];

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getExames().subscribe(resposta => { this.exames = resposta; })
  }

}
