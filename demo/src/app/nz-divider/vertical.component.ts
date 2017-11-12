import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'demo-nz-divider-vertical',
  template: `
  <h4>Vertical</h4>
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
