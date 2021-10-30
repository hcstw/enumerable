import { Enumerable } from '../../Enumerable';
import { EnumerableLike } from '../../EnumerableLike';
declare module "../../Enumerable" {
    interface Enumerable<T> {
        concat(set: EnumerableLike<T>): Enumerable<T>;
    }
}
Enumerable.prototype.concat = function <T>(set: EnumerableLike<T>) {
    const ref = this;
    return new Enumerable<T>(function* () {
        for (let item of ref) {
            yield item;
        }
        for (let item of Enumerable.from(set)) {
            yield item;
        };
    });
}