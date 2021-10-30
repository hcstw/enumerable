import { Enumerable } from '../src/public_api';
import { expect } from 'chai';
describe('toArray Tests', () => {
    it('should work', () => {
        const array = Enumerable.from([1, 2, 3]).toArray();
        expect(array).deep.eq([1, 2, 3]);
    });
});