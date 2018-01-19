export function toBoolean(value: boolean | string): boolean {
    return value === '' || (value && value !== 'false');
}

const seenDeprecations: any = {};
export function deprecation(msg: string) {
    if (seenDeprecations[msg] !== true) {
        seenDeprecations[msg] = true;
        // tslint:disable-next-line:no-unused-expression
        console && console.warn('DEPRECATION: ' + msg);
    }
}
