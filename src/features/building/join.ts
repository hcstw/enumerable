import { Enumerable } from '../../Enumerable';
import { EnumerableLike } from "../../EnumerableLike";
import { IEqualityComparer } from "../../IEqualityComparer";

declare module "../../Enumerable" {
    interface Enumerable<T> {
        join<TRight, TKey, TResult>(set: EnumerableLike<TRight>,
            leftKeySelector: (e: T) => TKey,
            rightKeySelector: (e: TRight) => TKey,
            resultSelector: (left: T, right: TRight) => TResult,
            keyComparer?: IEqualityComparer<TKey>): Enumerable<TResult>
    }
}
Enumerable.prototype.join = function <T, TRight, TKey, TResult>(this: Enumerable<T>, set: EnumerableLike<TRight>,
    leftKeySelector: (e: T) => TKey,
    rightKeySelector: (e: TRight) => TKey,
    resultSelector: (left: T, right: TRight) => TResult,
    keyComparer: IEqualityComparer<TKey> = (a, b) => a === b): Enumerable<TResult> {
    const ref = this;
    return new Enumerable<TResult>(
        (function* () {
            const e = Enumerable.from(set);
            for (let item of ref) {
                for (let right of e) {
                    if (keyComparer(leftKeySelector(item), rightKeySelector(right))) {
                        yield resultSelector(item, right);
                    }
                }
            }
        }));
}