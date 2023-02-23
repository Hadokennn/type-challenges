/**
 * any vs unknown
 * 两者最大的区别就是unknown只是个top type(任何类型都是他的subtype），而any即是top type又是 bottom type（他是任何类型的subtype), 这导致any基本上就是放弃了任何类型检查。
 * 使用unknown你还可以继续保证类型安全，使用any就是彻底放弃了类型检查
 * 然而大部分的场景你仅仅是需要个top type而已，最典型的场景就是泛型默认类型
 */
type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]
