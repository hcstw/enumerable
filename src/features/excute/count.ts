import { Enumerable } from '../../Enumerable';
declare module "../../Enumerable" {
    interface Enumerable<T> {
        count(): number;
        count(predicate: (item: T) => boolean): number;
    }
}
Enumerable.prototype.count = function <T>(predicate?: (item: T) => boolean) {
    if (!predicate) {
        predicate = x => true;
    }
    let c = 0;
    for (let item of this) {
        if (predicate(item)) {
            c++;
        }
    }
    return c;
}