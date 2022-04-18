function baseFunction<T>(
  values: Record<string, T>,
  keys: (number | string)[],
): Record<string, T> {
  const next: Record<string, T> = { ...values }
  keys.forEach(k => {
    if (k in values) {
      delete next[k]
    }
  })
  return next
}

export function omit<T>(
  values: Record<string, T>,
  keys: (number | string)[],
): Record<string, T>
export function omit<T>(
  keys: (number | string)[],
): (values: Record<string, T>) => Record<string, T>
export function omit<T>(
  valuesOrKeys: Record<string, T> | (number | string)[],
  keysOrNull?: (number | string)[],
): Record<string, T> | ((values: Record<string, T>) => Record<string, T>) {
  if (!keysOrNull) {
    const keys = valuesOrKeys as Extract<typeof valuesOrKeys, unknown[]>
    return values => baseFunction(values, keys)
  } else {
    const values = valuesOrKeys as Exclude<typeof valuesOrKeys, unknown[]>
    return baseFunction(values, keysOrNull)
  }
}
