import { Enumerable } from '../../Enumerable';
declare module "../../Enumerable" {
    interface Enumerable<T> {
        skipWhile(predicate: (e: T, i: number) => boolean): Enumerable<T>;
    }
}
Enumerable.prototype.skipWhile = function <T>(predicate: (e: T, i: number) => boolean) {
    const ref = this;
    return new Enumerable<T>(
        (function* () {
            let idx = 0;
            let skipping = true;
            for (let item of ref) {
                const i = idx++;
                if (skipping) {
                    if (!predicate(item, i)) {
                        skipping = false;
                        yield item;
                    }
                    continue;
                }
                yield item;
            }
        })
    );
}