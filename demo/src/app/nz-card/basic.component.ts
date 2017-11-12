import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-nz-card-basic',
  template: `
    <h4>Basic <a href="https://github.com/cipchk/ng-zorro-antd-extra/blob/master/demo/src/app/nz-card/basic.component.ts" target="_blank">source</a></h4>
    <nz-card [nzTitle]="'Card title'">
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
    </nz-card>
`
})
export class DemoNzCardBasicComponent {
}
