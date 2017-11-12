import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-nz-card-noborder',
  template: `
    <h4>No border</h4>
    <div style="background: #ECECEC; padding: 30px;">
        <nz-card-v3 [nzTitle]="'Card title'" [nzBordered]="false">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </nz-card-v3>
    </div>
`
})
export class DemoNzCardNoBoarderComponent {
}
