import { Enumerable } from '../../Enumerable';
declare module "../../Enumerable" {
    interface Enumerable<T> {
        defaultIfEmpty(defaultItem: T): Enumerable<T>;
    }
}
Enumerable.prototype.defaultIfEmpty = function <T>(defaultItem: T) {
    const ref = this;
    return new Enumerable<T>(function* () {
        let hasItem = false;
        for (let item of ref) {
            hasItem = true;
            yield item;
        }
        if (!hasItem) {
            yield defaultItem;
        }
    });
}