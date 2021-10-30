import { Enumerable } from '../src/public_api';
import { assert, expect } from 'chai';
describe('any Tests', () => {
    it('should true when found', () => {
        expect(true).eq(Enumerable.from([1, 2, 3, 4, 5]).any(x => x == 4))
    });

    it('should false when not found', () => {
        expect(false).eq(Enumerable.from([1, 2, 3, 4, 5]).any(x => x == 9))
    });
});