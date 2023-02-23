// type Chainable = {
//   option(key: string, value: any): Chainable
//   get(): any
// }

type Chainable<Options extends object = {}> = {
  option<K extends string, V>(key: K extends keyof Options ? never : K, value: V): Chainable<Options & { [S in K]: V }>
  get(): { [K in keyof Options]: Options[K] }
}
