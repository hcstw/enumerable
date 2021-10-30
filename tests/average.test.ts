import { Enumerable } from '../src/public_api';
import { assert, expect } from 'chai';
describe('average Tests', () => {
    it('should work', () => {
        const result = Enumerable.from([2, 4, 8]).average();

        expect((2 + 4 + 8) / 3).eq(result);
    });

    it('should work with selector', () => {
        const result = Enumerable.from([{ n: 2 }, { n: 4 }, { n: 8 }]).average(x => x.n);

        expect((2 + 4 + 8) / 3).eq(result);
    });
});