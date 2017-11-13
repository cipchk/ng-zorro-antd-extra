import { Component } from '@angular/core';

@Component({
    selector: 'demo-home',
    template: `
    <nz-list>
        <nz-list-item><a [routerLink]="['/list']">nz-list</a></nz-list-item>
        <nz-list-item><a [routerLink]="['/card']">nz-card</a></nz-list-item>
        <nz-list-item><a [routerLink]="['/divider']">nz-divider</a></nz-list-item>
        <nz-list-item><a [routerLink]="['/icon']">nz-icon</a></nz-list-item>
    </nz-list>
    `
})
export class DemoHomeComponent {

}
