import { Enumerable } from '../src/public_api';
import { assert, expect } from 'chai';
describe('append Tests', () => {
    it('should work', () => {
        const result = Enumerable.from([1, 2, 3])
            .append(2)
            .append(5)
            .toArray();

        expect([1, 2, 3, 2, 5]).deep.eq(result);
    });
});