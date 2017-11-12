import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-nz-card-loading',
  template: `
    <h4>Loading <a href="https://github.com/cipchk/ng-zorro-antd-extra/blob/master/demo/src/app/nz-card/loading.component.ts" target="_blank">source</a></h4>
    <nz-card [nzTitle]="'Card title'" [nzLoading]="true">
        Whatever content
    </nz-card>
`
})
export class DemoNzCardLoadingComponent {
}
