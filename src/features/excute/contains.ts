import { Enumerable } from '../../Enumerable';
import { IEqualityComparer } from '../../IEqualityComparer';
declare module "../../Enumerable" {
    interface Enumerable<T> {
        contains(e: T, comparer?: IEqualityComparer<T>): boolean;
    }
}
Enumerable.prototype.contains = function <T>(e: T, comparer: IEqualityComparer<T> = (a, b) => a === b) {
    return this.any(x => comparer(x, e));
}