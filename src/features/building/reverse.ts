import { Enumerable } from '../../Enumerable';
declare module "../../Enumerable" {
    interface Enumerable<T> {
        reverse(): Enumerable<T>
    }
}
Enumerable.prototype.reverse = function <T>() {
    const ref = this;
    return new Enumerable<T>(function* () {
        const cache: T[] = [];
        for (let item of ref) {
            cache.push(item);
        }
        for (let i = cache.length - 1; i >= 0; i--) {
            yield cache[i];
        }
    });
}