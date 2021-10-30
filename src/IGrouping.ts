import { Enumerable } from "./Enumerable";

export interface IGrouping<Tkey, TElement> extends Enumerable<TElement> {
    key: Tkey;
}
