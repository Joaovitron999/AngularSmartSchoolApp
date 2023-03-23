import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css'],
})
export class AlunosComponent implements OnInit {
  public titulo = 'Alunos';
  public alunoSelecionado:Aluno;
  public alunos = [
    { id: 1, nome:'Marta',sobrenome:'Wayne', telefone:'28374639'},
    { id: 2, nome:'Luana',sobrenome:'Parker', telefone:'17829304'},
    { id: 3, nome:'Marco',sobrenome:'Marxs', telefone:'92836142'},
    { id: 4, nome:'Jonny',sobrenome:'Kent', telefone:'17493026'},
    { id: 5, nome:'Julia',sobrenome:'Julias', telefone:'18273943'},
    { id: 6, nome:'Paula',sobrenome:'Tejano', telefone:'20916486'},
    { id: 7, nome:'Pedro',sobrenome:'Primo', telefone:'12392034'},
  ];

  alunoSelect(aluno: Aluno) {
    this.alunoSelecionado = aluno;
  }
  voltar() {
    this.alunoSelecionado = null;

  }
  constructor() {}

  ngOnInit() {}
}
