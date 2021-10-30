import { Enumerable } from '../../Enumerable';
import { Grouping } from '../../Grouping';
import { IEqualityComparer } from '../../IEqualityComparer';
import { IGrouping } from '../../IGrouping';
declare module "../../Enumerable" {
    interface Enumerable<T> {
        groupBy<TKey>(
            keySelector: (e: T) => TKey): Enumerable<IGrouping<TKey, T>>;
        groupBy<TKey, TResult>(
            keySelector: (e: T) => TKey,
            resultSelector: (grouping: IGrouping<TKey, T>) => TResult,
            keyComparer?: IEqualityComparer<TKey>): Enumerable<TResult>;
    }
}
Enumerable.prototype.groupBy = function <T, TKey, TResult>(
    keySelector: (e: T) => TKey,
    resultSelector: (grouping: Grouping<TKey, T>) => TResult = x => x as any,
    keyComparer: IEqualityComparer<TKey> = (a, b) => a === b): Enumerable<TResult> {
    const ref = this;
    return new Enumerable<TResult>(function* () {
        const keyCache: TKey[] = [];
        for (let item of ref) {
            const key = keySelector(item);
            if (keyCache.findIndex(x => keyComparer(x, key)) === -1) {
                keyCache.push(key);
                yield resultSelector(new Grouping(ref.where(x => keyComparer(keySelector(x), key)), key));
            }
        }
    });
}