import { Enumerable } from '../src/public_api';
import { assert, expect } from 'chai';
describe('toDictionary Tests', () => {
    it('should work', () => {
        const map = Enumerable.from([{ n: 1 }, { n: 2 }, { n: 3 }, { n: 4 }, { n: 5 }])
            .toDictionary(x => x.n);

        expect({
            1: { n: 1 },
            2: { n: 2 },
            3: { n: 3 },
            4: { n: 4 },
            5: { n: 5 }
        }).deep.eq(map);
    });
    it('should work with value selector', () => {
        const map = Enumerable.from([{ n: 1 }, { n: 2 }, { n: 3 }, { n: 4 }, { n: 5 }])
            .toDictionary(x => x.n, x => x.n);

        expect({
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5
        }).deep.eq(map);
    });
});