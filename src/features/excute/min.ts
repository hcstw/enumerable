import { Enumerable } from '../../Enumerable';
declare module "../../Enumerable" {
    interface Enumerable<T> {
        min(memberSelector: (e: T) => number): number;
    }
}
Enumerable.prototype.min = function <T>(memberSelector: (e: T) => number) {
    return this.aggregate<T>((x, y) => memberSelector(y) > memberSelector(x) ? x : y);
}