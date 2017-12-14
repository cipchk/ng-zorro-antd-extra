import { Component, ViewEncapsulation, TemplateRef, Input, ContentChildren, QueryList, OnInit, AfterViewInit, ElementRef, Renderer2, OnChanges, SimpleChanges, ContentChild, EventEmitter, Output } from '@angular/core';
import { NzCardTabComponent } from './nz-card-tab.component';
import { NzCardGridDirective } from './nz-card-grid.directive';
import { NzCardActionComponent } from './nz-card-action.component';

@Component({
    selector: 'nz-card',
    templateUrl: './nz-card.component.html',
    styleUrls: [
        './style/index.less',
        './style/patch.less'
    ],
    encapsulation: ViewEncapsulation.None
})
export class NzCardComponent implements OnInit, OnChanges, AfterViewInit {

    // region: fieds

    @Input() nzLoading = false;

    @Input() nzBordered = true;

    @Input() nzHoverable: boolean;

    @Input() nzNoPadding: boolean;

    @Input() nzBodyStyle: Object;

    // @deprecated 过期属性，请使用 `nzHoverable`
    @Input() nzNoHovering: boolean;

    @Input() nzType?: 'inner';

    _titleHas = false;
    _title = '';
    _titleTpl: TemplateRef<any>;
    @Input()
    set nzTitle(value: string | TemplateRef<any>) {
        if (value instanceof TemplateRef)
            this._titleTpl = value;
        else
            this._title = value;

        this._titleHas = !!value;
    }

    // @deprecated 过期属性，请使用 `nzTitle`
    @ContentChild('title') title: TemplateRef<any>;

    @ContentChild('extra') extra: TemplateRef<any>;

    @ContentChild('cover') cover: TemplateRef<any>;

    @ContentChild('body') body: TemplateRef<any>;

    @Input() nzTabSelectedIndex = 0;

    @Output() nzTabChange: EventEmitter<any> = new EventEmitter<any>(true);

    @ContentChildren(NzCardTabComponent) tabList: QueryList<NzCardTabComponent>;

    @ContentChildren(NzCardGridDirective) gridList: QueryList<NzCardGridDirective>;

    @ContentChildren(NzCardActionComponent) actionList: QueryList<NzCardActionComponent>;

    _tabContent: TemplateRef<any>;

    // endregion

    // region: set class

    _prefixCls = 'ant-card';
    _classList: string[] = [];

    // For 2.x compatible
    getCompatibleHoverable() {
        const status = typeof this.nzHoverable !== 'undefined' && this.nzHoverable !== false;
        if (typeof this.nzNoHovering !== 'undefined') {
            return !this.nzNoHovering || status;
        }
        return status;
    }

    _setClassMap() {
        this._classList.forEach(cls => this._renderer.removeClass(this._el.nativeElement, cls));

        this._classList = [
            this._prefixCls,
            this.nzLoading && `${this._prefixCls}-loading`,
            typeof this.nzBordered !== 'undefined' && this.nzBordered !== false && `${this._prefixCls}-bordered`,
            this.getCompatibleHoverable() && `${this._prefixCls}-hoverable`,
            typeof this.nzNoPadding !== 'undefined' && this.nzNoPadding !== false && `${this._prefixCls}-no-padding`,
            // padding-transition
            // transition
            this.gridList && this.gridList.length && `${this._prefixCls}-contain-grid`,
            this.tabList && this.tabList.length && `${this._prefixCls}-contain-tabs`,
            !!this.nzType && `${this._prefixCls}-type-${this.nzType}`
        ].filter(item => !!item);

        this._classList.forEach(cls => this._renderer.addClass(this._el.nativeElement, cls));
    }

    // endregion

    constructor(private _el: ElementRef, private _renderer: Renderer2) { }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        this._setClassMap();
        // 若在此进行 `body` 赋值会导致变化检测问题，因此 `setTimeout` 只是一个小技巧罢了
        setTimeout(() => {
            if (!this.body && this.tabList && this.tabList.length > 0)
                this.body = this.tabList.first.contentTpl;
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        this._setClassMap();
    }

    _tabChange(value: any) {
        this.body = this.tabList.find((item, idx) => idx === value.index).contentTpl;
        this.nzTabChange.emit(value);
    }
}
