import { Enumerable } from '../../Enumerable';
declare module "../../Enumerable" {
    interface Enumerable<T> {
        takeWhile(predicate: (e: T) => boolean): Enumerable<T>;
    }
}
Enumerable.prototype.takeWhile = function <T>(predicate: (e: T) => boolean) {
    const ref = this;
    return new Enumerable<T>(
        (function* () {
            for (let item of ref) {
                if (predicate(item)) {
                    yield item;
                } else {
                    break;
                }
            }
        })
    );
}