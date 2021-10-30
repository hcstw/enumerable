import { Enumerable } from '../src/public_api';
import { assert, expect } from 'chai';
describe('skipWhile Tests', () => {
    it('should work', () => {
        const r = Enumerable.from([1, 2, 3, 4, 5]).skipWhile(x => x <= 3).toArray();

        expect([4, 5]).deep.eq(r);
    });
});