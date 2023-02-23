// 我们使用extends关键字创建了T的子类
// K extend keyof T 表示 K 是 T 的子类型，这里是一个类型约束声明。
// 比如 type T = "a" | "b" | "c";，那么 K 可以是 "a"，也可以是 "a" | "c" 或者 "a" | "b" | "c" 等
type MyPick<T, K extends keyof T> = { [key in K ]: T[key] }
