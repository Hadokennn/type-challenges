/**
 * https://jkchao.github.io/typescript-book-chinese/tips/infer.html#%E4%BB%8B%E7%BB%8D
 */
type MyAwaited<T> = T extends Promise<infer V> ? MyAwaited<V> : T
