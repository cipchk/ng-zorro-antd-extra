# ng-list-antd
A simplify list of antd.

[![NPM version](https://img.shields.io/npm/v/ng-list-antd.svg)](https://www.npmjs.com/package/ng-list-antd)
[![Build Status](https://travis-ci.org/cipchk/ng-list-antd.svg?branch=master)](https://travis-ci.org/cipchk/ng-list-antd)

## Demo

[Live Demo](https://cipchk.github.io/ng-list-antd)

## Dependencies

+ `ng-zorro-antd` **^0.5.0**

## Usage & Installation

Install `ng-list-antd` from `npm`

```
npm install ng-list-antd --save
```

Import the `NzListModule` in to your root `AppModule`.

```
import { NzListModule } from 'ng-list-antd';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    imports: [BrowserModule, NzListModule, NgZorroAntdModule.forRoot()],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

### Usage

```typescript
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-basic',
  template: `
    <nz-card>
        <ng-template #title>Basic list</ng-template>
        <ng-template #body>
            <nz-list [nzDataSource]="data" [nzItemLayout]="'horizontal'">
                <ng-template #nzTemplate let-item>
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
```

## API

### `nz-list`

| Name    | Type           | Default  | Summary |
| ------- | ------------- | ----- | ----- |
| nzDataSource | `any[]` |  | Data record array to be displayed |
| nzBordered | `boolean` | `false` | Toggles rendering of the border around the list |
| nzGrid | `NzListGrid` |  | The grid type of list. You can set grid to something like `{ gutter: 16, span: 6 }` |
| nzItem | `TemplateRef<any>` |  | List item renderer |
| nzHeader | `string, TemplateRef<any>` |  | List header renderer |
| nzFooter | `string, TemplateRef<any>` |  | List footer renderer |
| nzSize | `default,small,large` | `default` | Size of list |
| nzItemLayout | `horizontal,vertical` | `horizontal` | The layout of list, default is `horizontal`, If a vertical list is desired, set the itemLayout property to `vertical` |
| nzLoading | `boolean` |  | Shows a loading indicator while the contents of the list are being fetched |
| nzLoadMore | `TemplateRef<any>` |  | Shows a load more content |
| nzPagination | `TemplateRef<any>` |  | Shows a pagination content |
| nzSplit | `boolean` |  | Toggles rendering of the split under the list item |

### `NzListGrid`

| Name    | Type           | Default  | Summary |
| ------- | ------------- | ----- | ----- |
| span | `number` |  | raster number of cells to occupy, 0 corresponds to `display: none` |
| gutter | `number` |  | spacing between grids |
| xs | `number` |  | `<768px` and also default setting, could be a `span` value or an object containing above props |
| sm | `number` |  | `≥768px`, could be a `span` value or an object containing above props |
| md | `number` |  | `≥992px`, could be a `span` value or an object containing above props |
| lg | `number` |  | `≥1200px`, could be a `span` value or an object containing above props |
| xl | `number` |  | `≥1600px`, could be a `span` value or an object containing above props |
| xxl | `number` |  | only supported antd 3.x |

### `nz-list-item`

| Name    | Type           | Default  | Summary |
| ------- | ------------- | ----- | ----- |
| nzContent | `string, TemplateRef<any>` |  | Content renderer |
| nzExtra | `string, TemplateRef<any>` |  | The extra content of list item. If `itemLayout` is `vertical`, shows the content on right, otherwise shows content on the far right. |

### `nz-list-item-action`

The actions content of list item. If itemLayout is vertical, shows the content on bottom, otherwise shows content on the far right.

### `nz-list-item-meta`

| Name    | Type           | Default  | Summary |
| ------- | ------------- | ----- | ----- |
| nzAvatar | `string, TemplateRef<any>` |  | The avatar of list item |
| nzDescription | `string, TemplateRef<any>` |  | The description of list item |
| nzTitle | `string, TemplateRef<any>` |  | The title of list item |

## Troubleshooting

Please follow this guidelines when reporting bugs and feature requests:

1. Use [GitHub Issues](https://github.com/cipchk/ng-list-antd/issues) board to report bugs and feature requests (not our email address)
2. Please **always** write steps to reproduce the error. That way we can focus on fixing the bug, not scratching our heads trying to reproduce it.

Thanks for understanding!

### License

The MIT License (see the [LICENSE](https://github.com/cipchk/ng-list-antd/blob/master/LICENSE) file for the full text)
