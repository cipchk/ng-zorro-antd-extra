import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-nz-list-grid',
  template: `
    <nz-card>
        <ng-template #title>Grid</ng-template>
        <ng-template #body>
            <nz-list [nzDataSource]="data" [nzGrid]="{gutter: 16, span: 6}">
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
export class DemoNzListGridComponent {
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
  ];
}
