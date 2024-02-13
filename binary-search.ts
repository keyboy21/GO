const binarySearch = (arr: number[], target: number): number => {
    let first = 0
    let last = arr.length - 1

    for (let index = 0; index <= arr.length; index++) {
        const mid = Math.floor((first + last) / 2);
        const middle = arr[mid];

        if (middle === target) {
            return middle
        } if (middle < target) {
            first = middle + 1
        } else {
            last = middle - 1
        }
    }

    return -1
}