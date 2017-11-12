import { Component } from '@angular/core';

@Component({
    selector: 'demo-card',
    template: `
    <div nz-row [nzGutter]="32" style="margin-bottom: 16px;">
        <div nz-col [nzSpan]="8">
            <demo-nz-card-basic></demo-nz-card-basic>
        </div>
        <div nz-col [nzSpan]="8">
            <demo-nz-card-noborder></demo-nz-card-noborder>
        </div>
        <div nz-col [nzSpan]="8">
            <demo-nz-card-simple></demo-nz-card-simple>
        </div>
    </div>
    <div nz-row [nzGutter]="32" style="margin-bottom: 16px;">
        <div nz-col [nzSpan]="8">
            <demo-nz-card-customized></demo-nz-card-customized>
        </div>
        <div nz-col [nzSpan]="16">
            <demo-nz-card-column></demo-nz-card-column>
        </div>
    </div>
    <div nz-row [nzGutter]="32" style="margin-bottom: 16px;">
        <div nz-col [nzSpan]="8">
            <demo-nz-card-loading></demo-nz-card-loading>
        </div>
        <div nz-col [nzSpan]="16">
            <demo-nz-card-grid></demo-nz-card-grid>
        </div>
    </div>
    <div nz-row [nzGutter]="32" style="margin-bottom: 16px;">
        <div nz-col [nzSpan]="8">
            <demo-nz-card-inner></demo-nz-card-inner>
        </div>
        <div nz-col [nzSpan]="8">
            <demo-nz-card-tab></demo-nz-card-tab>
        </div>
        <div nz-col [nzSpan]="8">
            <demo-nz-card-more></demo-nz-card-more>
        </div>
    </div>
    <div nz-row [nzGutter]="32">
        <div nz-col [nzSpan]="8">
            <demo-nz-card-no-padding></demo-nz-card-no-padding>
        </div>
        <div nz-col [nzSpan]="8">
            <demo-nz-card-compatible></demo-nz-card-compatible>
        </div>
        <div nz-col [nzSpan]="8">
        </div>
    </div>
    `
})
export class DemoNzCardComponent {

}
