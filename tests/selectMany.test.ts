import { Enumerable } from '../src/public_api';
import { expect } from 'chai';
describe('selectMany Tests', () => {
    it('should work', () => {
        const data = [
            { id: 1, name: 'a', addresses: ['aa', 'bb', 'cc'] },
            { id: 2, name: 'b', addresses: ['dd', 'ee', 'ff'] },
            { id: 3, name: 'c', addresses: ['gg', 'hh', 'ii'] }];
        const result = Enumerable.from(data).selectMany(x => x.addresses).toArray();

        expect(['aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg', 'hh', 'ii']).deep.eq(result);
    });
});