import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-simple',
  template: `
<nz-card>
    <ng-template #title>Simple list</ng-template>
    <ng-template #body>
        <div nz-row [nzGutter]="16">
            <div nz-col [nzSpan]="8">
                <h3>Default Size <button nz-button (click)="setLoading()" [nzSize]="'small'">Loading</button></h3>
                <nz-list [nzDataSource]="data" [nzBordered]="true" [nzLoading]="loading">
                    <ng-template #nzHeader>Header</ng-template>
                    <ng-template #nzFooter>Footer</ng-template>
                    <ng-template #nzItem let-item>
                        <nz-list-item>{{item}}</nz-list-item>
                    </ng-template>
                </nz-list>
            </div>
            <div nz-col [nzSpan]="8">
                <h3>Small Size</h3>
                <nz-list [nzDataSource]="data" [nzBordered]="true" [nzLoading]="loading" [nzSize]="'small'">
                    <ng-template #nzHeader>Header</ng-template>
                    <ng-template #nzFooter>Footer</ng-template>
                    <ng-template #nzItem let-item>
                        <nz-list-item>{{item}}</nz-list-item>
                    </ng-template>
                </nz-list>
            </div>
            <div nz-col [nzSpan]="8">
                <h3>Large Size</h3>
                <nz-list [nzDataSource]="data" [nzBordered]="true" [nzLoading]="loading" [nzSize]="'large'">
                    <ng-template #nzHeader>Header</ng-template>
                    <ng-template #nzFooter>Footer</ng-template>
                    <ng-template #nzItem let-item>
                        <nz-list-item>{{item}}</nz-list-item>
                    </ng-template>
                </nz-list>
            </div>
        </div>
    </ng-template>
</nz-card>
`
})
export class DemoSimpleComponent {
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
