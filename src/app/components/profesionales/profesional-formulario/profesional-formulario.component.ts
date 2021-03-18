import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Skill } from 'src/app/interfaces/skill';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-profesional-formulario',
  templateUrl: './profesional-formulario.component.html',
  styleUrls: ['./profesional-formulario.component.scss'],
})
export class ProfesionalFormularioComponent implements OnInit {
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
