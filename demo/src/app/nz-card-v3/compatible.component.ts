import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-nz-card-compatible',
  template: `
    <h4>Compatible 2.x <strong>Not Recommended!!</strong> <a href="https://github.com/cipchk/ng-zorro-antd-extra/blob/master/demo/src/app/nz-card-v3/compatible.component.ts" target="_blank">source</a></h4>
    <nz-card-v3>
        <ng-template #title>Card title</ng-template>
        <ng-template #body>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </ng-template>
    </nz-card-v3>
`
})
export class DemoNzCardCompatibleComponent {
}
