import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-nz-card-grid',
  template: `
    <h4>grid <a href="https://github.com/cipchk/ng-zorro-antd-extra/blob/master/demo/src/app/nz-card-v3/grid.component.ts" target="_blank">source</a></h4>
    <nz-card-v3 [nzTitle]="'Card title'">
        <div nz-card-v3-grid style="width: 25%; text-align: center">Content</div>
        <div nz-card-v3-grid style="width: 25%; text-align: center">Content</div>
        <div nz-card-v3-grid style="width: 25%; text-align: center">Content</div>
        <div nz-card-v3-grid style="width: 25%; text-align: center">Content</div>
        <div nz-card-v3-grid style="width: 25%; text-align: center">Content</div>
        <div nz-card-v3-grid style="width: 25%; text-align: center">Content</div>
        <div nz-card-v3-grid style="width: 25%; text-align: center">Content</div>
        <div nz-card-v3-grid style="width: 25%; text-align: center">Content</div>
    </nz-card-v3>
`
})
export class DemoNzCardGridComponent {
}
