import { Enumerable } from '../../Enumerable';
declare module "../../Enumerable" {
    interface Enumerable<T> {
        any(predicate: (e: T) => boolean): boolean;
    }
}
Enumerable.prototype.any = function <T>(predicate: (e: T) => boolean) {
    for (let item of this) {
        if (predicate(item)) {
            return true;
        }
    }
    return false;
}