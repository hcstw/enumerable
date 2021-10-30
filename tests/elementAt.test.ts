import { Enumerable } from '../src/public_api';
import { assert, expect } from 'chai';
describe('elementAt Tests', () => {
    it('should work', () => {
        const r = Enumerable.from([1, 2, 3, 4, 5, 6]).elementAt(4);
        expect(5).eq(r);
    });
});