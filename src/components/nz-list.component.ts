import { Component, ViewEncapsulation, Input, TemplateRef, ContentChild, ElementRef, Renderer2, OnChanges, SimpleChanges, OnInit } from '@angular/core';

export interface NzListGrid {
    /** 列数 */
    span?: number;
    /** 栅格间隔 */
    gutter?: number;
    /** `<576px` 展示的列数 */
    xs?: number;
    /** `≥576px` 展示的列数 */
    sm?: number;
    /** `≥768px` 展示的列数 */
    md?: number;
    /** `≥992px` 展示的列数 */
    lg?: number;
    /** `≥1200px` 展示的列数 */
    xl?: number;
    /** `≥1600px` 展示的列数，暂不支持2.x antd */
    xxl?: number;
}

@Component({
    selector: 'nz-list',
    template: `
    <ng-template #itemsTpl>
        <ng-container *ngFor="let item of nzDataSource; let index = index">
            <ng-template
                [ngTemplateOutlet]="nzItem"
                [ngTemplateOutletContext]="{ $implicit: item, item: item, index: index }"></ng-template>
        </ng-container>
    </ng-template>
    <div *ngIf="nzHeader" class="ant-list-header">
        <ng-template [ngTemplateOutlet]="nzHeader"></ng-template>
    </div>
    <nz-spin [nzSpinning]="nzLoading">
        <div *ngIf="nzGrid; else itemsTpl" nz-row [nzGutter]="nzGrid.gutter">
            <div nz-col [nzSpan]="nzGrid.span" [nzXs]="nzGrid.xs" [nzSm]="nzGrid.sm" [nzMd]="nzGrid.md" [nzLg]="nzGrid.lg" [nzXl]="nzGrid.xl"
                *ngFor="let item of nzDataSource; let index = index">
                <ng-template
                    [ngTemplateOutlet]="nzItem"
                    [ngTemplateOutletContext]="{ $implicit: item, item: item, index: index }"></ng-template>
            </div>
        </div>
    </nz-spin>
    <ng-template [ngTemplateOutlet]="nzLoadMore"></ng-template>
    <ng-content></ng-content>
    <div *ngIf="nzPagination" class="ant-list-pagination">
        <ng-template [ngTemplateOutlet]="nzPagination"></ng-template>
    </div>
    <div *ngIf="nzFooter" class="ant-list-footer">
        <ng-template [ngTemplateOutlet]="nzFooter"></ng-template>
    </div>
    `,
    styleUrls: [
        // todo: ngm-cli not supported less
        './style/index.css',
        './style/patch.css'
    ],
    encapsulation: ViewEncapsulation.None
})
export class NzListComponent implements OnChanges, OnInit {

    // region: fields
    @Input() nzDataSource: any[] = [];
    @Input() nzBordered = false;
    @Input() nzGrid: NzListGrid;
    @ContentChild('nzHeader') nzHeader: TemplateRef<any>;
    @ContentChild('nzFooter') nzFooter: TemplateRef<any>;
    @ContentChild('nzItem') nzItem: TemplateRef<any>;
    @Input() nzSize: 'default' | 'small' | 'large' = 'default';
    @Input() nzItemLayout: 'vertical' | 'horizontal' = 'horizontal';
    @Input() nzLoading = false;
    @ContentChild('nzLoadMore') nzLoadMore: TemplateRef<any>;
    @ContentChild('nzPagination') nzPagination: TemplateRef<any>;
    @Input() nzSplit = true;
    // endregion

    // region: styles

    _prefixCls = 'ant-list';
    _classList: string[] = [];

    _setClassMap() {
        this._renderer.removeAttribute(this._elementRef.nativeElement, 'class');

        this._classList = [
            this._prefixCls,
            this.nzItemLayout === 'vertical' && `${this._prefixCls}-vertical`,
            this.nzSize === 'large' && `${this._prefixCls}-lg`,
            this.nzSize === 'small' && `${this._prefixCls}-sm`,
            this.nzSplit && `${this._prefixCls}-split`,
            this.nzBordered && `${this._prefixCls}-bordered`,
            this.nzLoading && `${this._prefixCls}-loading`,
            this.nzGrid && `${this._prefixCls}-grid`,
            !!(this.nzLoadMore || this.nzPagination || this.nzFooter) && `${this._prefixCls}-something-after-last-item`
        ].filter(item => !!item);

        this._classList.forEach(_className => {
            this._renderer.addClass(this._elementRef.nativeElement, _className);
        });
    }

    // endregion

    constructor(private _elementRef: ElementRef, private _renderer: Renderer2) { }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        this._setClassMap();
    }

}
