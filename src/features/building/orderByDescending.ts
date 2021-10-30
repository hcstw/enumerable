import { Enumerable } from '../../Enumerable';
import { IOrderedEnumerable } from '../../IOrderedEnumerable';
import { OrderedEnumerable } from '../../OrderedEnumerable';
declare module "../../Enumerable" {
    interface Enumerable<T> {
        orderByDescending(selector: (e: T) => any): IOrderedEnumerable<T>;
    }
}
Enumerable.prototype.orderByDescending = function <T>(selector: (e: T) => any) {
    return new OrderedEnumerable<T, any>(
        [{ direction: "desc", selector: selector }],
        this
    );
}