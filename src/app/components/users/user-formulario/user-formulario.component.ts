import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Skill } from 'src/app/interfaces/skill';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-user-formulario',
  templateUrl: './user-formulario.component.html',
  styleUrls: ['./user-formulario.component.scss'],
})
export class UserFormularioComponent implements OnInit {


  allSkills: Skill[];

  constructor(private skillService: SkillsService) {

    this.allSkills = [];
  }

  async ngOnInit() {

    try {
      this.allSkills = await this.skillService.getAll();
      console.log(this.allSkills);

    } catch (error) {

      console.log(error);

    }
  }

  active = 1;
}
