# ng-zorro-antd-extra

`ng-zorro-antd` extra episode!

> so as to consider future compatibility in ng-zorro-antd 3.x, `ng-list-antd` was changed to `ng-zorro-antd-extra`.

[![NPM version](https://img.shields.io/npm/v/ng-zorro-antd-extra.svg)](https://www.npmjs.com/package/ng-zorro-antd-extra)
[![Build Status](https://travis-ci.org/cipchk/ng-zorro-antd-extra.svg?branch=master)](https://travis-ci.org/cipchk/ng-zorro-antd-extra)

## Demo

[Live Demo](https://cipchk.github.io/ng-zorro-antd-extra)

## Dependencies

+ `ng-zorro-antd` **^0.5.0**

## INCLUCE COMPONENTS

| Name    | API  | Status  |
| ------- | ------------- | -------- |
| `nz-list` | [link](./src/nz-list/index.md) | Finished |
| `nz-card-v3` | [link](./src/nz-card-v3/index.md) | Finished |
| `nz-divider` | [link](./src/nz-divider/index.md) | Finished |

## Usage & Installation

Install `ng-zorro-antd-extra` from `npm`

```
npm install ng-zorro-antd-extra --save
```

Import the `NzListModule` in to your root `AppModule`.

```typescript
import { NgZorroAntdExtraModule } from 'ng-zorro-antd-extra';
// or
// import { NzListModule, NzCardV3Module, NzDividerModule } from 'ng-zorro-antd-extra';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    imports: [
        NgZorroAntdModule.forRoot(),
        NgZorroAntdExtraModule.forRoot()
    ]
})
export class AppModule { }
```

## Troubleshooting

Please follow this guidelines when reporting bugs and feature requests:

1. Use [GitHub Issues](https://github.com/cipchk/ng-zorro-antd-extra/issues) board to report bugs and feature requests (not our email address)
2. Please **always** write steps to reproduce the error. That way we can focus on fixing the bug, not scratching our heads trying to reproduce it.

Thanks for understanding!

### License

The MIT License (see the [LICENSE](https://github.com/cipchk/ng-zorro-antd-extra/blob/master/LICENSE) file for the full text)
