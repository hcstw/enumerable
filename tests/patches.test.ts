import { Enumerable } from '../src/public_api';
import { assert, expect } from 'chai';
describe('patches Tests', () => {
    it('should work on Array', () => {
        assert.isTrue([1, 2, 3].asEnumerable() instanceof Enumerable);
    });
    it('should work on Array', () => {        
        assert.isTrue(document.querySelectorAll('div').asEnumerable() instanceof Enumerable);
    });
});