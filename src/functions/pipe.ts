// export function pipe<T0, T1>(value: T0, fn1: (v: T0) => T1): T1
// export function pipe<T0, T1, T2>(
//   value: T0,
//   fn1: (v: T0) => T1,
//   fn2: (v: T1) => T2
// ): T2
// export function pipe<T0, T1, T2, T3>(
//   value: T0,
//   fn1: (v: T0) => T1,
//   fn2: (v: T1) => T2,
//   fn3: (v: T2) => T3
// ): T3
// export function pipe<T0, T1, T2, T3, T4>(
//   value: T0,
//   fn1: (v: T0) => T1,
//   fn2: (v: T1) => T2,
//   fn3: (v: T2) => T3,
//   fn4: (v: T3) => T4
// ): T4
// export function pipe<T0, T1, T2, T3, T4, T5>(
//   value: T0,
//   fn1: (v: T0) => T1,
//   fn2: (v: T1) => T2,
//   fn3: (v: T2) => T3,
//   fn4: (v: T3) => T4,
//   fn5: (v: T4) => T5
// ): T5
// export function pipe<T0, T1, T2, T3, T4, T5, T6>(
//   value: T0,
//   fn1: (v: T0) => T1,
//   fn2: (v: T1) => T2,
//   fn3: (v: T2) => T3,
//   fn4: (v: T3) => T4,
//   fn5: (v: T4) => T5,
//   fn6: (v: T5) => T6
// ): T6
// export function pipe<T0, T1, T2, T3, T4, T5, T6, T7>(
//   value: T0,
//   fn1: (v: T0) => T1,
//   fn2: (v: T1) => T2,
//   fn3: (v: T2) => T3,
//   fn4: (v: T3) => T4,
//   fn5: (v: T4) => T5,
//   fn6: (v: T5) => T6,
//   fn7: (v: T6) => T7
// ): T7
// export function pipe<T0, T1, T2, T3, T4, T5, T6, T7, T8>(
//   value: T0,
//   fn1: (v: T0) => T1,
//   fn2: (v: T1) => T2,
//   fn3: (v: T2) => T3,
//   fn4: (v: T3) => T4,
//   fn5: (v: T4) => T5,
//   fn6: (v: T5) => T6,
//   fn7: (v: T6) => T7,
//   fn8: (v: T7) => T8
// ): T8
// export function pipe<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
//   value: T0,
//   fn1: (v: T0) => T1,
//   fn2: (v: T1) => T2,
//   fn3: (v: T2) => T3,
//   fn4: (v: T3) => T4,
//   fn5: (v: T4) => T5,
//   fn6: (v: T5) => T6,
//   fn7: (v: T6) => T7,
//   fn8: (v: T7) => T8,
//   fn9: (v: T8) => T9
// ): T9
// export function pipe<T, R>(value: T, ...fns: ((v: any) => any)[]): R {
//   return fns.reduce<any>((acc, fn) => fn(acc), value)
// }

type PipeFnsOverload<T0> = (<T1>(fn1: (v: T0) => T1) => T1) &
  (<T1, T2>(fn1: (v: T0) => T1, fn2: (v: T1) => T2) => T2) &
  (<T1, T2, T3>(
    fn1: (v: T0) => T1,
    fn2: (v: T1) => T2,
    fn3: (v: T2) => T3,
  ) => T3) &
  (<T1, T2, T3, T4>(
    fn1: (v: T0) => T1,
    fn2: (v: T1) => T2,
    fn3: (v: T2) => T3,
    fn4: (v: T3) => T4,
  ) => T4) &
  (<T1, T2, T3, T4, T5>(
    fn1: (v: T0) => T1,
    fn2: (v: T1) => T2,
    fn3: (v: T2) => T3,
    fn4: (v: T3) => T4,
    fn5: (v: T4) => T5,
  ) => T5) &
  (<T1, T2, T3, T4, T5, T6>(
    fn1: (v: T0) => T1,
    fn2: (v: T1) => T2,
    fn3: (v: T2) => T3,
    fn4: (v: T3) => T4,
    fn5: (v: T4) => T5,
    fn6: (v: T5) => T6,
  ) => T6) &
  (<T1, T2, T3, T4, T5, T6, T7>(
    fn1: (v: T0) => T1,
    fn2: (v: T1) => T2,
    fn3: (v: T2) => T3,
    fn4: (v: T3) => T4,
    fn5: (v: T4) => T5,
    fn6: (v: T5) => T6,
    fn7: (v: T6) => T7,
  ) => T7) &
  (<T1, T2, T3, T4, T5, T6, T7, T8>(
    fn1: (v: T0) => T1,
    fn2: (v: T1) => T2,
    fn3: (v: T2) => T3,
    fn4: (v: T3) => T4,
    fn5: (v: T4) => T5,
    fn6: (v: T5) => T6,
    fn7: (v: T6) => T7,
    fn8: (v: T7) => T8,
  ) => T8) &
  (<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
    fn1: (v: T0) => T1,
    fn2: (v: T1) => T2,
    fn3: (v: T2) => T3,
    fn4: (v: T3) => T4,
    fn5: (v: T4) => T5,
    fn6: (v: T5) => T6,
    fn7: (v: T6) => T7,
    fn8: (v: T7) => T8,
    fn9: (v: T8) => T9,
  ) => T9) &
  (<R>(
    ...fns: [
      (v: T0) => unknown,
      ...((v: unknown) => unknown)[],
      (v: unknown) => R,
    ]
  ) => R)

export function pipe<T0>(value: T0): PipeFnsOverload<T0>
export function pipe<T>(value: T): <R>(...fns: ((v: any) => any)[]) => R {
  return (...fns) => fns.reduce<any>((acc, fn) => fn(acc), value)
}
