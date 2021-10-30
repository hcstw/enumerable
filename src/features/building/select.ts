import { Enumerable } from '../../Enumerable';
declare module "../../Enumerable" {
    interface Enumerable<T> {
        select<TResult>(selector: (e: T, i: number) => TResult): Enumerable<TResult>;
    }
}
Enumerable.prototype.select = function <T, TResult>(this: Enumerable<T>, selector: (e: T, i: number) => TResult): Enumerable<TResult> {
    let ref = this;
    return new Enumerable(function* () {
        let idx = 0;
        for (let item of ref) {
            yield selector(item, idx++);
        }
    });
}