import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-nz-list-simple',
  template: `
<nz-card>
    <ng-template #title>Simple list</ng-template>
    <ng-template #body>
        <div nz-row [nzGutter]="16">
            <div nz-col [nzSpan]="8">
                <h4>Default Size <button nz-button (click)="setLoading()" [nzSize]="'small'">Loading</button></h4>
                <nz-list [nzDataSource]="data" [nzBordered]="true" [nzLoading]="loading"
                         [nzHeader]="'Header'" [nzFooter]="'Footer'">
                    <ng-template #item let-item>
                        <nz-list-item>{{item}}</nz-list-item>
                    </ng-template>
                </nz-list>
            </div>
            <div nz-col [nzSpan]="8">
                <h4>Small Size</h4>
                <nz-list [nzDataSource]="data" [nzBordered]="true" [nzLoading]="loading" [nzSize]="'small'"
                         [nzHeader]="'Header'" [nzFooter]="'Footer'">
                    <ng-template #item let-item>
                        <nz-list-item>{{item}}</nz-list-item>
                    </ng-template>
                </nz-list>
            </div>
            <div nz-col [nzSpan]="8">
                <h4>Large Size</h4>
                <nz-list [nzDataSource]="data" [nzBordered]="true" [nzLoading]="loading" [nzSize]="'large'"
                         [nzHeader]="'Header'" [nzFooter]="'Footer'">
                    <ng-template #item let-item>
                        <nz-list-item>{{item}}</nz-list-item>
                    </ng-template>
                </nz-list>
            </div>
        </div>
    </ng-template>
</nz-card>
`
})
export class DemoNzListSimpleComponent {
  data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.'
  ];

  loading = false;

  setLoading() {
      this.loading = true;
      setTimeout(() => this.loading = false, 1500);
  }
}
