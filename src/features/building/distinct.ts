import { Enumerable } from '../../Enumerable';
import { IEqualityComparer } from '../../IEqualityComparer';
declare module "../../Enumerable" {
    interface Enumerable<T> {
        distinct(comparer?: IEqualityComparer<T>): Enumerable<T>;
    }
}
Enumerable.prototype.distinct = function <T>(comparer: IEqualityComparer<T> = (a, b) => a === b) {
    const ref = this;
    return new Enumerable<T>(function* () {
        const cache: T[] = [];
        for (let item of ref) {
            if (cache.findIndex(x => comparer(x, item)) === -1) {
                cache.push(item);
                yield item;
            }
        }
    });
}