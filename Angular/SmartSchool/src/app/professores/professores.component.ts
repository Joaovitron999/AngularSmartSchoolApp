import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  title = 'Professores';
  public professores = [ 
    { nome:'Ana'},
    { nome:'Alice'},
    { nome:'Alberto'},
    { nome:'Amanda'},
    { nome:'Arthur'},
    { nome:'Aline'},
    { nome:'Alessandro'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
