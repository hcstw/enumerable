import { Enumerable } from '../src/public_api';
import { expect } from 'chai';
describe('where Tests', () => {
    it('should work', () => {
        const result = Enumerable.from([1, 2, 3, 4, 5]).where(x => x >= 2).where(x => x < 4).toArray();
        expect(result).deep.eq([2, 3]);
    });
    it('should only iterate once', () => {
        let times = 0;
        const result = Enumerable.from(function* () {
            for (let i = 0; i < 10; i++) {
                times++;
                yield i;
            }
        }).where(x => x >= 2).where(x => x < 4).toArray();
        expect(10).eq(times, 'iterate shoud be 10, but ' + times);
    })
});