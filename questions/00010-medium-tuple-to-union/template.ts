type TupleToUnion<T> = T extends [infer K, ...infer Rest] ? K | TupleToUnion<Rest> : never

