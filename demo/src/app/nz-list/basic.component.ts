import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-nz-list-basic',
  template: `
    <nz-card>
        <ng-template #title>Basic list</ng-template>
        <ng-template #body>
            <nz-list [nzDataSource]="data" [nzItemLayout]="'horizontal'">
                <ng-template #item let-item>
                    <nz-list-item>
                        <nz-list-item-meta
                            [nzTitle]="nzTitle"
                            nzAvatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            nzDescription="Ant Design, a design language for background applications, is refined by Ant UED Team">
                            <ng-template #nzTitle>
                                <a href="https://ng.ant.design">{{item.title}}</a>
                            </ng-template>
                        </nz-list-item-meta>
                    </nz-list-item>
                </ng-template>
            </nz-list>
        </ng-template>
    </nz-card>
`
})
export class DemoNzListBasicComponent {
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
