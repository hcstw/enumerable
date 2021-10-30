import { Enumerable } from '../src/public_api';
import { assert, expect } from 'chai';
describe('reverse Tests', () => {
    it('should work', () => {
        const r = Enumerable.from([1, 2, 3, 4]).reverse().toArray();

        expect([4, 3, 2, 1]).deep.eq(r);
    });
});