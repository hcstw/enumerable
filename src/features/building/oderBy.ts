import { Enumerable } from '../../Enumerable';
import { IOrderedEnumerable } from '../../IOrderedEnumerable';
import { OrderedEnumerable } from '../../OrderedEnumerable';
declare module "../../Enumerable" {
    interface Enumerable<T> {
        oderBy<TSortable extends (string | number | Date)>(selector: (e: T) => TSortable): IOrderedEnumerable<T>;
    }
}
Enumerable.prototype.oderBy = function <T, TSortable extends (string | number | Date)>(selector: (e: T) => TSortable) {
    return new OrderedEnumerable<T, TSortable>(
        [{ direction: "asc", selector: selector }],
        this
    );
}