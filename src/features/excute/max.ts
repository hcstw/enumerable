import { Enumerable } from '../../Enumerable';
declare module "../../Enumerable" {
    interface Enumerable<T> {
        max(memberSelector: (e: T) => number): number;
    }
}
Enumerable.prototype.max = function <T>(memberSelector: (e: T) => number) {
    return this.aggregate<T>((x, y) => memberSelector(y) > memberSelector(x) ? y : x);
}