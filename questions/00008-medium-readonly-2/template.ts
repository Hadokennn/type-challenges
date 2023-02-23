// K extends keyof T = keyof T  是为了确保K为空时默认为所有的key变成只读属性
type MyReadonly2<T, K extends keyof T = keyof T> = Readonly<Pick<T, K>> & Omit<T, K>
