import { Enumerable } from '../../Enumerable';
declare module "../../Enumerable" {
    interface Enumerable<T> {
        all(predicate: (e: T) => boolean): boolean;
    }
}
Enumerable.prototype.all = function <T>(predicate: (e: T) => boolean) {
    for (let item of this) {
        if (!predicate(item)) {
            return false;
        }
    }
    return true;
}