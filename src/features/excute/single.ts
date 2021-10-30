import { Enumerable } from "../../Enumerable";
declare module "../../Enumerable" {
    interface Enumerable<T> {
        single(): T;
        single(predicate?: (e: T, i: number) => boolean): T;
        singleOrDefault(predicate?: (e: T, i: number) => boolean): T | undefined;
        singleOrDefault<TDefualt>(predicate?: (e: T, i: number) => boolean, defaultValue?: TDefualt): T | TDefualt | undefined;
    }
}
Enumerable.prototype.singleOrDefault = function <T>(predicate?: (e: T, i: number) => boolean, defaultValue?: T): T | undefined {
    const iter = (predicate ? this.where(predicate as any) : this);
    let has = false;
    let result: T;
    for (let item of iter) {
        result = item;
        if (has) {
            throw new Error('collection does not contain exactly one element');
        }
        has = true;
    }
    if (has) {
        return result!;
    }
    return defaultValue;
}
Enumerable.prototype.single = function <T>(predicate?: (e: T, i: number) => boolean): T {
    const iter = (predicate ? this.where(predicate) : this);
    let has = false;
    let result: T;
    for (let item of iter) {
        result = item;
        if (has) {
            throw new Error('collection does not contain exactly one element');
        }
        has = true;
    }
    if (has) {
        return result!;
    }
    throw new Error('collection is empty');
}