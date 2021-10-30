# Enumerable for Typescript/Javascript

base on es6 generator

## use

```npm install @hcstw/enumerable```

add
```import '@hcstw/enumerable'``` 
to your entry file (like main.ts) to extend `Array` and `NodeList`
### Enumerable from array

```typescript
[1,2,3].asEnumerable();
```

### Enumerable from NodeList

```typescript
document.querySelectorAll('div').asEnumerable()
```

### Enumerable from generator

```typescript
function *gen(){
    yield 1;
    yield 2;
    yield 3;
}
Enumerable.from(gen);
```
or
```typescript
Enumerable.from(function*() {
    for(let item of [1,2,3]) {
        yield 1;
        yield 2;
        yield 3;
    }
});
```

## use Enumerable
    
```typescript
Enumerable.range(0, 5)
    .select(x => ({ id: x, name: `name-${x}` }))
    .where(x => x.id > 3)
    .toArray()
// output
// [{id: 4, name: "name-4"}]

var owners = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
    { id: 3, name: 'c' }
];
var pets = [
    { owner: 1, name: 'pet-a' },
    { owner: 1, name: 'pet-b' },
    { owner: 2, name: 'pet-c' }
];
owners.asEnumerable()
    .groupJoin(pets, x => x.id, x => x.owner)
    .toDictionary(x => x.key, x => x.toArray());
// output
/*
{
    "1": [
        { "owner": 1, "name": "pet-a" },
        { "owner": 1, "name": "pet-b" }
    ],
    "2": [
        { "owner": 2, "name": "pet-c" }
    ],
    "3": []
}
*/
```

see [./tests/*.test.ts for more detial samples](https://github.com/hcstw/enumerable/tree/main/tests)

## implemented function

### staitc

    empty
    range
    repeat

### instnace

    join
    selectMany
    first
    firstOrDefault
    last
    lastOrDefault
    single
    singleOrDefault
    aggregate
    select
    count
    orderByDescending
    oderBy
    thenBy
    thenByDescending
    sum
    where
    contains
    all
    any
    append
    concat
    defaultIfEmpty
    distinct
    elementAt
    except
    groupBy
    groupJoin
    intersect
    max
    min
    average
    prepend
    reverse
    sequenceEqual
    skip
    skipLast
    skipWhile
    take
    takeLast
    takeWhile
    toDictionary
    toArray
    union
    zip
