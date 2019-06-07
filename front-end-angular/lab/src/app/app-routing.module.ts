import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarExamesComponent } from './Lab/listar-exames/listar-exames.component';
import { AddExameComponent } from './Lab/add-exame/add-exame.component';
import { AddPacienteComponent } from './Lab/add-paciente/add-paciente.component';
import { AddProcedimentoComponent } from './Lab/add-procedimento/add-procedimento.component';

const routes: Routes = [
  {path: 'listar-exames', component:ListarExamesComponent},
  {path: 'add-exame', component:AddExameComponent},
  {path: 'add-paciente', component:AddPacienteComponent},
  {path: 'add-procedimento', component:AddProcedimentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
