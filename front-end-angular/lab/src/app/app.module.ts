import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarExamesComponent } from './Lab/listar-exames/listar-exames.component';
import { AddExameComponent } from './Lab/add-exame/add-exame.component';
import { AddPacienteComponent } from './Lab/add-paciente/add-paciente.component';
import { AddProcedimentoComponent } from './Lab/add-procedimento/add-procedimento.component';
import {ServiceService} from './Service/service';

@NgModule({
  declarations: [
    AppComponent,
    ListarExamesComponent,
    AddExameComponent,
    AddPacienteComponent,
    AddProcedimentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
