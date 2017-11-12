import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-nz-card-customized',
  template: `
    <h4>customized</h4>
    <nz-card-v3 nzHoverable style="width: 240px">
        <ng-template #cover>
            <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png">
        </ng-template>
        <nz-card-meta
            nzTitle="Europe Street beat"
            nzDescription="www.instagram.com">
        </nz-card-meta>
    </nz-card-v3>
`
})
export class DemoNzCardCustomizedComponent {
}
