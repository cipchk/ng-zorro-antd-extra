import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-basic',
  template: `
    <nz-card>
        <ng-template #title>Basic list</ng-template>
        <ng-template #body>
            <nz-list [nzDataSource]="data" [nzItemLayout]="'horizontal'">
                <ng-template #nzItem let-item>
                    <nz-list-item>
                        <nz-list-item-meta>
                            <ng-template #nzAvatar>
                                <nz-avatar [nzSrc]="'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'"></nz-avatar>
                            </ng-template>
                            <ng-template #nzTitle>
                                <a href="https://ng.ant.design">{{item.title}}</a>
                            </ng-template>
                            <ng-template #nzDescription>
                                Ant Design, a design language for background applications, is refined by Ant UED Team
                            </ng-template>
                        </nz-list-item-meta>
                    </nz-list-item>
                </ng-template>
            </nz-list>
        </ng-template>
    </nz-card>
`
})
export class DemoBasicComponent {
  data = [
    {
      title: 'Ant Design Title 1'
    },
    {
      title: 'Ant Design Title 2'
    },
    {
      title: 'Ant Design Title 3'
    },
    {
      title: 'Ant Design Title 4'
    }
  ];
}
