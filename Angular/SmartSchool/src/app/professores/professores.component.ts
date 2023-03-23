import { Component, OnInit } from '@angular/core';
import { Professor } from '../models/Professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  titulo = 'Professores';
  public professorSelecionado: Professor | undefined;
  public professores = [
    { id: 1 ,nome:'Ana', disciplina: 'Matemática'},
    { id: 2,nome:'Alice', disciplina: 'Fisica'},
    { id: 3,nome:'Alberto', disciplina: 'Portugues'},
    { id: 4,nome:'Amanda', disciplina: 'Ciências'},
    { id: 5,nome:'Arthur', disciplina: 'Educação Fisica'},
    { id: 6,nome:'Aline', disciplina: 'Geografia'},
    { id: 7,nome:'Alessandro', disciplina: 'História'},
  ];

  professorSelect(professor: Professor) {
    this.professorSelecionado = professor;
  }
  voltar() {
    this.professorSelecionado = undefined;
  }
  constructor() { }

  ngOnInit() {
  }

}
