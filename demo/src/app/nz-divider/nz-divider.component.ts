import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-nz-divider',
  template: `
<div nz-row [nzGutter]="16">
    <div nz-col [nzSpan]="12">
        <demo-nz-divider-horizontal></demo-nz-divider-horizontal>
    </div>
    <div nz-col [nzSpan]="12">
        <demo-nz-divider-vertical></demo-nz-divider-vertical>
    </div>
</div>
  `
})
export class DemoNzDividerComponent {
}
