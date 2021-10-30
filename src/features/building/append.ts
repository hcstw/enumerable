import { Enumerable } from '../../Enumerable';
declare module "../../Enumerable" {
    interface Enumerable<T> {
        append(newItem: T): Enumerable<T>;
    }
}
Enumerable.prototype.append = function <T>(newItem: T) {
    const ref = this;
    return new Enumerable<T>(function* () {
        for (let item of ref) {
            yield item;
        }
        yield newItem;
    });
}