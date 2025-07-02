export function randomInts(range: number): number {
    return Math.floor(Math.random() * range) + 1;
}

export function randomArray(range: number): number[] {
    // Generate the array
    let arr = [];
    for (let i = 1; i < range + 1; i++) {
        arr.push(i)
    }

    // Randomize the array
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let k: number = arr[i];
        arr[i] = arr[j];
        arr[j] = k;
    }

    return arr;
}