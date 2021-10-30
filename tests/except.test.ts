import { Enumerable } from '../src/public_api';
import { assert, expect } from 'chai';
describe('except Tests', () => {
    it('should work', () => {
        const r = Enumerable.from([1, 2, 3, 4])
            .except([2, 3])
            .toArray();

        expect([1, 4]).deep.eq(r);
    });
});