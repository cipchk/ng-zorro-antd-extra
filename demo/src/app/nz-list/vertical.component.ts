import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-nz-list-vertical',
  template: `
    <nz-card>
        <ng-template #title>Vertical <a href="https://github.com/cipchk/ng-zorro-antd-extra/blob/master/demo/src/app/nz-list/vertical.component.ts" target="_blank">source</a></ng-template>
        <ng-template #body>
            <nz-list [nzDataSource]="data" [nzItemLayout]="'vertical'">
                <ng-template #item let-item>
                    <nz-list-item [nzContent]="item.content" [nzExtra]="nzExtra">
                        <nz-list-item-action><i class="anticon anticon-star-o" style="margin-right: 8px;"></i> 156</nz-list-item-action>
                        <nz-list-item-action><i class="anticon anticon-like-o" style="margin-right: 8px;"></i> 156</nz-list-item-action>
                        <nz-list-item-action><i class="anticon anticon-message" style="margin-right: 8px;"></i> 2</nz-list-item-action>
                        <nz-list-item-meta
                            [nzAvatar]="item.avatar"
                            [nzTitle]="nzTitle"
                            [nzDescription]="item.description">
                            <ng-template #nzTitle><a href="{{item.href}}">{{item.title}}</a></ng-template>
                        </nz-list-item-meta>
                        <ng-template #nzExtra>
                            <img width="272" alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png">
                        </ng-template>
                    </nz-list-item>
                </ng-template>
                <ng-template #pagination>
                    <nz-pagination [nzPageIndex]="1" [nzTotal]="50"></nz-pagination>
                </ng-template>
            </nz-list>
        </ng-template>
    </nz-card>
`
})
export class DemoNzListVerticalComponent {
    data = new Array(5).fill({}).map((i, index) => {
        return {
            href: 'http://ant.design',
            title: `ant design part ${index}`,
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
            content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        };
    });
}
