import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'demo-nz-card-inner',
  template: `
    <h4>inner <a href="https://github.com/cipchk/ng-zorro-antd-extra/blob/master/demo/src/app/nz-card-v3/inner.component.ts" target="_blank">source</a></h4>
    <nz-card-v3 [nzTitle]="'Card title'">
        <h5 style="font-size: 14px; margin-bottom: 8px;">Group title</h5>
        <nz-card-v3 nzType="inner" [nzTitle]="'Inner Card title'">
            <ng-template #extra>
                <a (click)="msg.success('more')">More</a>
            </ng-template>
            Inner Card content
        </nz-card-v3>
        <nz-card-v3 nzType="inner" [nzTitle]="'Inner Card title'" style="margin-top: 16px;">
            <ng-template #extra>
                <a (click)="msg.success('more')">More</a>
            </ng-template>
            Inner Card content
        </nz-card-v3>
    </nz-card-v3>
`
})
export class DemoNzCardInnerComponent {
    tabs = [
        {
          name: 'Tab 1'
        },
        {
          name: 'Tab 2'
        }
    ];
    constructor(public msg: NzMessageService) {}

    closeTab(tab: any) {
        console.log(tab);
    }
}
