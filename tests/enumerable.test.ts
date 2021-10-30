import { Enumerable } from '../src/public_api';
import { expect } from 'chai';
describe('Enumerable Tests', () => {
    const sourceArray = [1, 2, 3, 4, 5];
    function checkCanIterate(array: Enumerable<number>) {
        const result = [];
        for (const item of array) {
            result.push(item);
        }
        expect(sourceArray).deep.eq(result);
    }

    function checkRepeatable(array: Enumerable<number>) {
        const result = [];
        for (const item of array) {
            result.push(item);
        }
        for (const item of array) {
            result.push(item);
        }
        expect(sourceArray.concat(sourceArray)).deep.eq(result);
    }
    const sourceArrayLike: ArrayLike<number> = sourceArray.reduce((o, n, i) => {
        o[i] = n;
        return o;
    }, { length: sourceArray.length } as { length: number, [key: number]: number });

    const sourceGenerator = function* () {
        for (const n of sourceArray) {
            yield n;
        }
    }
    it('should iterable from array', () => {
        const array = Enumerable.from(sourceArray);
        checkCanIterate(array);
    });
    it('should iterable from array and can repeat', () => {
        const array = Enumerable.from(sourceArray);
        checkRepeatable(array);
    });
    it('should iterable from generator', () => {
        const array = Enumerable.from(sourceGenerator);
        checkCanIterate(array);
    });
    it('should iterable from generator and can repeat', () => {
        const array = Enumerable.from(sourceGenerator);
        checkRepeatable(array);
    });

    it('should iterable from arraylike', () => {
        const array = Enumerable.from(sourceArrayLike);
        checkCanIterate(array);
    });
    it('should iterable from arraylike and can repeat', () => {
        const array = Enumerable.from(sourceArrayLike);
        checkRepeatable(array);
    });
});

