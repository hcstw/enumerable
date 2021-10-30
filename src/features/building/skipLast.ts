import { Enumerable } from '../../Enumerable';
declare module "../../Enumerable" {
    interface Enumerable<T> {
        skipLast(n: number): Enumerable<T>;
    }
}
Enumerable.prototype.skipLast = function <T>(n: number) {
    const ref = this;
    return new Enumerable<T>(
        (function* () {
            const cache = ref.toArray();
            for (let i = 0, c = cache.length - n; i < c; i++) {
                yield cache[i];
            }
        })
    );
}