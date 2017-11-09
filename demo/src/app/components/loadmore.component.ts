import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';

const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

@Component({
  selector: 'demo-loadmore',
  template: `
    <nz-card>
        <ng-template #title>Basic list</ng-template>
        <ng-template #body>
            <nz-list [nzDataSource]="data" [nzItemLayout]="'horizontal'" [nzLoading]="loading">
                <ng-template #nzItem let-item>
                    <nz-list-item>
                        <nz-list-item-action><a (click)="edit(item)">edit</a></nz-list-item-action>
                        <nz-list-item-action><a (click)="edit(item)">more</a></nz-list-item-action>
                        <nz-list-item-meta>
                            <ng-template #nzAvatar>
                                <nz-avatar [nzSrc]="'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'"></nz-avatar>
                            </ng-template>
                            <ng-template #nzTitle>
                                <a href="https://ng.ant.design">{{item.name.last}}</a>
                            </ng-template>
                            <ng-template #nzDescription>
                                Ant Design, a design language for background applications, is refined by Ant UED Team
                            </ng-template>
                        </nz-list-item-meta>
                        <div>content</div>
                    </nz-list-item>
                </ng-template>
                <ng-template #nzLoadMore>
                    <div *ngIf="showLoadMore" style="text-align: center; margin-top: 12px; height: 32px; line-height: 32px;">
                        <button nz-button *ngIf="!loadingMore" (click)="loadMore()">loading more</button>
                        <nz-spin *ngIf="loadingMore" [nzSpinning]="loadingMore"></nz-spin>
                    </div>
                </ng-template>
            </nz-list>
        </ng-template>
    </nz-card>
`
})
export class DemoLoadMoreComponent implements OnInit {
    data = [];
    loading = false;
    loadingMore = false;
    showLoadMore = true;
    pi = 1;
    ps = 5;
    show_max_pi = 5;

    constructor(private http: HttpClient, private msg: NzMessageService) {}

    ngOnInit() {
        this.getData();
    }

    getData() {
        if (this.pi === 1)
            this.loading = true;
        else
            this.loadingMore = true;

        this.http.get(fakeDataUrl).subscribe((res: any) => {
            if (this.pi === 1) {
                this.data = res.results;
                this.loading = false;
            } else {
                this.data = this.data.concat(res.results);
                this.loadingMore = false;
            }
            this.showLoadMore = this.pi <= this.show_max_pi;
        });
    }

    loadMore() {
        ++this.pi;
        this.getData();
    }

    edit(item: any) {
        this.msg.success(item.email);
    }
}
