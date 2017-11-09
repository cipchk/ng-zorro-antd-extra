import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo',
  template: `
<demo-simple></demo-simple>
<div nz-row [nzGutter]="16" style="margin-top: 16px">
    <div nz-col [nzSpan]="12">
        <demo-basic></demo-basic>
    </div>
    <div nz-col [nzSpan]="12">
        <demo-loadmore></demo-loadmore>
    </div>
</div>
<demo-vertical style="display: block; margin-top: 16px"></demo-vertical>
<demo-grid style="display: block; margin-top: 16px"></demo-grid>
<demo-responsive style="display: block; margin-top: 16px"></demo-responsive>
  `
})
export class DemoComponent {
}
