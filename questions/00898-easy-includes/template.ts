import type { Equal } from '@type-challenges/utils'

type Includes<T extends readonly any[], U> = T extends [infer K, ...infer Rest]
  ? Equal<K, U> extends true
    ? true
    : Includes<Rest, U>
  : false
