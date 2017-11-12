import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-nz-card-basic',
  template: `
    <h4>Basic</h4>
    <nz-card-v3 [nzTitle]="'Card title'">
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
    </nz-card-v3>
`
})
export class DemoNzCardBasicComponent {
}
