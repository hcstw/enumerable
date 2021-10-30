import { Enumerable } from '../src/public_api';
import { assert, expect } from 'chai';
describe('select Tests', () => {
    it('should work', () => {
        const a = Enumerable.from([1, 2, 3, 4]).select(x => (x * 2).toFixed()).toArray();
        expect(['2', '4', '6', '8']).deep.eq(a);
    });
});