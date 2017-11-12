import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-nz-card-loading',
  template: `
    <h4>Loading</h4>
    <nz-card-v3 [nzTitle]="'Card title'" [nzLoading]="true">
        Whatever content
    </nz-card-v3>
`
})
export class DemoNzCardLoadingComponent {
}
