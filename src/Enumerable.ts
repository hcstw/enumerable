import { EnumerableLike } from './EnumerableLike';

export class Enumerable<T> implements Iterable<T> {
    protected source: Iterable<T>;
    constructor(source: EnumerableLike<T>) {
        if (typeof source === 'function') {
            this.source = ({
                [Symbol.iterator]: () => source()
            });
        } else if (Symbol.iterator in source) {
            this.source = source as Iterable<T>;
        } else if ('length' in source) {
            this.source = ({
                [Symbol.iterator]: function* () {
                    for (let i = 0, c = source.length; i < c; i++) {
                        yield source[i];
                    }
                }
            });
        } else {
            throw new Error('not supported source');
        }

    }
    [Symbol.iterator](): Iterator<T> {
        return this.source[Symbol.iterator]();
    }
    static from<T>(source: EnumerableLike<T>): Enumerable<T> {
        return new Enumerable(source);
    }
    static repeat<T>(item: T, count: number) {
        return this.from((function* () {
            for (let i = 0; i < count; i++) {
                yield item;
            }
        }));
    }
    static empty<T>() {
        return this.from<T>([]);
    }
    static range(start: number, count: number): Enumerable<number> {
        return this.from((function* () {
            for (let i = start, c = start + count; i < c; i++) {
                yield i;
            }
        }));
    }
}

