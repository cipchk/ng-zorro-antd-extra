import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'demo-nz-card-more',
  template: `
    <h4>Support more content configuration <a href="https://github.com/cipchk/ng-zorro-antd-extra/blob/master/demo/src/app/nz-card-v3/more.component.ts" target="_blank">source</a></h4>
    <nz-card-v3 style="width: 300px">
        <ng-template #cover>
            <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png">
        </ng-template>
        <nz-card-meta
            nzAvatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            nzTitle="Europe Street beat"
            nzDescription="www.instagram.com">
        </nz-card-meta>
        <nz-card-action><i class="anticon anticon-setting" (click)="msg.info('setting')"></i></nz-card-action>
        <nz-card-action><i class="anticon anticon-edit" (click)="msg.info('edit')"></i></nz-card-action>
        <nz-card-action><i class="anticon anticon-ellipsis" (click)="msg.info('more')"></i></nz-card-action>
    </nz-card-v3>
`
})
export class DemoNzCardMoreComponent {
    constructor(public msg: NzMessageService) {}
}
