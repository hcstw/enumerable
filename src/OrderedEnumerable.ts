import { Enumerable } from './Enumerable';


export class OrderedEnumerable<T, TSortable extends (string | number | Date)> extends Enumerable<T> {
    constructor(
        private orderCommands: {
            direction: "asc" | "desc";
            selector: (e: T) => TSortable;
        }[],
        source: Enumerable<T>
    ) {
        super(
            (function* () {
                const arr = source.toArray();
                arr.sort((a, b) => {
                    for (let cmd of orderCommands) {
                        const pa = cmd.selector(a);
                        const pb = cmd.selector(b);
                        if (typeof pa === "string" ||
                            typeof pa === "number" ||
                            pa instanceof Date) {
                            if (pa == pb) {
                                continue;
                            } else {
                                return (pa > pb ? 1 : -1) * (cmd.direction === "asc" ? 1 : -1);
                            }
                        }
                    }
                    return 0;
                });
                for (let item of arr) {
                    yield item;
                }
            })
        );
    }
    thenBy(selector: (e: T) => any) {
        return new OrderedEnumerable<T, TSortable>(
            this.orderCommands.concat([{ direction: "asc", selector: selector }]),
            this
        );
    }
    thenByDescending(selector: (e: T) => any) {
        return new OrderedEnumerable<T, TSortable>(
            this.orderCommands.concat([{ direction: "desc", selector: selector }]),
            this
        );
    }
}
