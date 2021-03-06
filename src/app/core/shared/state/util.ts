let typeCache: { [label: string]: boolean } = {};

export function makeActionType<T>(label: T | ''): T {
  if (typeCache[label as string]) {
    throw new Error(`Action type "${label}" is not unqiue"`);
  }

  typeCache[label as string] = true;

  return <T>label;
}
