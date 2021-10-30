import { Enumerable } from '../src/public_api';
import { assert, expect } from 'chai';
describe('max Tests', () => {
    it('should work', () => {
        const r = Enumerable.from([1, 3, 5, 2, 4, 6]).max(x => x);
        expect(6).eq(r);
    });
});