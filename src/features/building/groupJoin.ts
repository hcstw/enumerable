import { Enumerable } from '../../Enumerable';
import { EnumerableLike } from '../../EnumerableLike';
import { Grouping } from '../../Grouping';
import { IEqualityComparer } from '../../IEqualityComparer';
import { IGrouping } from '../../IGrouping';
declare module "../../Enumerable" {
    interface Enumerable<T> {
        groupJoin<TKey, TRight>(set: EnumerableLike<TRight>,
            letKeySelector: (e: T) => TKey,
            rightKeySelector: (e: TRight) => TKey): Enumerable<IGrouping<TKey, TRight>>;
        groupJoin<TKey, TResult, TRight>(set: EnumerableLike<TRight>,
            letKeySelector: (e: T) => TKey,
            rightKeySelector: (e: TRight) => TKey,
            resultSelector?: (grouping: IGrouping<TKey, TRight>) => TResult,
            keyComparer?: IEqualityComparer<TKey>): Enumerable<TResult>;
    }
}
Enumerable.prototype.groupJoin = function <T, TKey, TResult, TRight>(set: EnumerableLike<TRight>,
    letKeySelector: (e: T) => TKey,
    rightKeySelector: (e: TRight) => TKey,
    resultSelector: (grouping: Grouping<TKey, TRight>) => TResult = x => x as any,
    keyComparer: IEqualityComparer<TKey> = (a, b) => a === b) {
    const ref = this;
    return new Enumerable<TResult>(function* () {
        const e = Enumerable.from(set);
        for (let item of ref) {
            const leftKey = letKeySelector(item);
            const sset = e.where(x => keyComparer(leftKey, rightKeySelector(x)));
            yield resultSelector(new Grouping(sset, leftKey));
        }
    });
}
