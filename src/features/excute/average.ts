import { Enumerable } from '../../Enumerable';
declare module "../../Enumerable" {
    interface Enumerable<T> {
        average(): number;
        average(selector: (e: T) => number): number;
    }
}
Enumerable.prototype.average = function <T>(selector: (e: T) => number = x => x as any) {
    let sum = 0;
    let count = 0;
    for (let item of this) {
        count++;
        const value = selector(item);
        if (typeof value !== 'number') {
            throw new Error(`selected value ${value} is not a number`);
        }
        sum += value;
    }
    if (count === 0) {
        throw new Error('no item in source');
    }
    return sum / count;
}