
import { Enumerable } from '../../Enumerable';

declare module "../../Enumerable" {
    interface Enumerable<T> {
        aggregate(fun: (result: T, current: T, index: number) => T): T;
        aggregate<TResult>(
            fun: (result: TResult, current: T, index: number) => TResult,
            seed?: TResult
        ): TResult;

    }
}
Enumerable.prototype.aggregate = function <T, TResult>(
    this: Enumerable<T>,
    fun: (result: T | TResult, current: T, index: number) => T | TResult,
    seed?: TResult
): TResult {
    let result: T | TResult | undefined = seed;
    let idx = 0;
    for (let item of this) {
        const i = idx++;
        if (result === undefined) {
            result = (item as unknown) as TResult;
        } else {
            result = fun(result, item, i);
        }
    }
    return result as TResult;
}