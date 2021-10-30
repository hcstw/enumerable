import { Enumerable } from '../../Enumerable';
import { EnumerableLike } from '../../EnumerableLike';
import { IEqualityComparer } from '../../IEqualityComparer';
declare module "../../Enumerable" {
    interface Enumerable<T> {
        sequenceEqual(set: EnumerableLike<T>, comparer?: IEqualityComparer<T>): boolean;
    }
}
Enumerable.prototype.sequenceEqual = function <T>(set: EnumerableLike<T>, comparer: IEqualityComparer<T> = (a, b) => a === b) {
    const e = Enumerable.from(set);
    const leftIter = this[Symbol.iterator]();
    const rightIter = e[Symbol.iterator]();
    let left = leftIter.next();
    let right = rightIter.next();
    while (!left.done || !right.done) {
        if (left.done != right.done) {
            return false;
        }
        if (!comparer(left.value, right.value)) {
            return false;
        }
        left = leftIter.next();
        right = rightIter.next();
    }
    return true;
}