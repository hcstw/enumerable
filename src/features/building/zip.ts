import { Enumerable } from '../../Enumerable';
import { EnumerableLike } from '../../EnumerableLike';

declare module "../../Enumerable" {
    interface Enumerable<T> {
        zip<TRight, TResult>(set: EnumerableLike<TRight>, resultSelector: (left: T, right: TRight) => TResult): Enumerable<TResult>;
    }
}
Enumerable.prototype.zip = function <T, TRight, TResult>(set: EnumerableLike<TRight>, resultSelector: (left: T, right: TRight) => TResult) {
    const ref = this;
    return new Enumerable<TResult>(
        (function* () {
            const e = Enumerable.from(set);
            const leftIter = ref[Symbol.iterator]();
            const rightIter = e[Symbol.iterator]();
            let left = leftIter.next();
            let rihght = rightIter.next();
            while (!left.done && !rihght.done) {
                if (!left.done && !rihght.done) {
                    yield resultSelector(left.value, rihght.value);
                    left = leftIter.next();
                    rihght = rightIter.next();
                }
            }
        }));
}