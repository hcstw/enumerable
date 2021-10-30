import { Enumerable } from "../../Enumerable";
import { EnumerableLike } from '../../EnumerableLike';

declare module "../../Enumerable" {
    interface Enumerable<T> {
        selectMany<TResult>(memberSelector: (e: T) => EnumerableLike<TResult>): Enumerable<TResult>;
    }
}
Enumerable.prototype.selectMany = function <TElement, TResult>(this: Enumerable<TElement>, memberSelector: (e: TElement) => EnumerableLike<TResult>) {
    const ref = this;
    return new Enumerable<TResult>(
        (function* () {
            for (let item of ref) {
                for (let sItem of Enumerable.from(memberSelector(item))) {
                    yield sItem;
                }
            }
        })
    );
}