import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>ng-list-antd</h1>
    <p>A simplify list of antd.</p>
    <div style="margin-top: 16px;">
        <demo></demo>
    </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
}
