import { Enumerable } from '../src/public_api';
import { assert, expect } from 'chai';
describe('sequenceEqual Tests', () => {
    it('should work when true', () => {
        expect(true).eq(Enumerable.from([2, 4, 5, 7]).sequenceEqual([2, 4, 5, 7]));
    });
    it('should work when false', () => {
        expect(false).eq(Enumerable.from([2, 4, 5, 7]).sequenceEqual([4, 2, 5, 7]));
    });
});