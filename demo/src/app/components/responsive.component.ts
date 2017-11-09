import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-responsive',
  template: `
    <nz-card>
        <ng-template #title>Responsive</ng-template>
        <ng-template #body>
            <nz-list [nzDataSource]="data" [nzGrid]="{gutter: 16, xs: 24, sm: 12, md: 6, lg: 6, xl: 4 }">
                <ng-template #nzItem let-item>
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
export class DemoResponsiveComponent {
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
