import { Enumerable } from "../../Enumerable";
declare module "../../Enumerable" {
    interface Enumerable<T> {
        first(): T;
        first(predicate?: (e: T, i: number) => boolean): T;
        firstOrDefault(predicate?: (e: T, i: number) => boolean): T | undefined;
        firstOrDefault<TDefualt>(predicate?: (e: T, i: number) => boolean, defaultValue?: TDefualt): T | TDefualt | undefined;
    }
}
Enumerable.prototype.firstOrDefault = function <T>(predicate?: (e: T, i: number) => boolean, defaultValue?: T): T | undefined {
    const iter = (predicate ? this.where(predicate as any) : this);
    for (let item of iter) {
        return item;
    }
    return defaultValue;
}
Enumerable.prototype.first = function <T>(predicate?: (e: T, i: number) => boolean): T {
    const iter = (predicate ? this.where(predicate) : this);
    for (let item of iter) {
        return item;
    }
    throw new Error('collection is empty');
}


