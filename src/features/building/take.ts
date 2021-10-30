import { Enumerable } from '../../Enumerable';
declare module "../../Enumerable" {
    interface Enumerable<T> {
        take(n: number): Enumerable<T>;
    }
}
Enumerable.prototype.take = function <T>(n: number) {
    const ref = this;
    return new Enumerable<T>(
        (function* () {
            let c = n;
            for (let item of ref) {
                if (c-- > 0) {
                    yield item;
                } else {
                    break;
                }
            }
        })
    );
}