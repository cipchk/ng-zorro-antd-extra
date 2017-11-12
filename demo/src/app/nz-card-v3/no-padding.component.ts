import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-nz-card-no-padding',
  template: `
    <h4>No padding <a href="https://github.com/cipchk/ng-zorro-antd-extra/blob/master/demo/src/app/nz-card-v3/no-padding.component.ts" target="_blank">source</a></h4>
    <nz-card-v3 nzNoPadding [nzTitle]="'Card title'">
        <p>Card content</p>
        <p>我是无边距的</p>
        <p>Card content</p>
    </nz-card-v3>
`
})
export class DemoNzCardNoPaddingComponent {
}
