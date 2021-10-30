import { Enumerable } from '../src/public_api';
import { expect } from 'chai';
describe('aggregate Tests', () => {
    it('should work with seed', () => {
        const result = Enumerable.from([1, 2, 3]).aggregate<{ [key: number]: number }>((v, c, i) => {
            v[i] = c;
            return v;
        }, {});
        expect(result).deep.eq({
            0: 1,
            1: 2,
            2: 3
        });
    });

    it('should work no seed', () => {
        const result = Enumerable.from([1, 2, 3]).aggregate((v, c) => v + c);
        expect(result).deep.eq(1 + 2 + 3);
    });
});