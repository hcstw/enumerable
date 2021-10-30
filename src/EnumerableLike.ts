import { Enumerable } from "./Enumerable";

export type EnumerableLike<T> = Enumerable<T> | Iterable<T> | ArrayLike<T> | (() => Generator<T>)