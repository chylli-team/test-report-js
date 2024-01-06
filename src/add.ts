export function add(a: number, b: number): number {
    return a + b;
}

export function willThrowError(): void {
    throw new Error('This is an error');
}
