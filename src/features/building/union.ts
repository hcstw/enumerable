import { Enumerable } from '../../Enumerable';
import { EnumerableLike } from '../../EnumerableLike';
import { IEqualityComparer } from '../../IEqualityComparer';
declare module "../../Enumerable" {
    interface Enumerable<T> {
        union(set: EnumerableLike<T>, comparer?: IEqualityComparer<T>): Enumerable<T>;
    }
}
Enumerable.prototype.union = function <T>(set: EnumerableLike<T>, comparer: IEqualityComparer<T> = (a, b) => a === b) {
    return this.concat(set).distinct(comparer);
}