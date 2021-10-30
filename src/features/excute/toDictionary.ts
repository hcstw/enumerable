import { Enumerable } from '../../Enumerable';
declare module "../../Enumerable" {
    interface Enumerable<T> {
        toDictionary(keySelector: (e: T) => number): { [key: number]: T };
        toDictionary(keySelector: (e: T) => string): { [key: string]: T };
        toDictionary<TValue>(keySelector: (e: T) => number, valueSelector?: (e: T) => TValue): { [key: number]: TValue };
        toDictionary<TValue>(keySelector: (e: T) => string, valueSelector?: (e: T) => TValue): { [key: string]: TValue };
    }
}
Enumerable.prototype.toDictionary = function <T, TValue>(keySelector: (e: T) => string | number, valueSelector: (e: T) => TValue = e => e as unknown as TValue) {
    const result = {} as any;
    for (let item of this) {
        result[keySelector(item)] = valueSelector(item);
    }
    return result;
}