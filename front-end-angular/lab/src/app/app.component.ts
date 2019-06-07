import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab';

  constructor(private router:Router){}

  listarExame(){
    this.router.navigate(["listar-exames"]);
  }
  
  addExame(){
    this.router.navigate(["add-exame"]);
  }

  addPaciente(){
    this.router.navigate(["add-paciente"]);
  }

  addProcedimento(){
    this.router.navigate(["add-procedimento"]);
  }
}
