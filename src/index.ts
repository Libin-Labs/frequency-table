export interface FrequencyRow {
  readonly value: string;
  readonly count: number;
}
export function frequencyTable(values: readonly string[]): FrequencyRow[] {
  if (!Array.isArray(values) || values.length > 1000000)
    throw new RangeError('Value count exceeds budget');
  const counts = new Map<string, number>();
  for (const v of values) {
    if (typeof v !== 'string' || v.length > 4096)
      throw new TypeError('Expected bounded string categories');
    counts.set(v, (counts.get(v) ?? 0) + 1);
  }
  return [...counts]
    .map(([value, count]) => ({ value, count }))
    .sort((a, b) => b.count - a.count || (a.value < b.value ? -1 : a.value > b.value ? 1 : 0));
}
