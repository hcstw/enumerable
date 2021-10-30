import { Enumerable } from '../src/public_api';
import { assert, expect } from 'chai';
describe('min Tests', () => {
    it('should work', () => {
        const r = Enumerable.from([1, 3, 5, 2, 4, 6]).min(x => x);
        expect(1).eq(r);
    });
});