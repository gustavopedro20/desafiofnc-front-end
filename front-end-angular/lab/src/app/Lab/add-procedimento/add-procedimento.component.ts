import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service';
import { ActivatedRoute, Router } from '@angular/router';
import { Procedimento } from 'src/app/Modelo/Procedimento';

@Component({
  selector: 'app-add-procedimento',
  templateUrl: './add-procedimento.component.html',
  styleUrls: ['./add-procedimento.component.css']
})
export class AddProcedimentoComponent implements OnInit {

  procedimento: Procedimento;

  constructor(private route: ActivatedRoute, private router: Router, private service: ServiceService) {
    this.procedimento = new Procedimento();
   }

  ngOnInit() {
  }

  CadastrarProcedimento(){
    this.service.createProcedimento(this.procedimento).subscribe(resposta => this.ListarExames())
  }

  ListarExames(){
    this.router.navigate(['/listar-exames']);
  }

}
