import { Enumerable } from "../../Enumerable";

declare module "../../Enumerable" {
    interface Enumerable<T> {
        toArray(): T[];
    }
}
Enumerable.prototype.toArray = function () {
    const a = [];
    for (const item of this)
        a.push(item);
    return a;
}