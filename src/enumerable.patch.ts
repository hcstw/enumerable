import { Enumerable } from './Enumerable';
declare global {
    interface Array<T> {
        asEnumerable(): Enumerable<T>;
    }
    interface NodeListOf<TNode extends Node> {
        asEnumerable(): Enumerable<TNode>;
    }
    interface NodeList {
        asEnumerable(): Enumerable<Node>;
    }
    
}
Array.prototype.asEnumerable = function () {
    return Enumerable.from(this);
}

NodeList.prototype.asEnumerable = function () {
    return Enumerable.from(this);
}