import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css'],
})
export class AlunosComponent implements OnInit {
  title = 'Alunos';
  public alunos = [
    { nome:'Marta'},
    { nome:'Luana'},
    { nome:'Marco'},
    { nome:'Jonny'},
    { nome:'Julia'},
    { nome:'Paula'},
    { nome:'Pedro'},
  ];

  constructor() {}

  ngOnInit() {}
}
