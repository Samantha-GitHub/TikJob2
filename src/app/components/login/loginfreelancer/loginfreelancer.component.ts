import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginfreelancer',
  templateUrl: './loginfreelancer.component.html',
  styleUrls: ['./loginfreelancer.component.scss'],
})
export class LoginfreelancerComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  async onSubmitFreelancer(): Promise<any> {
    // ROUTING TO FORM
    // this.router.navigate(['freelance/edit/', freelance.insertId]);
  }
}
