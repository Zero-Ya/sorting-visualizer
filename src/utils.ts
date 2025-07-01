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

export function bubbleSort(array: number[]): number[] {
    let swapped = true;

    while (swapped) {
        swapped = false;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
    }
    return array;
}

// const arr = [];
// for (let i = 0; i < 25; i++) {
//   arr.push(randomInts(100))
// }
// console.log(arr)