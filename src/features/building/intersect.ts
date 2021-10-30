import { Enumerable } from '../../Enumerable';
import { EnumerableLike } from '../../EnumerableLike';
import { IEqualityComparer } from '../../IEqualityComparer';
declare module "../../Enumerable" {
    interface Enumerable<T> {
        intersect(set: EnumerableLike<T>, comparer?: IEqualityComparer<T>): Enumerable<T>;
    }
}
Enumerable.prototype.intersect = function <T>(set: EnumerableLike<T>, comparer: IEqualityComparer<T> = (a, b) => a === b) {
    const ref = this;
    return new Enumerable<T>(function* () {
        const e = Enumerable.from(set);
        for (let item of ref) {
            if (e.contains(item, comparer)) {
                yield item;
            }
        }
    });
}