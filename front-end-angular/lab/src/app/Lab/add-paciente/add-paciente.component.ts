import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Paciente } from 'src/app/Modelo/Paciente';
import { ServiceService } from 'src/app/Service/service';

@Component({
  selector: 'app-add-paciente',
  templateUrl: './add-paciente.component.html',
  styleUrls: ['./add-paciente.component.css']
})
export class AddPacienteComponent implements OnInit {

paciente: Paciente;

  constructor(private route: ActivatedRoute, private router: Router, private service: ServiceService) { 
    this.paciente = new Paciente();
  }

  ngOnInit() {
  }

  CadastrarPaciente(){
    this.service.createPaciente(this.paciente).subscribe(resposta => this.ListarExames())
  }

  ListarExames(){
    this.router.navigate(['/listar-exames']);
  }

}
