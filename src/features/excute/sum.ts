import { Enumerable } from '../../Enumerable';
declare module "../../Enumerable" {
    interface Enumerable<T> {
        sum(): number;
        sum(selector: (e: T) => number): number;
    }
}
Enumerable.prototype.sum = function <T>(selector: (e: T) => number = x => x as any): number {
    const iter = this.select(selector);
    return iter.aggregate((x, y) => {
        if (typeof y !== 'number') {
            throw new Error(`selected value ${y} is not a number`);
        }
        return x + y;
    }, 0);
}