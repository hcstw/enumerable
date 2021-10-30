import { Enumerable } from '../../Enumerable';
declare module "../../Enumerable" {
    interface Enumerable<T> {
        takeLast(n: number): Enumerable<T>;
    }
}
Enumerable.prototype.takeLast = function <T>(n: number) {
    const ref = this;
    return new Enumerable<T>(
        (function* () {
            const cache = ref.toArray();
            for (let i = cache.length - n, c = cache.length; i < c; i++) {
                yield cache[i];
            }
        })
    );
}