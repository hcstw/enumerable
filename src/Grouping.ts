import { Enumerable } from "./Enumerable";

export class Grouping<Tkey, TElement> extends Enumerable<TElement> {
    constructor(set: Enumerable<TElement>, public key: Tkey) {
        super(set);
    }
}

