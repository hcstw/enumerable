export interface IEqualityComparer<T> {
    (a: T, b: T): boolean;
}
