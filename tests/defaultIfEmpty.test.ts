import { Enumerable } from '../src/public_api';
import { assert, expect } from 'chai';
describe('defaultIfEmpty Tests', () => {
    it('should work', () => {
        const a = Enumerable.from<number>([]);
        expect(5).eq(a.defaultIfEmpty(5).toArray()[0]);
    });
});