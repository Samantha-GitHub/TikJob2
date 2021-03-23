import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logincompany',
  templateUrl: './logincompany.component.html',
  styleUrls: ['./logincompany.component.scss'],
})
export class LogincompanyComponent implements OnInit {
  labels: string[];
  constructor() { }

  ngOnInit(): void {
    const labels = document.querySelectorAll('.form-control label');

    this.labels.forEach((label) => {
      label
        .split('')
        .map(
          (letter, idx) =>
            `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
        )
        .join('');
    });
  }
}
