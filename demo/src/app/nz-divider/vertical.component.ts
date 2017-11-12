import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'demo-nz-divider-vertical',
  template: `
  <h4>Vertical <a href="https://github.com/cipchk/ng-zorro-antd-extra/blob/master/demo/src/app/nz-divider/vertical.component.ts" target="_blank">source</a></h4>
  Text
  <nz-divider nzType="vertical"></nz-divider>
  <a (click)="msg.success('link')">Link</a>
  <nz-divider nzType="vertical"></nz-divider>
  <a (click)="msg.success('link')">Link</a>
`
})
export class DemoNzDividerVerticalComponent {
    constructor(public msg: NzMessageService) {}
}
