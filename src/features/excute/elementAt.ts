import { Enumerable } from '../../Enumerable';
declare module "../../Enumerable" {
    interface Enumerable<T> {
        elementAt(n: number): T | undefined;
    }
}
Enumerable.prototype.elementAt = function <T>(n: number): T | undefined {
    for (let item of this) {
        if (n-- === 0) {
            return item;
        }
    }
    return undefined;
}