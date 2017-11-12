import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-nz-list-responsive',
  template: `
    <nz-card>
        <ng-template #title>Responsive <a href="https://github.com/cipchk/ng-zorro-antd-extra/blob/master/demo/src/app/nz-list/responsive.component.ts" target="_blank">source</a></ng-template>
        <ng-template #body>
            <nz-list [nzDataSource]="data" [nzGrid]="{gutter: 16, xs: 24, sm: 12, md: 6, lg: 6, xl: 4 }">
                <ng-template #item let-item>
                    <nz-list-item>
                        <nz-card>
                            <ng-template #title>{{item.title}}</ng-template>
                            <ng-template #body>Card content</ng-template>
                        </nz-card>
                    </nz-list-item>
                </ng-template>
            </nz-list>
        </ng-template>
    </nz-card>
`
})
export class DemoNzListResponsiveComponent {
  data = [
    {
      title: 'Title 1',
    },
    {
      title: 'Title 2',
    },
    {
      title: 'Title 3',
    },
    {
      title: 'Title 4',
    },
    {
      title: 'Title 5',
    },
    {
      title: 'Title 6',
    },
  ];
}
