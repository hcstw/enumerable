import { Enumerable } from '../src/public_api';
import { expect } from 'chai';
describe('join Tests', () => {
    it('should work', () => {
        const left = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }, { id: 3, name: 'c' }];
        const right = [{ lid: 1, age: 11 }, { lid: 3, age: 33 }];
        const array = Enumerable.from(left).join(right, x => x.id, x => x.lid, (l, r) => ({ id: l.id, age: r.age })).toArray();
        expect(array).deep.eq([{ id: 1, age: 11 }, { id: 3, age: 33 }]);
    });
});