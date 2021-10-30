import { Enumerable } from "./Enumerable";

export interface IOrderedEnumerable<T> extends Enumerable<T> {
    thenBy(selector: (e: T) => any): IOrderedEnumerable<T>;
    thenByDescending(selector: (e: T) => any): IOrderedEnumerable<T>;
}
