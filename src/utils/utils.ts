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

// Visualize the sorting animation
export function sortAnim(array: number[][]) {
    array.forEach(([first, second], index) => {
        const div1 = document.getElementById(`${first}`);
        const div2 = document.getElementById(`${second}`);
        if (!div1 || !div2) return;   

        setTimeout(() => {
            div1.style.backgroundColor = 'red';
            div2.style.backgroundColor = 'red'; 

            const divHeight = div1.style.height;
            div1.style.height = div2.style.height;
            div2.style.height = divHeight;  

            setTimeout(() => {
                div1.style.backgroundColor = 'white';
                div2.style.backgroundColor = 'white';
            }, 1)
        }, index * 1)
    })
}