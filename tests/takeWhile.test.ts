import { Enumerable } from '../src/public_api';
import { assert, expect } from 'chai';
describe('takeWhile Tests', () => {
    it('should work', () => {
        const r = Enumerable.from([1, 2, 3, 4, 5]).takeWhile(x => x <= 3).toArray();

        expect([1, 2, 3]).deep.eq(r);
    });
});