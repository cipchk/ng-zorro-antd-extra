import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-nz-radio-extra',
  template: `
  <p>
    <label nz-radio-extra [(ngModel)]="ret"></label>
    result: {{ret}}
  </p>
  <button nz-button (click)="ret = !ret">Change</button>
  `
})
export class DemoNzRadioExtraComponent {
    ret = false;
}
