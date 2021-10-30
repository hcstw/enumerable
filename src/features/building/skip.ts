import { Enumerable } from '../../Enumerable';
declare module "../../Enumerable" {
    interface Enumerable<T> {
        skip(n: number): Enumerable<T>;
    }
}
Enumerable.prototype.skip = function <T>(n: number) {
    const ref = this;
    return new Enumerable<T>(
        (function* () {
            let c = n;
            for (let item of ref) {
                if (c-- > 0) {
                    continue;
                }
                yield item;
            }
        })
    );
}