import { Enumerable } from "../../Enumerable";
declare module "../../Enumerable" {
    interface Enumerable<T> {
        last(): T;
        last(predicate?: (e: T, i: number) => boolean): T;
        lastOrDefault(predicate?: (e: T, i: number) => boolean): T | undefined;
        lastOrDefault<TDefualt>(predicate?: (e: T, i: number) => boolean, defaultValue?: TDefualt): T | TDefualt | undefined;
    }
}
Enumerable.prototype.lastOrDefault = function <T, TDefualt>(predicate?: (e: T, i: number) => boolean, defaultValue?: TDefualt): T | TDefualt | undefined {
    const iter = (predicate ? this.where(predicate) : this);
    let last: T;
    let has = false;
    for (let e of iter) {
        last = e;
        has = true;
    }
    if (has) {
        return last!;
    }
    return defaultValue;
}
Enumerable.prototype.last = function <T>(predicate?: (e: T, i: number) => boolean): T {
    const iter = (predicate ? this.where(predicate) : this);
    let last: T;
    let empty = true;
    for (let e of iter) {
        last = e;
        empty = false;
    }
    if (empty) {
        throw new Error('collection is empty');
    }
    return last!;
}