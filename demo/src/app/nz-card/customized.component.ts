import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-nz-card-customized',
  template: `
    <h4>customized <a href="https://github.com/cipchk/ng-zorro-antd-extra/blob/master/demo/src/app/nz-card/customized.component.ts" target="_blank">source</a></h4>
    <nz-card nzHoverable style="width: 240px">
        <ng-template #cover>
            <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png">
        </ng-template>
        <nz-card-meta
            nzTitle="Europe Street beat"
            nzDescription="www.instagram.com">
        </nz-card-meta>
    </nz-card>
`
})
export class DemoNzCardCustomizedComponent {
}
