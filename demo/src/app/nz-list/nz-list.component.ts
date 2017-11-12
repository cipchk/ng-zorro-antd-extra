import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-nz-list',
  template: `
<demo-nz-list-simple></demo-nz-list-simple>
<div nz-row [nzGutter]="16" style="margin-top: 16px">
    <div nz-col [nzSpan]="12">
        <demo-nz-list-basic></demo-nz-list-basic>
    </div>
    <div nz-col [nzSpan]="12">
        <demo-nz-list-loadmore></demo-nz-list-loadmore>
    </div>
</div>
<demo-nz-list-vertical style="display: block; margin-top: 16px"></demo-nz-list-vertical>
<demo-nz-list-grid style="display: block; margin-top: 16px"></demo-nz-list-grid>
<demo-nz-list-responsive style="display: block; margin-top: 16px"></demo-nz-list-responsive>
  `
})
export class DemoNzListComponent {
}
