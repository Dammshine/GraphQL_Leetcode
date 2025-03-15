export function assertUnreachable(x: never, shouldThrow: boolean = true) {
  if (shouldThrow) {
    throw new Error(
      "Didn't expect to get here. Object is: " + JSON.stringify(x)
    );
  }
}

export function cloneSimple<T>(x: T): T {
  return JSON.parse(JSON.stringify(x)) as T;
}