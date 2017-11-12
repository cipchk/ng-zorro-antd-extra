import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-nz-card-column',
  template: `
    <h4>Card in column <a href="https://github.com/cipchk/ng-zorro-antd-extra/blob/master/demo/src/app/nz-card-v3/column.component.ts" target="_blank">source</a></h4>
    <div style="background:#ECECEC; padding: 30px">
        <div nz-row [nzGutter]="16">
            <div nz-col [nzSpan]="8">
                <nz-card-v3 [nzTitle]="'Card title'" [nzBordered]="false">
                    <p>Card content</p>
                </nz-card-v3>
            </div>
            <div nz-col [nzSpan]="8">
                <nz-card-v3 [nzTitle]="'Card title'" [nzBordered]="false">
                    <p>Card content</p>
                </nz-card-v3>
            </div>
            <div nz-col [nzSpan]="8">
                <nz-card-v3 [nzTitle]="'Card title'" [nzBordered]="false">
                    <p>Card content</p>
                </nz-card-v3>
            </div>
        </div>
    </div>
`
})
export class DemoNzCardColumnComponent {
}
