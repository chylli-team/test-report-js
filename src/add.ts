export function add(a: number, b: number): number {
    return a + b;
}

export function willThrowError(): number {
    throw new Error('error');
    return 1;
}
