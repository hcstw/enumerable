import { Enumerable } from '../../Enumerable';
declare module "../../Enumerable" {
    interface Enumerable<T> {
        where(predicate: (e: T, i: number) => boolean): Enumerable<T>;
    }
}
Enumerable.prototype.where = function <T>(predicate: (e: T, i: number) => boolean) {
    const ref = this;
    return new Enumerable(function* () {
        let i = 0;
        for (const item of ref) {
            if (predicate(item, i++)) {
                yield item;
            }
        }
    });
}